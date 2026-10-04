import { jsx } from "preact/jsx-runtime"

/**
 * Declares an emoji favicon as an inline SVG data URI, added to every page <head>.
 * Quartz's own <link rel="icon"> (static/icon.png) is emitted earlier in <head>;
 * browsers use the last declared icon, so this one wins.
 */
export const EmojiFavicon = (opts) => {
  const emoji = opts?.emoji ?? "🐢"
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
  const href = `data:image/svg+xml,${encodeURIComponent(svg)}`
  return {
    name: "EmojiFavicon",
    // validateCategory requires one of these hooks to recognise a transformer
    htmlPlugins: () => [],
    externalResources: () => ({
      additionalHead: [jsx("link", { rel: "icon", type: "image/svg+xml", href })],
    }),
  }
}

export default EmojiFavicon
