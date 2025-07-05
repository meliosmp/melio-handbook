---
title: └ Technical Details
---

# Technical Details

This page is a reference point for building farms or contraptions that may require some 
specific mechanism in Minecraft. Subject to change. Do note that we use Fabric; not Paper, not Vanilla.

### Chunks

- View Distance and Simulation Distance are available on `/sc status`

### Entities

- Mob caps are available on `/mobcaps`
- Phantoms only spawn near a player when the player is at Y level 192 or higher
- Wandering Traders spawning logic is applied per-player instead of globally
- Villager discounts in the End dimension are applied globally instead of per-player
- Although we are on Normal difficulty, when villagers get infected they will always be converted to zombie villagers.
- The tick interval for villagers stuck in 1x1 spaces are 55 ticks instead of 1 tick
- There is a soft breeding cap for villagers in a 13x13 area. This is to avoid
a large number of idle villagers being ticked while doing absolutely nothing.
- There is also a soft breeding cap (more generous than villagers) for all other mobs.
- There are other behavioural changes applied specifically to villagers. More information coming soon...

### Duping

See the rules for more information.

### Maintenance

We have regular off-site backups and regular server restarts every 24 hours. When a maintenance break
is required, you will be notified in advance via Discord announcements regarding the server downtime.

### Hardware

As of June 2025, we run on a dedicated machine with a Ryzen 9700x CPU. It is hosted in Europe.