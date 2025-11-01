const fetch = require('node-fetch');

// Netlify function to proxy requests to a Claude/Anthropic-like API.
// Environment variables (set in Netlify):
//   CLAUDE_API_URL - full provider API URL (e.g. https://api.anthropic.com/v1/complete)
//   CLAUDE_API_KEY - the API key (keep secret)

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiUrl = process.env.CLAUDE_API_URL;
  const apiKey = process.env.CLAUDE_API_KEY;

  if (!apiUrl || !apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing CLAUDE_API_URL or CLAUDE_API_KEY in environment' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const body = {
    model: payload.model || 'claude-3-sonnet',
    prompt: payload.prompt || '',
    max_tokens: payload.max_tokens || 512,
    temperature: payload.temperature || 0.2,
  };

  try {
    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    const text = await resp.text();
    const status = resp.status;

    return {
      statusCode: status,
      body: text,
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || String(err) }) };
  }
};
