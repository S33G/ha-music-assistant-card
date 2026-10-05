import { LitElement, css, html } from "lit";
import { safeImage } from "./model";
const accents = new Map<string, string>();
export class Artwork extends LitElement {
  static properties = {
    src: { type: String },
    accent: { type: Boolean },
    failed: { state: true },
  };
  src = "";
  accent = false;
  private failed = false;
  private last = "";
  static styles = css`
    :host {
      display: block;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: var(--ha-card-border-radius, 12px);
      background: var(--secondary-background-color, #eee);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .placeholder {
      height: 100%;
      display: grid;
      place-items: center;
      color: var(--secondary-text-color, #666);
      font-size: 2rem;
    }
  `;
  protected willUpdate() {
    if (this.last !== this.src) {
      this.last = this.src;
      this.failed = false;
    }
  }
  protected render() {
    const src = safeImage(this.src);
    return src && !this.failed
      ? html`<img
          src=${src}
          alt=""
          loading="lazy"
          @error=${() => {
            this.failed = true;
          }}
          @load=${() => this.extract(src)}
        />`
      : html`<div class="placeholder" aria-hidden="true">♫</div>`;
  }
  private extract(src: string) {
    if (!this.accent) return;
    const publish = (color: string) =>
      this.dispatchEvent(
        new CustomEvent("artwork-accent", {
          detail: color,
          bubbles: true,
          composed: true,
        }),
      );
    const cached = accents.get(src);
    if (cached) {
      publish(cached);
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      if (this.src !== src || !this.isConnected) return;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(image, 0, 0, 1, 1);
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${r} ${g} ${b} / 0.12)`;
        accents.set(src, color);
        if (accents.size > 30) accents.delete(accents.keys().next().value!);
        publish(color);
      } catch {
        /* Cross-origin artwork keeps theme colors. */
      }
    };
    image.src = src;
  }
}
if (!customElements.get("hamac-artwork"))
  customElements.define("hamac-artwork", Artwork);
