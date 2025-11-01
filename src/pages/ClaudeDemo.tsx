import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ClaudeDemo = () => {
  const [prompt, setPrompt] = useState('Write a short product description for QmindX');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setResponse('');
    try {
      const res = await fetch('/.netlify/functions/claude-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model: 'claude-3-sonnet', max_tokens: 200 }),
      });

      if (!res.ok) {
        const txt = await res.text();
        setError(`API Error: ${res.status} ${txt}`);
        return;
      }

      const data = await res.json();
      // Try to extract common fields
      const maybeText = data?.completion ?? data?.output ?? data?.text ?? data?.result ?? data;
      setResponse(typeof maybeText === 'string' ? maybeText : JSON.stringify(maybeText, null, 2));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
  <main id="main-content" style={{ paddingTop: 'var(--header-offset)' }}>
        <section className="py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8">
            <h1 className="sr-only">Claude Proxy Demo</h1>
            <h2 className="text-2xl font-bold mb-4">Claude Proxy Demo</h2>
            <p className="text-sm text-muted-foreground mb-4">This demo calls the Netlify serverless proxy at <code>/.netlify/functions/claude-proxy</code>. Make sure you set up CLAUDE_API_URL and CLAUDE_API_KEY in your Netlify environment before using.</p>
            <label htmlFor="claude-prompt" className="sr-only">Prompt</label>
            <Textarea id="claude-prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} className="mb-4" aria-label="Claude prompt" />
            <div className="flex gap-4">
              <Button onClick={handleSubmit} disabled={loading}>{loading ? 'Calling...' : 'Call Claude'}</Button>
            </div>

            {error && <div className="mt-4 text-destructive">{error}</div>}
            {response && (
              <pre className="mt-4 bg-muted p-4 rounded-md overflow-auto text-sm">{response}</pre>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClaudeDemo;
