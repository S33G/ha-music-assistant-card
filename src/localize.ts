// All primary navigation labels are keyed here; English is the initial locale.
const en = {
  player: "Player",
  browse: "Browse",
  queue: "Queue",
  rooms: "Rooms",
  close: "Close",
  retry: "Retry",
  search: "Search music",
  empty: "Nothing here yet",
  unavailable: "Unavailable",
  play: "Play",
  pause: "Pause",
  previous: "Previous",
  next: "Next",
  shuffle: "Shuffle",
  repeat: "Repeat",
  mute: "Mute",
  unmute: "Unmute",
  volume: "Volume",
  details: "Details",
  favorite: "Favorite current track",
  more: "Load more",
  refresh: "Refresh",
  select: "Select room",
  join: "Join playback",
  leave: "Leave group",
  transfer: "Move playback here",
};
export function t(key: keyof typeof en) {
  return en[key];
}
