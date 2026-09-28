/**
 * ============================================================================
 * GETO // PERSONAL TELEGRAM CONTROL CENTER & CYBER DASHBOARD
 * Core Engine & Interactive Data Controller
 * ============================================================================
 */

// ==========================================
// 1. CONFIGURATION
// Easily customizable personal information
// ==========================================
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

// ==========================================
// 2. BOT DATA
// Dynamic array of all Telegram bots.
// Adding or updating items here automatically
// updates the dashboard, stats, search, & filters.
// ==========================================
const bots = [
  {
    name: "SUPRRME XD BOT 01",
    username: "@ll_SUPRRME_XD_1_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_1_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 02",
    username: "@ll_SUPRRME_XD_2_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_2_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 03",
    username: "@ll_SUPRRME_XD_3_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_3_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 04",
    username: "@ll_SUPRRME_XD_4_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_4_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 05",
    username: "@ll_SUPRRME_XD_5_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_5_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 06",
    username: "@ll_SUPRRME_XD_6_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_6_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 07",
    username: "@ll_SUPRRME_XD_7_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_7_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 08",
    username: "@ll_SUPRRME_XD_8_l_l_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_8_l_l_BOT"
  },
  {
    name: "SUPRRME XD BOT 09",
    username: "@ll_SUPRRME_XD_9_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_9_ll_BOT"
  },
  {
    name: "SUPRRME XD BOT 10",
    username: "@ll_SUPRRME_XD_10_ll_BOT",
    status: "active",
    description: "SUPRRME XD Telegram Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_10_ll_BOT"
  },
  {
    name: "FONT BOT",
    username: "@CHANGE_THE_FONT_BOT",
    status: "active",
    description: "Font changing Telegram Bot",
    telegram: "https://t.me/CHANGE_THE_FONT_BOT"
  },
  {
    name: "GROUP MANAGEMENT BOT",
    username: "@ll_SUPRRME_XD_ll_BOT",
    status: "active",
    description: "Telegram Group Management Bot",
    telegram: "https://t.me/ll_SUPRRME_XD_ll_BOT"
  }
];

// Current State
let currentFilter = 'all';
let searchQuery = '';
let isAudioPlaying = false;
let audioContext = null;
let synthOscillators = [];

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initUIFromConfig();
  updateDynamicStats();
  renderBots();
  setupEventListeners();
  setupParticlesCanvas();
  setupAudioController();
  setupProfileFallback();
});

// Populate static fields from CONFIG
function initUIFromConfig() {
  // Update telegram and instagram links across the page
  const telegramLinks = document.querySelectorAll('[data-bind="telegram-link"]');
  telegramLinks.forEach(el => {
    el.setAttribute('href', CONFIG.telegram);
  });

  const instagramLinks = document.querySelectorAll('[data-bind="instagram-link"]');
  instagramLinks.forEach(el => {
    el.setAttribute('href', CONFIG.instagram);
  });

  const communityLinks = document.querySelectorAll('[data-bind="community-link"]');
  communityLinks.forEach(el => {
    el.setAttribute('href', CONFIG.community);
  });

  const sudoGroupLinks = document.querySelectorAll('[data-bind="sudo-link"]');
  sudoGroupLinks.forEach(el => {
    el.setAttribute('href', CONFIG.sudoGroup);
  });

  const chattingGroupLinks = document.querySelectorAll('[data-bind="chatting-link"]');
  chattingGroupLinks.forEach(el => {
    el.setAttribute('href', CONFIG.chattingGroup);
  });
}

// ==========================================
// 4. DYNAMIC STATISTICS ENGINE
// Calculates active, deactivated, & total counts
// directly from the bots array
// ==========================================
function updateDynamicStats() {
  const activeCount = bots.filter(b => b.status.toLowerCase() === 'active').length;
  const deactivatedCount = bots.filter(b => b.status.toLowerCase() === 'deactivated').length;
  const totalCount = bots.length;

  const activeEl = document.getElementById('statActiveBots');
  const deactivatedEl = document.getElementById('statDeactivatedBots');
  const totalEl = document.getElementById('statTotalBots');

  if (activeEl) animateCounter(activeEl, activeCount);
  if (deactivatedEl) animateCounter(deactivatedEl, deactivatedCount);
  if (totalEl) animateCounter(totalEl, totalCount);

  // Update filter chip counts
  const filterCountAll = document.getElementById('filterCountAll');
  const filterCountActive = document.getElementById('filterCountActive');
  const filterCountDeactivated = document.getElementById('filterCountDeactivated');

  if (filterCountAll) filterCountAll.textContent = totalCount.toString();
  if (filterCountActive) filterCountActive.textContent = activeCount.toString();
  if (filterCountDeactivated) filterCountDeactivated.textContent = deactivatedCount.toString();
}

