# ᯓ꯭𓆰꯭𝅃꯭𝐆𝐄𝐓𝐎 -֟፝…𓆪᭄ꪾ — PERSONAL TELEGRAM CONTROL CENTER & BOT DASHBOARD

A futuristic, dark cyber-aesthetic personal Telegram dashboard and bot management hub designed specifically for **GETO** (`@ll_DARK_GETO_ll`).

This project is built using 100% vanilla **HTML, CSS, and JavaScript** with zero backend, zero Node.js server requirement, zero API keys, and zero databases. It works immediately in any web browser and is fully ready for one-click deployment on **GitHub Pages**.

---

## ⚡ Key Features

- **Cyber Aesthetic**: Deep obsidian background, dark charcoal glassmorphism panels, glowing neon purple & cyan aura, and interactive constellation particles.
- **Dynamic Bot Analytics**: Real-time calculated counters for **Active Bots**, **Deactivated Bots**, and **Total Bots** driven purely by the `bots` array.
- **Instant Search & Filter**: Real-time search across names, `@usernames`, and descriptions + instant status filter buttons (`ALL`, `ACTIVE`, `DEACTIVATED`).
- **One-Click Telegram Redirection**: Every bot card, community link, and social card is fully interactive with `target="_blank"` and `rel="noopener noreferrer"`.
- **Background Music HUD**: Compact audio controller with animated equalizer bars, loop playback at 25% volume, auto-unlock on interaction, and Web Audio fallback if no MP3 is present.
- **Resilient Fallbacks**:
  - Automatically displays a stylized holographic cyber SVG avatar if `assets/profile/profile.png` is absent or loading.
  - Automatically catches audio playback policies gracefully if `assets/music/background.mp3` has not been added yet.
- **Mobile First**: Pixel-perfect responsive layout optimized for 360px, 375px, 390px, 412px, 430px Android devices and desktop displays.

---

## 📁 Project Directory Structure

```text
/
├── index.html              # Main HTML markup & structure
├── style.css               # Futuristic cyberpunk glassmorphism stylesheet
├── script.js               # Dynamic bot engine, search, filters & audio controls
├── README.md               # Complete documentation & deployment guide
│
└── assets/
    ├── music/
    │   └── background.mp3  # Place your theme MP3 here (default fallback included)
    └── profile/
        └── profile.png     # Place your profile picture here (auto-fallback included)
```

---

## 🚀 1. How to Run the Website Locally

Since the project uses pure client-side web technologies, you don't need any special server to view it:

### Option A: Direct Browser Opening (Easiest)
Simply double-click `index.html` or right-click `index.html` and choose **Open With > Google Chrome** (or Edge, Safari, Brave, Firefox).

### Option B: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🤖 2. How to Add a New Bot

Open `script.js` in any text editor. Locate the `bots` array (around line 30) and add your new bot object to the array:

```javascript
{
  name: "SUPRRME XD BOT 11",
  username: "@ll_SUPRRME_XD_11_ll_BOT",
  status: "active",
  description: "New SUPRRME XD Telegram Bot",
  telegram: "https://t.me/ll_SUPRRME_XD_11_ll_BOT"
},
```

That's it! The website will **automatically**:
- Increase **Active Bots** count by 1.
- Increase **Total Bots** count by 1.
- Render the new card in the grid.
- Include the new bot in instant search and filters.

---

## ❌ 3. How to Remove a Bot

Open `script.js`, find the bot you want to remove in the `bots` array, and delete its object block (including the comma after it). Save the file, and the statistics and grid will update immediately.

---

## 🔄 4. How to Change Bot Status (Active / Deactivated)

In `script.js`, change the `"status"` property of any bot from `"active"` to `"deactivated"` (or vice-versa):

```javascript
// Active Bot (Glowing green beacon)
status: "active",

// Deactivated Bot (Glowing red beacon)
status: "deactivated",
```

The top statistic cards for **ACTIVE BOTS** and **DEACTIVATED BOTS** will update dynamically on page load without any manual counter adjustments.

---

## ✏️ 5. How to Change Bot Description or Details

In `script.js`, locate the target bot and edit the `"name"`, `"username"`, `"description"`, or `"telegram"` link:

```javascript
{
  name: "FONT BOT V2",
  username: "@CHANGE_THE_FONT_BOT",
  status: "active",
  description: "Updated custom font changing Telegram Bot",
  telegram: "https://t.me/CHANGE_THE_FONT_BOT"
}
```

