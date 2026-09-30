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
    username: "@ll_DARK_GETO_ll",
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
    telegram: "https://t.me/ll_DARK_GETO_ll",
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
  // BOTS DATABASE (14 total unique bots)
  // Each bot: name, username, category, status ("active" / "deactive"), description, telegram
  // ==========================================================================
  bots: [
    // 10 SUDO Fleet Bots
    {
      name: "SUDO BOT 1",
      username: "@ll_SUPRRME_XD_1_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_1_ll_BOT"
    },
    {
      name: "SUDO BOT 2",
      username: "@ll_SUPRRME_XD_2_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_2_ll_BOT"
    },
    {
      name: "SUDO BOT 3",
      username: "@ll_SUPRRME_XD_3_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_3_ll_BOT"
    },
    {
      name: "SUDO BOT 4",
      username: "@ll_SUPRRME_XD_4_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_4_ll_BOT"
    },
    {
      name: "SUDO BOT 5",
      username: "@ll_SUPRRME_XD_5_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_5_ll_BOT"
    },
    {
      name: "SUDO BOT 6",
      username: "@ll_SUPRRME_XD_6_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_6_ll_BOT"
    },
    {
      name: "SUDO BOT 7",
      username: "@ll_SUPRRME_XD_7_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_7_ll_BOT"
    },
    {
      name: "SUDO BOT 8",
      username: "@ll_SUPRRME_XD_8_l_l_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_8_l_l_BOT"
    },
    {
      name: "SUDO BOT 9",
      username: "@ll_SUPRRME_XD_9_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_9_ll_BOT"
    },
    {
      name: "SUDO BOT 10",
      username: "@ll_SUPRRME_XD_10_ll_BOT",
      category: "SUDO",
      status: "active",
      description: "SUDO ecosystem bot under the GETO fleet.",
      telegram: "https://t.me/ll_SUPRRME_XD_10_ll_BOT"
    },

    // 4 Special Bots
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
      url: "https://t.me/GETO_SUDO_USE",
      description: "Official SUDO ecosystem space for users and community members."
    },
    {
      name: "DO NOT ENTRY",
      type: "CHATTING GROUP",
      url: "https://t.me/+hp2bEQ4WBNBjMWQ1",
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
