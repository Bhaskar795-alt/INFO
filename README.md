# GETO // TELEGRAM SYSTEM

A futuristic multi-page personal website and bot matrix dashboard for **GETO** (`@ll_DARK_GETO_ll`).

Built with pure **HTML, CSS, and JavaScript** with zero external dependencies (except Font Awesome and Google Fonts: Orbitron & Share Tech Mono).

---

## ⚡ File Structure

```text
/
├── index.html        # Home (Hero, dynamic stats, quick fleet & community previews)
├── bots.html         # All Bots matrix (Full 14 bots + category & status filter tabs)
├── sudo.html         # Dedicated SUDO Fleet page (10 SUDO bots + SUDO utility + SUDO space)
├── communities.html  # Communities (SUDO USE, DO NOT ENTRY, DEFAULTER cards)
├── about.html        # About GETO (Mysterious operator dossier, stats & links)
├── contact.html      # Contact channels + interactive CLI terminal
├── style.css         # Cyber / terminal dark theme, CRT scanlines & matrix rain
└── src/
    ├── config.js     # ⭐ SINGLE SOURCE OF TRUTH (All data & settings)
    └── script.js     # Dynamic page renderer, matrix canvas, direct Telegram redirector & CLI engine
```

---

## 🛠️ Quick Customization Guide (Edit `src/config.js` Only)

All dynamic counters, bot matrices, community links, and profile settings update automatically when you edit `src/config.js`.

### 1. How to Change Bot Status (Active / Deactive)
In `src/config.js`, find the target bot inside `CONFIG.bots` and change its `status`:
```javascript
// To mark as active (green beacon):
status: "active",

// To mark as deactive (pink beacon):
status: "deactive",
```
The **ACTIVE** and **DEACTIVATED** stats counters on Home and About pages recalculate automatically.

---

### 2. How to Add a New Bot
In `src/config.js`, add a new object to the `CONFIG.bots` array:
```javascript
{
  name: "NEW CYBER BOT",
  username: "@YourNewBot",
  category: "UTILITY",            // Category: SUDO, AI BOT, GROUP HELP BOT, FONT CHANGING BOT, etc.
  status: "active",               // "active" or "deactive"
  description: "Description of what this bot provides.",
  telegram: "https://t.me/YourNewBot"
},
```
The **TOTAL BOTS** counter and filter matrix will instantly reflect the addition.

---

### 3. How to Add or Change Communities
In `src/config.js`, locate `CONFIG.communities` and update or add an entry:
```javascript
{
  name: "COMMUNITY NAME",
  type: "COMMUNITY TYPE",
  url: "https://t.me/YourCommunityLink",
  description: "Short description of the space."
}
```

---

### 4. How to Change Social Links & Username
In `src/config.js`, update `CONFIG.profile` and `CONFIG.social`:
```javascript
profile: {
  name: "GETO",
  username: "@ll_DARK_GETO_ll",
  ...
},
social: {
  telegram: "https://t.me/ll_DARK_GETO_ll",
  instagram: "https://www.instagram.com/miyamura_kun07?stkn=azUxZWR1bHlqd3J5"
}
```

---

### 5. How to Enable Theme Music
In `src/config.js`, set `musicEnabled` to `true` and supply your audio URL or local audio path:
```javascript
musicEnabled: true,
themeSong: "assets/music/theme.mp3", // or any direct audio URL
```
When enabled, the floating cyber audio HUD will appear in the bottom-right corner.

---

### 6. How to Add a Profile Photo
By default, a stylish CSS text-avatar with neon green/purple accents and corner brackets is displayed with `"GETO"`. If you want to use a custom photo instead:
```javascript
profile: {
  name: "GETO",
  ...
  profileImage: "assets/profile/profile.png", // path to your image
}
```
If `profileImage` is left empty (`""`), it automatically defaults to the clean CSS neon text-avatar without any broken image icons.

---

## 💻 Terminal Commands (in `contact.html`)
- `help` — Show list of available commands
- `bots` — List entire fleet with links
- `communities` — List all connected communities
- `sudo` — Access SUDO ecosystem hub
- `tg` — Open Telegram profile
- `insta` — Open Instagram profile
- `stats` — Print real-time fleet analytics
- `whoami` — Output operator dossier
- `clear` — Clear terminal screen