---

## 👤 6. How to Change Telegram Username & Profile Info

At the very top of `script.js`, you will find the `CONFIG` object:

```javascript
const CONFIG = {
  name: "ᯓ꯭𓆰꯭𝅃꯭𝐆𝐄𝐓𝐎 -֟፝…𓆪᭄ꪾ",
  username: "ll_DARK_GETO_ll",
  telegram: "https://t.me/ll_DARK_GETO_ll",
  instagram: "https://www.instagram.com/miyamura_kun07?stkn=azUxZWR1bHlqd3J5",
  community: "https://t.me/+6q5QlKh32L9hNGI1",
  sudoGroup: "https://t.me/+orqD_xZvi5NlYzll",
  chattingGroup: "https://t.me/+hp2bEQ4WBNBjMWQ1",
  status: "online"
};
```

Simply change any value in `CONFIG`, and all matching links and labels will update seamlessly.

---

## 📸 7. How to Change Instagram Link

In `script.js`, update the `instagram` property inside `CONFIG`:

```javascript
instagram: "https://www.instagram.com/YOUR_NEW_INSTAGRAM",
```

---

## 🌐 8. How to Change Community & Group Links

In `script.js`, update the respective fields inside `CONFIG`:

```javascript
// Main Community channel
community: "https://t.me/+YOUR_COMMUNITY_LINK",

// Sudo Group portal
sudoGroup: "https://t.me/+YOUR_SUDO_GROUP_LINK",

// Chatting Group lounge
chattingGroup: "https://t.me/+YOUR_CHATTING_GROUP_LINK",
```

---

## 🖼️ 10. How to Replace the Profile Image

1. Prepare your desired profile picture in PNG format.
2. Rename the image to:
   ```text
   profile.png
   ```
3. Place it into the `assets/profile/` folder, replacing the existing file:
   ```text
   assets/profile/profile.png
   ```
4. Refresh the webpage. Your new avatar will appear with the animated neon aura ring.

> **Note**: If `profile.png` is ever deleted or missing, the website will never show a broken image box; it gracefully displays an ultra-stylish cybernetic holographic avatar fallback.

---

## 🎵 11. How to Replace Background Music

1. Choose your favorite MP3 track or theme song.
2. Rename the audio file to:
   ```text
   background.mp3
   ```
3. Copy it into the `assets/music/` folder:
   ```text
   assets/music/background.mp3
   ```
4. The website will automatically preload the track and loop it at 25% default volume.

> **Browser Autoplay Note**: Modern browsers restrict unmuted audio from autoplaying before user interaction. If autoplay is paused by browser policy, a floating button titled `♫ TAP TO ENABLE MUSIC` will appear. Tapping anywhere on the page or on the button immediately begins playback and activates the animated equalizer.

---

## 🚢 12. How to Deploy on GitHub Pages (Step-by-Step)

Deploying this dashboard on GitHub Pages is 100% free and takes less than 2 minutes:

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and click **New Repository**.
   - Name your repository (for example: `geto-telegram-dashboard`).
   - Choose **Public**.
   - Click **Create repository**.

2. **Upload Your Files**:
   - In your newly created repository, click **Upload files** (or push via Git).
   - Drag and drop the following files and folders:
     - `index.html`
     - `style.css`
     - `script.js`
     - `README.md`
     - `assets/` (containing `music/` and `profile/`)
   - Click **Commit changes**.

3. **Enable GitHub Pages**:
   - In your repository, click the **Settings** tab.
   - On the left sidebar under *Code and automation*, click **Pages**.
   - Under **Build and deployment**:
     - **Source**: `Deploy from a branch`
     - **Branch**: Select `main` (or `master`)
     - **Folder**: Select `/ (root)`
   - Click **Save**.

4. **Visit Your Live Website**:
   - Wait 30–60 seconds for GitHub to build the page.
   - Refresh the Pages tab to view your live URL:
     `https://<your-username>.github.io/<repository-name>/`
   - Share your futuristic Telegram Control Center with the world!

---

## 🛡️ License & Credits

- Designed for **ᯓ꯭𓆰꯭𝅃꯭𝐆𝐄𝐓𝐎 -֟፝…𓆪᭄ꪾ** (`@ll_DARK_GETO_ll`).
- Built with high-performance CSS3 animations, glassmorphism, responsive grid architecture, and HTML5 Web Audio.