function animateCounter(element, targetValue) {
  const startValue = parseInt(element.textContent, 10) || 0;
  if (startValue === targetValue) {
    element.textContent = targetValue.toString();
    return;
  }
  const duration = 800;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out quad
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const currentVal = Math.round(startValue + (targetValue - startValue) * easeProgress);
    element.textContent = currentVal.toString();

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = targetValue.toString();
    }
  }
  requestAnimationFrame(step);
}

// ==========================================
// 5. BOT CARDS RENDERING & FILTERING
// ==========================================
function renderBots() {
  const container = document.getElementById('botsGrid');
  if (!container) return;

  const query = searchQuery.trim().toLowerCase();

  // Filter bots
  const filtered = bots.filter(bot => {
    // Status filter
    const matchesStatus =
      currentFilter === 'all' ||
      (currentFilter === 'active' && bot.status.toLowerCase() === 'active') ||
      (currentFilter === 'deactivated' && bot.status.toLowerCase() === 'deactivated');

    if (!matchesStatus) return false;

    // Search filter
    if (!query) return true;
    const nameMatch = bot.name.toLowerCase().includes(query);
    const userMatch = bot.username.toLowerCase().includes(query);
    const descMatch = bot.description.toLowerCase().includes(query);
    return nameMatch || userMatch || descMatch;
  });

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-bots-card">
        <div class="no-bots-icon">⚡</div>
        <div class="no-bots-text">No bot found.</div>
        <div class="no-bots-subtext">No bots match "${escapeHTML(query || currentFilter)}". Try adjusting your search query or filter.</div>
        <button id="resetSearchBtn" class="cyber-btn-glow cyber-btn-secondary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
          CLEAR SEARCH
        </button>
      </div>
    `;
    const resetBtn = document.getElementById('resetSearchBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        searchQuery = '';
        currentFilter = 'all';
        const searchInput = document.getElementById('botSearchInput');
        if (searchInput) searchInput.value = '';
        updateFilterButtons();
        renderBots();
      });
    }
    return;
  }

  // Render cards
  filtered.forEach(bot => {
    const isActive = bot.status.toLowerCase() === 'active';
    const card = document.createElement('a');
    card.className = 'bot-card';
    card.href = bot.telegram;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.setAttribute('aria-label', `${bot.name} on Telegram`);

    card.innerHTML = `
      <div class="bot-card-header">
        <div class="bot-icon-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" y1="16" x2="8" y2="16"></line>
            <line x1="16" y1="16" x2="16" y2="16"></line>
          </svg>
        </div>
        <div class="bot-status-tag ${isActive ? 'active' : 'deactivated'}">
          <span class="status-dot"></span>
          <span>${isActive ? 'ACTIVE' : 'DEACTIVATED'}</span>
        </div>
      </div>

      <div class="bot-card-body">
        <h3 class="bot-title">${escapeHTML(bot.name)}</h3>
        <span class="bot-username-link">${escapeHTML(bot.username)}</span>
        <p class="bot-description">${escapeHTML(bot.description)}</p>
      </div>

      <div class="bot-card-footer">
        <div class="bot-action-btn">
          <span>[ OPEN TELEGRAM ]</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ==========================================
// 6. EVENT LISTENERS & SEARCH/FILTER BINDING
// ==========================================
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('botSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.classList.toggle('visible', searchQuery.length > 0);
      }
      renderBots();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.remove('visible');
      renderBots();
      if (searchInput) searchInput.focus();
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.getAttribute('data-filter') || 'all';
      updateFilterButtons();
      renderBots();
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
      mobileMenuBtn.innerHTML = isOpen
        ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // Header scroll appearance
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }
  }, { passive: true });

  // Copy username on click
  const usernameBadge = document.getElementById('heroUsernameBadge');
  if (usernameBadge) {
    usernameBadge.addEventListener('click', () => {
      copyToClipboard(CONFIG.username);
      showToast(`Copied @${CONFIG.username} to clipboard!`);
    });
  }
}

function updateFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    const f = btn.getAttribute('data-filter');
    btn.classList.toggle('active', f === currentFilter);
  });
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    // ignore
  }
  document.body.removeChild(ta);
}

