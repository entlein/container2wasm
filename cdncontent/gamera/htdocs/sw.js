self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
            '/container2wasm/',
            '/container2wasm/index.html',
            '/container2wasm/out.wasm',
            '/container2wasm/index.js',
            '/container2wasm/wasi_defs.js',
            '/container2wasm/worker-util.js',
            '/container2wasm/wasi-util.js',
            '/container2wasm/stack.js',
            '/container2wasm/stack-worker.js',
            '/container2wasm/worker.js',
            '/container2wasm/xterm-pty.conf',
            '/container2wasm/ws-delegate.js'
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