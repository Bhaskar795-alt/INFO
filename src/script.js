/**
 * ============================================================================
 * GETO // TELEGRAM SYSTEM — CORE DYNAMIC SCRIPT
 * Renders pages dynamically from CONFIG, powers matrix rain,
 * manages responsive navigation, dynamic stats, filters, and terminal.
 * ============================================================================
 */

(function () {
  'use strict';

  // Ensure CONFIG is available
  const cfg = window.CONFIG || {};

  document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    initMobileNav();
    initMusicHUD();
    renderCommonElements();

    // Determine current page from body dataset
    const page = document.body.dataset.page || 'home';

    switch (page) {
      case 'home':
        renderHomePage();
        break;
      case 'bots':
        renderBotsPage();
        break;
      case 'communities':
        renderCommunitiesPage();
        break;
      case 'about':
        renderAboutPage();
        break;
      case 'contact':
        renderContactPage();
        break;
      default:
        renderHomePage();
    }
  });

  // ==========================================================================
  // 1. MATRIX RAIN BACKGROUND (Canvas)
  // ==========================================================================
  function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    }, { passive: true });

    const characters = '0123456789ABCDEFGETO_SYS_λπΣΩアイウエオカキクケコサシスセソタチツテト';
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(5, 0, 10, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00ff9d';
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Randomly use neon purple or cyan for digital glints
        if (Math.random() > 0.92) {
          ctx.fillStyle = '#00e5ff';
        } else if (Math.random() > 0.85) {
          ctx.fillStyle = '#a000ff';
        } else {
          ctx.fillStyle = '#00ff9d';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  // ==========================================================================
  // 2. MOBILE NAVIGATION
  // ==========================================================================
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const drawer = document.getElementById('mobileMenuDrawer');
    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen.toString());
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  // ==========================================================================
  // 3. THEME SONG & MUSIC HUD (Config-driven)
  // ==========================================================================
  function initMusicHUD() {
    const hud = document.getElementById('musicHUD');
    const audio = document.getElementById('bgAudio');
    if (!hud) return;

    if (!cfg.musicEnabled || !cfg.themeSong) {
      hud.classList.add('hidden');
      return;
    }

    hud.classList.remove('hidden');
    let isPlaying = false;

    hud.addEventListener('click', () => {
      if (!audio) return;
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        hud.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span>AUDIO: OFF</span>';
      } else {
        audio.src = cfg.themeSong;
        audio.play().then(() => {
          isPlaying = true;
          hud.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>AUDIO: ON</span>';
        }).catch(() => {
          // silently handle playback policies
        });
      }
    });
  }

  // ==========================================================================
  // 4. COMMON ELEMENTS (Header status, footer branding)
  // ==========================================================================
  function renderCommonElements() {
    // Nav status
    const navStatus = document.getElementById('navStatusText');
    if (navStatus && cfg.profile) {
      navStatus.textContent = cfg.profile.status || 'ONLINE';
    }

    // Active page highlight in navigation
    const currentPage = document.body.dataset.page || 'home';
    const navLinks = document.querySelectorAll('[data-nav-page]');
    navLinks.forEach(link => {
      if (link.getAttribute('data-nav-page') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Helper: Computes dashboard statistics automatically
  function getStats() {
    const bots = Array.isArray(cfg.bots) ? cfg.bots : [];
    const total = bots.length;
    const active = bots.filter(b => b.status.toLowerCase() === 'active').length;
    const deact = bots.filter(b => b.status.toLowerCase() === 'deactive').length;
    const system = (cfg.system && cfg.system.os) || 'GETO OS';
    const status = (cfg.profile && cfg.profile.status) || 'ONLINE';

    return { total, active, deact, system, status };
  }

  // Helper: Renders the 5 statistics counter boxes
  function renderStatsBar(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const stats = getStats();
    el.innerHTML = `
      <div class="stat-box stat-total">
        <div class="stat-box-val">${stats.total}</div>
        <div class="stat-box-label">TOTAL BOTS</div>
      </div>
      <div class="stat-box stat-active">
        <div class="stat-box-val">${stats.active}</div>
        <div class="stat-box-label">ACTIVE</div>
      </div>
      <div class="stat-box stat-deact">
        <div class="stat-box-val">${stats.deact}</div>
        <div class="stat-box-label">DEACTIVATED</div>
      </div>
      <div class="stat-box stat-sys">
        <div class="stat-box-val" style="font-size: 1.25rem; padding-top: 0.4rem;">${escapeHTML(stats.system)}</div>
        <div class="stat-box-label">SYSTEM</div>
      </div>
      <div class="stat-box stat-state">
        <div class="stat-box-val" style="font-size: 1.25rem; padding-top: 0.4rem; color: var(--neon-green);">${escapeHTML(stats.status)}</div>
        <div class="stat-box-label">STATUS</div>
      </div>
    `;
  }

  // Helper: Renders Avatar (CSS text-avatar if no profile image is configured)
  function renderAvatar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const profile = cfg.profile || {};
    if (profile.profileImage && profile.profileImage.trim() !== '') {
      container.innerHTML = `
        <div class="corner-accent corner-tl"></div>
        <div class="corner-accent corner-tr"></div>
        <div class="corner-accent corner-bl"></div>
        <div class="corner-accent corner-br"></div>
        <div class="avatar-inner-box">
          <img class="avatar-custom-img" src="${escapeHTML(profile.profileImage)}" alt="${escapeHTML(profile.name)}">
        </div>
      `;
    } else {
      // High-tech Neon CSS text-avatar with corner brackets
      container.innerHTML = `
        <div class="corner-accent corner-tl"></div>
        <div class="corner-accent corner-tr"></div>
        <div class="corner-accent corner-bl"></div>
        <div class="corner-accent corner-br"></div>
        <div class="avatar-inner-box">
          <span class="avatar-neon-text">${escapeHTML(profile.name || 'GETO')}</span>
          <span class="avatar-subtag">// CORE</span>
        </div>
      `;
    }
  }

  // Helper: Generates a single Bot Card HTML
  function createBotCardHTML(bot) {
    const isActive = bot.status.toLowerCase() === 'active';
    return `
      <a href="${escapeHTML(bot.telegram)}" target="_blank" rel="noopener noreferrer" class="bot-card-terminal" data-category="${escapeHTML(bot.category.toUpperCase())}" data-status="${isActive ? 'ACTIVE' : 'DEACTIVE'}">
        <div>
          <div class="bot-card-top">
            <span class="bot-category-badge">${escapeHTML(bot.category)}</span>
            <span class="bot-status-tag ${isActive ? 'active' : 'deactive'}">
              ● ${isActive ? 'ACTIVE' : 'DEACTIVE'}
            </span>
          </div>
          <h3 class="bot-card-name">${escapeHTML(bot.name)}</h3>
          <span class="bot-card-username">${escapeHTML(bot.username)}</span>
          <p class="bot-card-desc">${escapeHTML(bot.description)}</p>
        </div>
        <div class="bot-card-action">
          <span>[ ACCESS TELEGRAM ]</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </a>
    `;
  }

  // Helper: Generates a Community Card HTML
  function createCommunityCardHTML(comm) {
    return `
      <a href="${escapeHTML(comm.url)}" target="_blank" rel="noopener noreferrer" class="community-card-box">
        <div>
          <span class="community-type-chip">${escapeHTML(comm.type)}</span>
          <h3 class="community-name-title">${escapeHTML(comm.name)}</h3>
          <p class="community-desc-text">${escapeHTML(comm.description)}</p>
        </div>
        <div class="community-btn-row">
          <span>[ JOIN COMMUNITY ]</span>
          <i class="fa-brands fa-telegram"></i>
        </div>
      </a>
    `;
  }

  // ==========================================================================
  // 5. PAGE: HOME (index.html)
  // ==========================================================================
  function renderHomePage() {
    renderAvatar('homeAvatarContainer');
    renderStatsBar('homeStatsBar');

    // Populate bio
    const bioContainer = document.getElementById('homeBioBox');
    if (bioContainer && cfg.profile && Array.isArray(cfg.profile.bio)) {
      bioContainer.innerHTML = cfg.profile.bio.map(line => `<span class="bio-line">${escapeHTML(line)}</span>`).join('');
    }

    // Quick Preview: First 4 bots
    const botsPreview = document.getElementById('homeBotsPreview');
    if (botsPreview && Array.isArray(cfg.bots)) {
      const previewBots = cfg.bots.slice(0, 4);
      botsPreview.innerHTML = previewBots.map(createBotCardHTML).join('');
    }

    // Quick Preview: All 3 communities
    const commPreview = document.getElementById('homeCommPreview');
    if (commPreview && Array.isArray(cfg.communities)) {
      commPreview.innerHTML = cfg.communities.map(createCommunityCardHTML).join('');
    }
  }

  // ==========================================================================
  // 6. PAGE: BOTS (bots.html)
  // ==========================================================================
  function renderBotsPage() {
    const grid = document.getElementById('botsMatrixGrid');
    const filterTabs = document.querySelectorAll('.filter-tab-btn');
    if (!grid) return;

    const allBots = Array.isArray(cfg.bots) ? cfg.bots : [];
    grid.innerHTML = allBots.map(createBotCardHTML).join('');

    // Filter logic: ALL / ACTIVE / DEACTIVE / SUDO / AI / UTILITY / GROUP / FONT
    filterTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        filterTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = (btn.dataset.filter || 'all').toUpperCase();
        const cards = grid.querySelectorAll('.bot-card-terminal');

        cards.forEach(card => {
          const cat = card.getAttribute('data-category') || '';
          const status = card.getAttribute('data-status') || '';

          if (filter === 'ALL') {
            card.style.display = 'flex';
          } else if (filter === 'ACTIVE') {
            card.style.display = status === 'ACTIVE' ? 'flex' : 'none';
          } else if (filter === 'DEACTIVE') {
            card.style.display = status === 'DEACTIVE' ? 'flex' : 'none';
          } else {
            // Category filters (SUDO, AI, UTILITY, GROUP, FONT)
            card.style.display = cat.includes(filter) ? 'flex' : 'none';
          }
        });
      });
    });
  }

  // ==========================================================================
  // 7. PAGE: COMMUNITIES (communities.html)
  // ==========================================================================
  function renderCommunitiesPage() {
    const grid = document.getElementById('communitiesFullGrid');
    if (!grid) return;

    const comms = Array.isArray(cfg.communities) ? cfg.communities : [];
    grid.innerHTML = comms.map(createCommunityCardHTML).join('');
  }

  // ==========================================================================
  // 8. PAGE: ABOUT (about.html)
  // ==========================================================================
  function renderAboutPage() {
    renderAvatar('aboutAvatarContainer');
    renderStatsBar('aboutStatsBar');

    const descEl = document.getElementById('aboutDescription');
    if (descEl && cfg.about) {
      descEl.textContent = cfg.about.description;
    }
  }

  // ==========================================================================
  // 9. PAGE: CONTACT & TERMINAL (contact.html)
  // ==========================================================================
  function renderContactPage() {
    const input = document.getElementById('terminalInput');
    const output = document.getElementById('terminalOutput');
    if (!input || !output) return;

    let commandHistory = [];
    let historyIndex = -1;

    // Print welcome banner
    printTerminalLine('system', 'GETO SYSTEM TERMINAL [Version 4.0.9]');
    printTerminalLine('system', 'Type "help" for a list of available system commands.\n');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        if (cmd) {
          commandHistory.push(cmd);
          historyIndex = commandHistory.length;
          handleCommand(cmd);
        } else {
          printTerminalLine('cmd', `${(cfg.system && cfg.system.terminal) || 'GETO@TELEGRAM:~$'} `);
        }
        input.value = '';
        scrollTerminalToBottom();
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          input.value = commandHistory[historyIndex] || '';
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          input.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = commandHistory.length;
          input.value = '';
        }
        e.preventDefault();
      }
    });

    function handleCommand(rawCmd) {
      const prompt = (cfg.system && cfg.system.terminal) || 'GETO@TELEGRAM:~$';
      printTerminalLine('cmd', `${prompt} ${rawCmd}`);

      const cmd = rawCmd.toLowerCase();

      switch (cmd) {
        case 'help':
          printTerminalLine('info', 'AVAILABLE TERMINAL COMMANDS:');
          printTerminalLine('info', '  help         - Display this manual command registry');
          printTerminalLine('info', '  bots         - Output entire GETO bot fleet with direct links');
          printTerminalLine('info', '  communities  - List active communities and Telegram spaces');
          printTerminalLine('info', '  sudo         - Inspect SUDO bots and primary SUDO space');
          printTerminalLine('info', '  tg           - Launch direct Telegram profile connection');
          printTerminalLine('info', '  insta        - Launch Instagram portal');
          printTerminalLine('info', '  stats        - Compute and print real-time fleet analytics');
          printTerminalLine('info', '  whoami       - Display identity, role, and operational bio');
          printTerminalLine('info', '  clear        - Flush terminal buffer');
          break;

        case 'bots':
          printTerminalLine('info', `=== ACTIVE BOT MATRIX (${cfg.bots.length} TOTAL) ===`);
          cfg.bots.forEach((b, idx) => {
            printTerminalLine('highlight', `[${idx + 1}] ${b.name} (${b.category}) -> ${b.username}`);
            printTerminalLine('dim', `    Link: ${b.telegram}`);
          });
          break;

        case 'communities':
          printTerminalLine('info', '=== CONNECTED COMMUNITIES ===');
          cfg.communities.forEach((c) => {
            printTerminalLine('highlight', `* ${c.name} [${c.type}]`);
            printTerminalLine('dim', `  ${c.url} — ${c.description}`);
          });
          break;

        case 'sudo':
          printTerminalLine('info', '=== SUDO INFRASTRUCTURE ===');
          printTerminalLine('highlight', 'Official SUDO Space: https://t.me/GETO_SUDO_USE');
          printTerminalLine('dim', '10 Autonomous SUDO Bots deployed under active telemetry.');
          break;

        case 'tg':
          printTerminalLine('success', `Connecting to Telegram: ${cfg.social.telegram}`);
          window.open(cfg.social.telegram, '_blank', 'noopener,noreferrer');
          break;

        case 'insta':
          printTerminalLine('success', `Opening Instagram Portal: ${cfg.social.instagram}`);
          window.open(cfg.social.instagram, '_blank', 'noopener,noreferrer');
          break;

        case 'stats': {
          const stats = getStats();
          printTerminalLine('info', '=== SYSTEM DIAGNOSTICS ===');
          printTerminalLine('info', `  TOTAL BOTS:    ${stats.total}`);
          printTerminalLine('info', `  ACTIVE BOTS:   ${stats.active}`);
          printTerminalLine('info', `  DEACTIVATED:   ${stats.deact}`);
          printTerminalLine('info', `  SYSTEM OS:     ${stats.system}`);
          printTerminalLine('info', `  STATUS:        ${stats.status}`);
          break;
        }

        case 'whoami':
          printTerminalLine('info', `OPERATOR: ${cfg.profile.name} (${cfg.profile.username})`);
          printTerminalLine('highlight', `ROLE:     ${cfg.about.role}`);
          if (Array.isArray(cfg.profile.bio)) {
            cfg.profile.bio.forEach(l => printTerminalLine('dim', `  ${l}`));
          }
          break;

        case 'clear':
          output.innerHTML = '';
          break;

        default:
          printTerminalLine('error', `Command not recognized: "${rawCmd}". Type "help" for syntax.`);
          break;
      }
    }

    function printTerminalLine(type, text) {
      const line = document.createElement('div');
      line.className = 'terminal-line';

      if (type === 'cmd') line.classList.add('cmd-echo');
      else if (type === 'success') line.classList.add('text-success');
      else if (type === 'highlight') line.classList.add('text-highlight');
      else if (type === 'dim') line.classList.add('text-dim');
      else if (type === 'error') line.style.color = '#ff006e';
      else line.classList.add('text-info');

      line.textContent = text;
      output.appendChild(line);
    }

    function scrollTerminalToBottom() {
      const terminalBody = document.querySelector('.terminal-body');
      if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

})();
