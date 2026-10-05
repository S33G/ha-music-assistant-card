import { MusicAssistantCard } from "./card";
import { MusicAssistantEditor } from "./editor";
if (!customElements.get("ha-music-assistant-card"))
  customElements.define("ha-music-assistant-card", MusicAssistantCard);
if (!customElements.get("ha-music-assistant-card-editor"))
  customElements.define("ha-music-assistant-card-editor", MusicAssistantEditor);
interface CardMetadata {
  type: string;
  name: string;
  description: string;
  preview: boolean;
}
declare global {
  interface Window {
    customCards?: CardMetadata[];
  }
}
window.customCards ??= [];
if (!window.customCards.some((card) => card.type === "ha-music-assistant-card"))
  window.customCards.push({
    type: "ha-music-assistant-card",
    name: "Music Assistant",
    description: "Music discovery, playback, and multiroom controls.",
    preview: true,
  });
