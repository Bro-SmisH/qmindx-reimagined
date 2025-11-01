/*
  Lightweight Claude Sonnet 3.5 integration scaffold.

  Purpose:
  - Provide a safe, generic wrapper to call a Claude (Anthropic) style endpoint from the client
  - Do NOT hardcode API keys in source. The function reads from environment variables.
  - By default this file assumes you'll configure a server-side proxy or serverless function
    because calling model APIs directly from the browser will leak secrets.

  Usage:
    // server-side (recommended)
    import { requestClaude } from '@/lib/ai/claude';

    const res = await requestClaude('Write a short product description for X');

  Environment variables (set these in your deployment platform):
    VITE_CLAUDE_API_URL  - optional if you use a serverless proxy. Example: https://api.anthropic.com/v1/complete
    VITE_CLAUDE_API_KEY  - the API key (DO NOT commit this)

  Notes:
  - For production, implement calls from a serverless function (Netlify Functions, Vercel Serverless, etc.)
    and keep the secret on the server side. Use the server to forward requests to Anthropic (or your provider).
  - If you want a client-only setup for testing, set VITE_CLAUDE_API_URL to a proxy you control.
*/

type ClaudeRequestOptions = {
  model?: string; // e.g. "claude-3-sonnet" or your provider's model name
  prompt?: string;
  max_tokens?: number;
  temperature?: number;
};

export async function requestClaude(
  prompt: string,
  options: ClaudeRequestOptions = {}
): Promise<{ success: boolean; text?: string; error?: string }> {
  const apiUrl = import.meta.env.VITE_CLAUDE_API_URL as string | undefined;
  const apiKey = import.meta.env.VITE_CLAUDE_API_KEY as string | undefined;

  if (!apiUrl || !apiKey) {
    return {
      success: false,
      error:
        'Claude API URL or KEY not configured. Set VITE_CLAUDE_API_URL and VITE_CLAUDE_API_KEY in your environment (server-side recommended).',
    };
  }

  const body = {
    model: options.model ?? 'claude-3-sonnet',
    prompt,
    max_tokens: options.max_tokens ?? 512,
    temperature: options.temperature ?? 0.2,
  } as Record<string, unknown>;

  try {
    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return { success: false, error: `API error: ${resp.status} ${text}` };
    }

    const json = await resp.json();

    // Generic extraction: many providers return either { completion } or { output } etc.
    const maybeText = json?.completion ?? json?.output ?? json?.text ?? json?.result ?? null;

    return {
      success: true,
      text: typeof maybeText === 'string' ? maybeText : JSON.stringify(maybeText),
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}
