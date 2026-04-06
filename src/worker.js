/** Serves static files from public/ (Cloudflare Workers Static Assets). */
export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(request);
  },
};
