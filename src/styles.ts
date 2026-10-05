import { css } from "lit";
export const styles = css`
  :host {
    display: block;
    height: 100%;
    min-width: 0;
    container-type: inline-size;
    color: var(--primary-text-color, #212121);
    font-family: var(--paper-font-body1_-_font-family, inherit);
    --music-accent: transparent;
  }
  * {
    box-sizing: border-box;
  }
  ha-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 0;
    overflow: hidden;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 12px);
    border: 1px solid var(--ha-card-border-color, var(--divider-color, #ddd));
    color: inherit;
  }
  button,
  input,
  select {
    font: inherit;
    color: inherit;
  }
  button,
  select {
    min-height: 44px;
    border-radius: 10px;
    border: 1px solid var(--divider-color, #ddd);
    background: var(--card-background-color, #fff);
    padding: 8px 12px;
  }
  button {
    cursor: pointer;
    touch-action: manipulation;
    transition:
      background-color 140ms ease,
      color 140ms ease,
      transform 140ms ease;
  }
  button:hover {
    background: var(--secondary-background-color, #eee);
  }
  button:disabled,
  select:disabled {
    opacity: 0.5;
    cursor: default;
  }
  button[aria-pressed="true"] {
    color: var(--primary-color, #03a9f4);
    border-color: currentColor;
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  summary:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 2px;
  }
  button.icon {
    width: 44px;
    height: 44px;
    padding: 10px;
    flex-shrink: 0;
    display: inline-grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: transparent;
  }
  svg {
    display: block;
    width: 20px;
    height: 20px;
    flex: none;
    fill: currentColor;
  }
  button.icon:hover:not(:disabled) {
    background: var(--secondary-background-color, #eee);
  }
  button.icon:active:not(:disabled),
  .nav button:active:not(:disabled) {
    transform: scale(0.94);
  }
  button.icon[aria-pressed="true"] {
    background: color-mix(
      in srgb,
      var(--primary-color, #03a9f4) 12%,
      transparent
    );
    color: var(--primary-color, #03a9f4);
  }
  button.icon.primary {
    width: 52px;
    height: 52px;
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.16);
  }
  button.icon.primary svg {
    width: 25px;
    height: 25px;
  }
  button.icon.primary:hover:not(:disabled) {
    background: var(--primary-color, #03a9f4);
    filter: brightness(1.08);
  }
  button.icon.primary:disabled {
    box-shadow: none;
  }
  input[type="range"] {
    width: 100%;
    min-width: 0;
    min-height: 44px;
    accent-color: var(--primary-color, #03a9f4);
  }
  input[type="search"],
  input[type="text"],
  input[type="number"] {
    min-height: 44px;
    width: 100%;
    border: 1px solid var(--divider-color, #ddd);
    background: var(--card-background-color, #fff);
    border-radius: 8px;
    padding: 8px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px 4px;
    flex-shrink: 0;
  }
  .header select {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    font-weight: 500;
  }
  .header button.icon {
    background: var(--secondary-background-color, #eee);
    width: 40px;
    height: 40px;
  }
  .body {
    min-height: 0;
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .player {
    padding: 12px 16px;
    min-width: 0;
    background: linear-gradient(var(--music-accent), var(--music-accent));
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .hero {
    display: flex;
    gap: 16px;
    align-items: center;
    min-width: 0;
  }
  .hero hamac-artwork {
    width: 72px;
    flex-shrink: 0;
  }
  .hero.small hamac-artwork {
    width: 64px;
  }
  .hero.large hamac-artwork {
    width: 144px;
  }
  .track {
    min-width: 0;
    flex: 1;
  }
  .track strong {
    font-size: 1.1rem;
    font-weight: 500;
    display: block;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .muted {
    color: var(--secondary-text-color, #666);
    font-size: 0.875rem;
  }
  .transport {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .progress {
    display: flex;
    align-items: center;
    gap: 8px;
    font-variant-numeric: tabular-nums;
    font-size: 0.75rem;
  }
  .volume {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .volume label {
    flex: 1;
    min-width: 0;
  }
  .nav {
    display: flex;
    padding: 4px 12px 8px;
    gap: 6px;
    flex-shrink: 0;
  }
  .nav button {
    flex: 1;
    min-width: 0;
    padding: 8px 4px;
    border: 0;
    border-radius: 12px;
    background: var(--secondary-background-color, #eee);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: 500;
  }
  .nav button:hover:not(:disabled),
  .nav button[aria-current="page"] {
    background: color-mix(
      in srgb,
      var(--primary-color, #03a9f4) 12%,
      var(--secondary-background-color, #eee)
    );
    color: var(--primary-color, #03a9f4);
  }
  .nav svg {
    width: 18px;
    height: 18px;
  }
  .pane {
    padding: 12px 16px;
    min-width: 0;
    min-height: 0;
    overflow: auto;
    border-top: 1px solid var(--divider-color, #ddd);
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }
  .filters label {
    flex: 1;
    min-width: 110px;
  }
  .filters select {
    width: 100%;
  }
  .filters .search {
    flex-basis: 100%;
  }
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid var(--divider-color, #ddd);
    flex-wrap: wrap;
  }
  .item hamac-artwork {
    width: 44px;
    flex-shrink: 0;
  }
  .item .track {
    min-width: 80px;
  }
  .item .actions {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .item .actions button {
    font-size: 0.8rem;
  }
  .item-main {
    display: flex;
    gap: 10px;
    align-items: center;
    flex: 1;
    min-width: 0;
    text-align: left;
    border: 0;
    background: transparent;
    padding: 0;
  }
  .room {
    padding: 12px 0;
    border-bottom: 1px solid var(--divider-color, #ddd);
  }
  .room-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .room-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .empty {
    padding: 20px 4px;
    text-align: center;
    color: var(--secondary-text-color, #666);
  }
  .message {
    padding: 8px 16px;
    font-size: 0.875rem;
    flex-shrink: 0;
    max-height: 100px;
    overflow: auto;
  }
  .error {
    color: var(--error-color, #b00020);
  }
  h2 {
    font-size: 1.15rem;
    font-weight: 500;
    margin: 0;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    line-height: 1.5;
  }
  details {
    margin: 8px 0;
  }
  summary {
    cursor: pointer;
    min-height: 44px;
    padding: 12px 0;
  }
  .metadata {
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .dialog {
    position: fixed;
    inset: 0;
    margin: auto;
    width: min(640px, calc(100vw - 24px));
    max-width: 100%;
    max-height: calc(100dvh - 24px);
    border: 1px solid var(--divider-color, #ddd);
    border-radius: var(--ha-card-border-radius, 12px);
    padding: 0;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color, #212121);
    overflow: auto;
  }
  .dialog::backdrop {
    background: rgb(0 0 0 / 0.45);
  }
  .dialog-head {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: 6px 12px;
    position: sticky;
    top: 0;
    background: var(--card-background-color, #fff);
    z-index: 1;
  }
  .dialog-head h2 {
    margin: 0 auto 0 4px;
    font-size: 1.05rem;
  }
  .dialog .pane {
    border: 0;
    max-height: none;
    overflow: visible;
    padding: 4px 16px 12px;
  }
  .dialog .pane > .muted:first-child {
    margin: 0 0 6px;
  }
  .dialog .item {
    padding: 7px 0;
  }
  .dialog .player {
    padding: 16px;
  }
  .dialog .message {
    max-height: none;
  }
  .dialog .hero hamac-artwork {
    width: 120px;
  }
  .detail-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 12px 0;
  }
  .split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    overflow: hidden;
  }
  .split .pane {
    border-top: 0;
    border-left: 1px solid var(--divider-color, #ddd);
  }
  .split .player {
    overflow: auto;
  }
  .compact .header {
    padding: 4px 8px 0;
  }
  .compact .player {
    padding: 4px 8px;
    gap: 4px;
    flex-direction: row;
    align-items: center;
  }
  .compact .hero {
    flex: 1;
    gap: 8px;
  }
  .compact .hero hamac-artwork {
    width: 40px;
  }
  .compact .hero .album,
  .compact .extras,
  .compact .progress,
  .compact .volume,
  .compact .metadata {
    display: none;
  }
  .compact .transport {
    flex-wrap: nowrap;
    gap: 0;
  }
  .compact .transport button.secondary {
    display: none;
  }
  .compact .nav {
    padding: 0 8px 4px;
    gap: 4px;
  }
  .compact .nav button {
    min-height: 30px;
    padding: 2px;
    font-size: 0.75rem;
  }
  .compact .header select {
    min-height: 30px;
    padding: 0;
  }
  .compact .header .icon {
    min-height: 30px;
    height: 30px;
    width: 34px;
    padding: 3px;
  }
  .compact .body {
    overflow: hidden;
  }
  .compact .track strong {
    font-size: 0.9rem;
  }
  .compact .muted {
    font-size: 0.75rem;
  }
  .compact .message {
    padding: 2px 8px;
    font-size: 0.7rem;
  }
  .compact .nav svg {
    width: 16px;
    height: 16px;
  }
  .compact button.icon.primary {
    width: 44px;
    height: 44px;
  }
  .body .extras {
    display: none;
  }
  .body .volume label > span {
    display: none;
  }
  .body > .pane {
    flex: 1;
  }
  .compact .message {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
  .compact .message.error {
    position: static;
    width: auto;
    height: auto;
    clip-path: none;
    max-height: 28px;
  }
  .header .back {
    border: 0;
  }
  @container (max-width:300px) {
    .hero {
      gap: 10px;
    }
    .hero hamac-artwork,
    .hero.large hamac-artwork {
      width: 64px;
    }
    .header {
      padding-inline: 8px;
    }
    .player {
      padding-inline: 8px;
    }
    .nav span {
      font-size: 0.75rem;
    }
    .compact .transport .secondary {
      display: none;
    }
    .compact .hero hamac-artwork {
      display: none;
    }
    .filters label {
      min-width: 80px;
    }
    .item .actions {
      width: 100%;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }
`;
