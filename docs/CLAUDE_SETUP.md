# Claude Sonnet 3.5 — Integration Guide

This project includes a small, environment-driven scaffold for calling a Claude-style model ("Claude Sonnet 3.5").

Important security note: do NOT call model provider APIs directly from client-side code with a secret key. Always use a server-side proxy or serverless function to keep secrets safe.

What I added
- `src/lib/ai/claude.ts` — a tiny wrapper that reads `VITE_CLAUDE_API_URL` and `VITE_CLAUDE_API_KEY` and performs a POST.
- `.env.example` — shows environment variable names you must provide.

Options for enabling Claude Sonnet 3.5 for all clients

1) Serverless proxy (recommended)
- Create a serverless function (Netlify, Vercel, AWS Lambda).
- Store the real API key in the host's secret manager (do not commit to the repo).
- The function should accept a sanitized prompt from the client, call the Anthropic/Claude endpoint, and return the response.
- Client-side code calls your serverless function (no secret in browser).

2) Backend service
- If you have an existing backend, add an endpoint that forwards prompts to Anthropic.
- Enforce rate limiting, authentication, and input sanitization.

3) Third-party proxy / SaaS
- Use a managed proxy service that provides secure key handling. Configure the client to call that proxy.

Environment variables (Netlify example)
- Add these to Netlify Site → Site settings → Build & deploy → Environment
  - `VITE_CLAUDE_API_URL` = https://api.anthropic.com/v1/complete (or your proxy URL)
  - `VITE_CLAUDE_API_KEY` = <YOUR_REAL_KEY> (set as secret)

Client-side usage (example)
- Import and call the helper from server-side code or from serverless function.

Security & best practices
- Keep the API key server-side only.
- Validate and sanitize all user-supplied prompts.
- Implement usage quotas and rate-limiting.
- Log requests (without storing secrets) and monitor costs.

If you'd like, I can:
- Add an example Netlify function that forwards requests to Anthropic and uses the helper above.
- Add a small demo page in this app that shows calling the serverless endpoint (without exposing secrets).

