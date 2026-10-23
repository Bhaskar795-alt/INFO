/**
 * ============================================================================
 * GETO // TELEGRAM SYSTEM — SINGLE CONFIGURATION SOURCE
 * All website data, bots, communities, social links, and settings originate here.
 * Any future modifications should ONLY be made within this file.
 * ============================================================================
 */

const CONFIG = {
  // Profile Information
  profile: {
    name: "GETO",
    username: "@SUPRME_DEFAULTERS",
    bio: [
      "#𝐃ᴏɴᴛ_𝐖ᴏʀʀʏ_𝐖ᴇ_𝐀ʀᴇ_𝐓ʜᴇ_𝐒𝐭𝐫ᴏɴɢᴇsᴛ_",
      "#𝐃𝛆𝖋𝛂υℓ𝛕𝛆ɤ𝛅_𝛅𝛂ɤ𝛋𝛂ɤ"
    ],
    // Leave empty ("") to use the neon CSS text-avatar.
    // If a custom image path is provided (e.g. "assets/profile/profile.png"), it will be rendered.
    profileImage: "",
    status: "ONLINE"
  },

  // System & Terminal Metadata
  system: {
    title: "GETO // TELEGRAM SYSTEM",
    label: "GETO SYSTEM",
    terminal: "GETO@TELEGRAM:~$",
    version: "v4.0.9-CYBER",
    os: "GETO OS"
  },

  // About Section (Mysterious, strictly grounded)
  about: {
    role: "TELEGRAM BOT FLEET OPERATOR",
    description: "GETO operates a specialized Telegram bot ecosystem and high-throughput network infrastructure. Overseeing a decentralized fleet of automated SUDO bots, intelligent conversational nodes, group management utilities, and community channels designed with an uncompromising dark cyber aesthetic."
  },

  // Social & Personal Channels
  social: {
    telegram: "https://t.me/SUPRME_DEFAULTERS",
    instagram: "https://www.instagram.com/miyamura_kun07?stkn=azUxZWR1bHlqd3J5"
  },

  // Audio / Theme Music Setting (Enabled: plays continuously on web open)
  musicEnabled: true,
  themeSong: "./assets/music/geto_cyber_theme.mp3",

  // Sudo Operator Requests (Reserved for future expansion)
  sudoRequest: {
    enabled: false,
    botToken: "",
    chatId: ""
  },

  // ==========================================================================
  // BOTS DATABASE (16 total unique bots)
  // Each bot: name, username, category, status ("active" / "deactive"), description, telegram
  // ==========================================================================
  bots: [
    // 10 Supreme Spam Fleet Bots
    {
      name: "SUPREME SPAM 1",
      username: "@supreme_x_spam1_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 1 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam1_bot"
    },
    {
      name: "SUPREME SPAM 2",
      username: "@supreme_x_spam2_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 2 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam2_bot"
    },
    {
      name: "SUPREME SPAM 3",
      username: "@supreme_x_spam3_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 3 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam3_bot"
    },
    {
      name: "SUPREME SPAM 4",
      username: "@supreme_x_spam4_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 4 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam4_bot"
    },
    {
      name: "SUPREME SPAM 5",
      username: "@supreme_x_spam5_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 5 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam5_bot"
    },
    {
      name: "SUPREME SPAM 6",
      username: "@supreme_x_spam6_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 6 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam6_bot"
    },
    {
      name: "SUPREME SPAM 7",
      username: "@supreme_x_spam7_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 7 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam7_bot"
    },
    {
      name: "SUPREME SPAM 8",
      username: "@supreme_x_spam8_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 8 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam8_bot"
    },
    {
      name: "SUPREME SPAM 9",
      username: "@supreme_x_spam9_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 9 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam9_bot"
    },
    {
      name: "SUPREME SPAM 10",
      username: "@supreme_x_spam10_bot",
      category: "SUDO / SPAM",
      status: "active",
      description: "Supreme Spam Node 10 under the GETO operational fleet.",
      telegram: "https://t.me/supreme_x_spam10_bot"
    },

    // 2 New Specialized Utility Bots
    {
      name: "String Session Bot",
      username: "@getostringbot",
      category: "STRING SESSION BOT",
      status: "active",
      description: "High-security Telegram String Session generator for Pyrogram and Telethon sessions.",
      telegram: "https://t.me/getostringbot"
    },
    {
      name: "Bot Hosting Bot",
      username: "@Geto_host_bot",
      category: "BOT HOSTING BOT",
      status: "active",
      description: "24/7 Telegram bot hosting and cloud deployment engine under GETO system.",
      telegram: "https://t.me/Geto_host_bot"
    },

    // 4 Ecosystem & Utility Bots
    {
      name: "SUDO",
      username: "@ll_SUPRRME_XD_ll_BOT",
      category: "SUDO / UTILITY",
      status: "active",
      description: "Core SUDO utility & group management bot within the GETO infrastructure.",
      telegram: "https://t.me/ll_SUPRRME_XD_ll_BOT"
    },
    {
      name: "Aiko",
      username: "@Aiko07_bot",
      category: "AI BOT",
      status: "active",
      description: "A friendly AI-powered Telegram assistant designed to interact with users and provide useful conversational assistance.",
      telegram: "https://t.me/Aiko07_bot"
    },
    {
      name: "Group Bot",
      username: "@Groupmodertion_bot",
      category: "GROUP HELP BOT",
      status: "active",
      description: "A Telegram group assistance bot designed to help communities with moderation and group-management tasks.",
      telegram: "https://t.me/Groupmodertion_bot"
    },
    {
      name: "Font Bot",
      username: "@CHANGE_THE_FONT_BOT",
      category: "FONT CHANGING BOT",
      status: "active",
      description: "A Telegram utility bot for transforming normal text into different stylish and decorative font formats.",
      telegram: "https://t.me/CHANGE_THE_FONT_BOT"
    }
  ],

  // ==========================================================================
  // COMMUNITIES (3 total)
  // ==========================================================================
  communities: [
    {
      name: "SUDO USE",
      type: "SUDO USE BOT",
      url: "https://t.me/SUPREME_SUDO_USE",
      description: "Official SUDO ecosystem space for users and community members."
    },
    {
      name: "DO NOT ENTRY",
      type: "CHATTING GROUP",
      url: "https://t.me/+LcXcflyx0xE3MGY9",
      description: "A Telegram chatting community for conversation and interaction."
    },
    {
      name: "DEFAULTER",
      type: "FIGHTING GROUP AND MY COMMUNITY",
      url: "https://t.me/+6q5QlKh32L9hNGI1",
      description: "A community space connected to the DEFAULTER group."
    }
  ]
};

// Export for module environments and attach to global window
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
