/**
 * Static assets + clean URLs (no .html suffix) for marketing pages.
 * Canonical: /contact, /faq, /download/scan, … — legacy /contact.html 301 → /contact
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return env.ASSETS.fetch(request);
    }

    let pathname = url.pathname;
    const last = pathname[pathname.length - 1];
    if (pathname.length > 1 && last === '/') {
      pathname = pathname.slice(0, -1);
    }

    /** @type {Record<string,string>} pathname → asset path in bucket */
    const SPA_ROUTES = {
      '/contact': '/contact.html',
      '/about': '/about.html',
      '/faq': '/faq.html',
      '/privacy': '/privacy.html',
      '/terms': '/terms.html',
      '/ride': '/ride.html',
      '/drive': '/drive.html',
      '/business': '/business.html',
      '/download': '/download/index.html',
      '/download/scan': '/download/scan.html',
      '/download/android': '/download/android.html',
    };

    /** @param {string} path */
    const redirect = path => {
      const u = new URL(path || '/', url.origin);
      u.search = url.search;
      return Response.redirect(u.toString(), 301);
    };

    // ── Legacy *.html → clean URL ──────────────────────────────────────
    if (pathname.endsWith('.html')) {
      const noExt = pathname.slice(0, -5);
      if (noExt === '/index') return redirect('/');
      const hit = SPA_ROUTES[noExt];
      if (hit) return redirect(noExt);
      const m = pathname.match(/^\/download\/([\w-]+)\.html$/);
      if (m) return redirect(`/download/${m[1]}`);
      return env.ASSETS.fetch(request);
    }

    // ── Homepage ────────────────────────────────────────────────────────
    if (pathname === '' || pathname === '/') {
      return env.ASSETS.fetch(request);
    }

    // ── Extensionless SPA-like routes ───────────────────────────────────
    const asset = SPA_ROUTES[pathname];
    if (asset) {
      const inner = new URL(asset, url.origin);
      inner.search = url.search;
      return env.ASSETS.fetch(
        new Request(inner.toString(), {
          method: request.method,
          headers: request.headers,
          redirect: 'manual',
        }),
      );
    }

    return env.ASSETS.fetch(request);
  },
};
