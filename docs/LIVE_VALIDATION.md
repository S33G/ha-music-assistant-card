# Live release gate

Not yet performed in this workspace. Record Home Assistant, Music Assistant Server, mass_queue, OS, browser, and companion-app versions alongside the results. Do not publish as a validated release until these checks pass.

- Install the bundled module in a real Home Assistant dashboard; confirm picker and editor operation.
- Exercise Sections at 6/9/12 columns and 2/4/6/8 rows as applicable, masonry, panel, and nested stacks. Test HA light/dark themes and custom theme variables.
- Use two real MA players: transport, seek, volume, alternate amplifier volume, per-room ceilings, mute, shuffle, repeat, join/unjoin, and queue transfer. Test both compatible and incompatible providers.
- Apply a room preset with an offline member; verify partial success and existing group preservation.
- Test native-only discovery, current/next queue, favorites, recents, play modes, native artwork, and favorite-song button.
- Enable mass_queue for the selected instance. Verify queue paging and item-ID editing, metadata expansion, playlist pages, podcast episodes, and event-driven refresh. Test another MA instance without extension mapping.
- Confirm authenticated artwork works locally and remotely over HTTPS; failure must retain controls and a placeholder.
- Confirm denied registry/event permissions produce native fallback or documented configuration overrides.
- Disconnect/reconnect Home Assistant; suspend/resume a wall tablet and switch dashboard views. Verify no hidden queue polling or leaked subscriptions.
- Test Safari/iOS and Android companion WebViews on actual phones and tablets, including rotation, keyboard opening, screen reader focus, 200% zoom, and reduced motion.
- Verify the final bundle/resource names and package version match release documentation; ship license notices with the module.