function showToast(message) {
  let toast = document.getElementById('cyberToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cyberToast';
    toast.className = 'cyber-toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5"><path d="M20 6L9 17L4 12"></path></svg>
      <span class="toast-msg"></span>
    `;
    document.body.appendChild(toast);
  }
  const msgEl = toast.querySelector('.toast-msg');
  if (msgEl) msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// ==========================================
// 7. BACKGROUND MUSIC CONTROLLER
// Graceful audio handling, local mp3 fallback,
// autoplay handler, and Web Audio synth backup
// ==========================================
function setupAudioController() {
  const audio = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('musicToggleBtn');
  const promptBanner = document.getElementById('musicPromptBanner');

  if (!audio) return;

  // Set default volume 25%
  audio.volume = 0.25;

  const updatePlayUI = (playing) => {
    isAudioPlaying = playing;
    if (toggleBtn) {
      toggleBtn.classList.toggle('playing', playing);
      const textSpan = toggleBtn.querySelector('.music-btn-text');
      if (textSpan) textSpan.textContent = playing ? 'AUDIO ON' : 'AUDIO OFF';
    }
    if (promptBanner && playing) {
      promptBanner.classList.add('hidden');
    }
  };

  const attemptPlay = () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updatePlayUI(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy
          updatePlayUI(false);
          if (promptBanner) {
            promptBanner.classList.remove('hidden');
          }
        });
    }
  };

  // Try autoplay on page load
  attemptPlay();

  // If user clicks the "♫ TAP TO ENABLE MUSIC" prompt
  if (promptBanner) {
    promptBanner.addEventListener('click', () => {
      attemptPlay();
      promptBanner.classList.add('hidden');
    });
  }

  // Header button toggle
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isAudioPlaying) {
        audio.pause();
        stopSynthDrone();
        updatePlayUI(false);
      } else {
        audio.play().then(() => {
          updatePlayUI(true);
        }).catch(() => {
          // If local audio file is silent or missing, run cyber ambient synth drone
          startSynthDrone();
          updatePlayUI(true);
        });
      }
    });
  }

  // First interaction auto-unlock for modern mobile browsers
  const unlockAudioOnInteraction = () => {
    if (!isAudioPlaying) {
      audio.play().then(() => {
        updatePlayUI(true);
      }).catch(() => {
        // silently handled
      });
    }
    window.removeEventListener('pointerdown', unlockAudioOnInteraction);
    window.removeEventListener('keydown', unlockAudioOnInteraction);
  };

  window.addEventListener('pointerdown', unlockAudioOnInteraction, { once: true });
  window.addEventListener('keydown', unlockAudioOnInteraction, { once: true });

  // Handle audio error gracefully (e.g. if background.mp3 is missing or format unreadable)
  audio.addEventListener('error', () => {
    // Graceful fallback: do not throw error or alert
    // When user toggles music, we can provide subtle synth drone
  });
}

// Ambient Cyber Synth Drone (Graceful Web Audio Fallback)
function startSynthDrone() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!audioContext) {
      audioContext = new AudioCtx();
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    stopSynthDrone();

    const now = audioContext.currentTime;
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.08, now);
    masterGain.connect(audioContext.destination);

    // Deep cyber root note (A1 55Hz & E2 82.4Hz)
    [55, 82.4, 110].forEach(freq => {
      const osc = audioContext.createOscillator();
      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      osc.connect(filter);
      filter.connect(masterGain);
      osc.start(now);
      synthOscillators.push(osc);
    });
  } catch (e) {
    // Audio context not allowed or unsupported
  }
}

function stopSynthDrone() {
  synthOscillators.forEach(osc => {
    try {
      osc.stop();
      osc.disconnect();
    } catch (e) {
      // ignore
    }
  });
  synthOscillators = [];
}

// ==========================================
// 8. PROFILE IMAGE FALLBACK HANDLER
// Gracefully replaces missing profile.png with
// a cyber holographic avatar
// ==========================================
function setupProfileFallback() {
  const profileImg = document.getElementById('profileImage');
  const fallbackContainer = document.getElementById('profileFallback');

  if (!profileImg || !fallbackContainer) return;

  const showFallback = () => {
    profileImg.style.display = 'none';
    fallbackContainer.style.display = 'flex';
  };

  profileImg.addEventListener('error', showFallback);

  // If already broken
  if (profileImg.complete && profileImg.naturalWidth === 0) {
    showFallback();
  }
}

// ==========================================
// 9. CYBER PARTICLES BACKGROUND CANVAS
// Lightweight floating cyber constellation
// ==========================================
function setupParticlesCanvas() {
  const canvas = document.getElementById('cyberParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? 'rgba(168, 85, 247, 0.65)' : 'rgba(0, 240, 255, 0.65)'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
