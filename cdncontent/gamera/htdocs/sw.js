self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/out.wasm',
          '/index.js',
          '/wasi_defs.js',
          '/worker-util.js',
          '/wasi-util.js',
          '/stack.js',
          '/stack-worker.js',
          '/worker.js',
          '/xterm-pty.conf',
          '/ws-delegate.js'
          // Add other assets here
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      fetch(event.request).then((response) => {
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
        newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      })
    );
  });