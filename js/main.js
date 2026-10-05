/**
 * MAIN JAVASCRIPT CONTROLLER — AHMED HAMDY PORTFOLIO
 * High Performance, Native ES6+, Accessible, Fast
 */

// ------------------------------------------------------------------------
// 1. GLOBAL STATE & THEME / LANGUAGE CONTROLLERS
// ------------------------------------------------------------------------
window.currentTheme = localStorage.getItem('ah_theme') || 'dark';
window.currentLang = localStorage.getItem('ah_lang') || 'ar';
window.currentFilter = 'all';

// Apply Theme Globally
window.applyTheme = function(theme, save = true) {
  window.currentTheme = theme;
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  if (save) localStorage.setItem('ah_theme', theme);

  // Update Theme toggle icons
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  themeIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun theme-toggle-icon';
      icon.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      icon.className = 'fa-solid fa-moon theme-toggle-icon';
      icon.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  });

  // Update Monogram image if needed
  const brandMonogram = document.getElementById('brandMonogram');
  if (brandMonogram) {
    brandMonogram.src = theme === 'dark' ? 'assets/monogram.svg' : 'assets/monogram-light.svg';
  }
};

window.toggleTheme = function() {
  const nextTheme = window.currentTheme === 'dark' ? 'light' : 'dark';
  window.applyTheme(nextTheme);
};

// Apply Language Globally
window.applyLanguage = function(lang, save = true) {
  window.currentLang = lang;
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  if (save) localStorage.setItem('ah_lang', lang);

  // Update language button text
  const langLabels = document.querySelectorAll('.lang-toggle-text');
  langLabels.forEach(el => {
    el.textContent = lang === 'ar' ? 'EN' : 'عربي';
  });

  // Apply translations across all data-i18n elements
  if (typeof i18nDictionary !== 'undefined') {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nDictionary[key] && i18nDictionary[key][lang]) {
        el.textContent = i18nDictionary[key][lang];
      }
    });

    // Apply translations to placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18nDictionary[key] && i18nDictionary[key][lang]) {
        el.setAttribute('placeholder', i18nDictionary[key][lang]);
      }
    });
  }

  // Restart typewriter with new language roles
  if (typeof initTypewriter === 'function') {
    initTypewriter();
  }

  // Re-render project cards with current language strings
  if (typeof renderProjectCards === 'function') {
    renderProjectCards();
  }
};

window.toggleLanguage = function() {
  const nextLang = window.currentLang === 'ar' ? 'en' : 'ar';
  window.applyLanguage(nextLang);
};

// Apply initial attributes right away
window.applyTheme(window.currentTheme, false);
window.applyLanguage(window.currentLang, false);

// ------------------------------------------------------------------------
// 2. DYNAMIC TYPEWRITER EFFECT
// ------------------------------------------------------------------------
let typewriterTimer = null;
let typeRoleIndex = 0;
let typeCharIndex = 0;
let isDeleting = false;

function initTypewriter() {
  clearTimeout(typewriterTimer);
  const typewriterEl = document.getElementById('typewriterText');
  if (!typewriterEl) return;

  typewriterEl.textContent = '';
  typeRoleIndex = 0;
  typeCharIndex = 0;
  isDeleting = false;

  tickTypewriter();
}

function tickTypewriter() {
  const typewriterEl = document.getElementById('typewriterText');
  if (!typewriterEl || typeof i18nDictionary === 'undefined') return;

  const roles = [
    i18nDictionary.heroRole1[window.currentLang] || '',
    i18nDictionary.heroRole2[window.currentLang] || '',
    i18nDictionary.heroRole3[window.currentLang] || ''
  ];

  const currentRole = roles[typeRoleIndex % roles.length];
  if (!currentRole) return;

  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, typeCharIndex - 1);
    typeCharIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, typeCharIndex + 1);
    typeCharIndex++;
  }

  let speed = isDeleting ? 35 : 85;

  if (!isDeleting && typeCharIndex === currentRole.length) {
    speed = 2200; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && typeCharIndex === 0) {
    isDeleting = false;
    typeRoleIndex++;
    speed = 400; // Pause before typing next
  }

  typewriterTimer = setTimeout(tickTypewriter, speed);
}

// ------------------------------------------------------------------------
// 3. PORTFOLIO CARDS RENDERING & FILTERING
// ------------------------------------------------------------------------
function renderProjectCards() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof portfolioProjects === 'undefined') return;

  const filtered = window.currentFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.categories.includes(window.currentFilter));

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: var(--space-12); color: var(--text-muted);">
        <p>${window.currentLang === 'ar' ? 'لا توجد مشاريع مطابقة لهذا التصنيف حالياً.' : 'No projects found in this category.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((proj, idx) => {
    const isFeatured = proj.featured && idx === 0;
    const cardClass = isFeatured ? 'project-card featured-card reveal-on-scroll' : 'project-card standard-card reveal-on-scroll';
    
    return `
      <article class="${cardClass}" data-project-id="${proj.id}">
        <div class="project-media-wrap">
          <span class="project-category-badge">${proj.categoryBadge[window.currentLang]}</span>
          <img class="project-media-img" 
               src="${proj.image}" 
               alt="${proj.title[window.currentLang]}" 
               loading="lazy" 
               decoding="async"
               onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80'; this.onerror=null;">
        </div>
        <div class="project-info-wrap">
          <div>
            <h3 class="project-title">${proj.title[window.currentLang]}</h3>
            <p class="project-desc">${proj.shortDesc[window.currentLang]}</p>
            <div class="project-tech-tags">
              ${proj.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="project-actions">
            <button class="btn btn-outline btn-sm open-case-study-btn" data-project-id="${proj.id}">
              <i class="fa-solid fa-file-lines margin-r"></i>
              <span>${i18nDictionary.btnCaseStudy[window.currentLang]}</span>
            </button>
            ${proj.demoUrl && proj.demoUrl !== '#' ? `
              <a class="btn btn-primary btn-sm" href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square margin-r rtl-flip"></i>
                <span>${i18nDictionary.btnLiveDemo[window.currentLang]}</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Re-attach observer to new elements
  observeRevealElements();
}

// ------------------------------------------------------------------------
// 4. SCROLL REVEAL OBSERVER (IntersectionObserver)
// ------------------------------------------------------------------------
let revealObserver;

function observeRevealElements() {
  if (revealObserver) revealObserver.disconnect();

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
    revealObserver.observe(el);
  });
}

// ------------------------------------------------------------------------
// 5. MAIN INITIALIZATION
// ------------------------------------------------------------------------
function initApp() {
  // Apply initial theme and language states
  window.applyTheme(window.currentTheme, false);
  window.applyLanguage(window.currentLang, false);

  // Global Delegated Event Listeners for Theme & Language Buttons
  document.addEventListener('click', (e) => {
    const themeBtn = e.target.closest('#themeToggle, #mobileThemeToggle');
    if (themeBtn) {
      e.preventDefault();
      window.toggleTheme();
      return;
    }

    const langBtn = e.target.closest('#langToggle, #mobileLangToggle');
    if (langBtn) {
      e.preventDefault();
      window.toggleLanguage();
      return;
    }
  });

  // Sticky Header & Scroll Handling
  const siteHeader = document.getElementById('siteHeader');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 40;
        siteHeader?.classList.toggle('scrolled', scrolled);
        scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Nav link smooth scroll and active state
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  // Mobile Menu Drawer
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  mobileToggleBtn?.addEventListener('click', () => {
    const isOpen = mobileToggleBtn.classList.toggle('open');
    mobileNavDrawer?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav-item, .mobile-drawer-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggleBtn?.classList.remove('open');
      mobileNavDrawer?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Filter Button Clicks
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      window.currentFilter = target.getAttribute('data-filter') || 'all';

      const grid = document.getElementById('projectsGrid');
      if (grid) {
        grid.style.opacity = '0.3';
        grid.style.transform = 'translateY(10px)';
        grid.style.transition = 'all 200ms ease';
        setTimeout(() => {
          renderProjectCards();
          grid.style.opacity = '1';
          grid.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  });

  // Case Study Modal
  const caseStudyModal = document.getElementById('caseStudyModal');
  const closeCaseStudyBtn = document.getElementById('closeCaseStudyBtn');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-case-study-btn');
    if (trigger && typeof portfolioProjects !== 'undefined') {
      const projId = trigger.getAttribute('data-project-id');
      const proj = portfolioProjects.find(p => p.id === projId);
      if (proj) openCaseStudyModal(proj);
    }
  });

  function openCaseStudyModal(proj) {
    if (!caseStudyModal || !proj) return;

    document.getElementById('modalCoverImg').src = proj.image;
    document.getElementById('modalCategoryBadge').textContent = proj.categoryBadge[window.currentLang];
    document.getElementById('modalProjectTitle').textContent = proj.title[window.currentLang];
    document.getElementById('modalProjectLead').textContent = proj.shortDesc[window.currentLang];

    document.getElementById('modalProblemText').textContent = proj.caseStudy.problem[window.currentLang];
    document.getElementById('modalGoalsText').textContent = proj.caseStudy.goals[window.currentLang];
    document.getElementById('modalApproachText').textContent = proj.caseStudy.approach[window.currentLang];
    document.getElementById('modalResultText').textContent = proj.caseStudy.result[window.currentLang];

    document.getElementById('modalLighthouseScore').textContent = proj.metrics.lighthouse;
    const loadTimeEl = document.getElementById('modalLoadTimeVal');
    if (loadTimeEl) loadTimeEl.textContent = proj.metrics.loadTime || '—';

    const modalVisitLink = document.getElementById('modalVisitLink');
    if (modalVisitLink) {
      if (proj.demoUrl && proj.demoUrl !== '#') {
        modalVisitLink.href = proj.demoUrl;
        modalVisitLink.style.display = 'inline-flex';
      } else {
        modalVisitLink.style.display = 'none';
      }
    }

    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }

  closeCaseStudyBtn?.addEventListener('click', closeModals);
  caseStudyModal?.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) closeModals();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });

  // Service Card Pre-fill
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('http')) return;

      const serviceType = card.getAttribute('data-service-type');
      const contactSelect = document.getElementById('projectTypeSelect');
      if (contactSelect && serviceType) {
        contactSelect.value = serviceType;
      }
      
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const formPanel = document.querySelector('.contact-form-panel');
        if (formPanel) {
          formPanel.style.borderColor = 'var(--accent)';
          setTimeout(() => formPanel.style.borderColor = '', 1500);
        }
      }
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');
  const phoneInput = document.getElementById('phoneInput');

  phoneInput?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d+]/g, '');
  });

  function showToast(type, message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput')?.value.trim();
    const email = document.getElementById('emailInput')?.value.trim();
    const phone = phoneInput?.value.trim() || '';
    const projectType = document.getElementById('projectTypeSelect')?.value || '';
    const budget = document.getElementById('budgetSelect')?.value || '';
    const message = document.getElementById('messageInput')?.value.trim();
    const submitBtn = document.getElementById('submitFormBtn');

    const egyptPhoneRegex = /^01[0125]\d{8}$/;
    const intlPhoneRegex = /^\+?[0-9]{8,15}$/;

    if (!egyptPhoneRegex.test(phone) && !intlPhoneRegex.test(phone)) {
      showToast('error', i18nDictionary.formPhoneInvalidMsg[window.currentLang]);
      phoneInput?.focus();
      return;
    }

    const origBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${i18nDictionary.formSending[window.currentLang]}</span>`;

    try {
      if (window.emailjs && window.emailjsConfig && window.emailjsConfig.publicKey !== 'YOUR_KEY') {
        await window.emailjs.send(
          window.emailjsConfig.serviceId,
          window.emailjsConfig.templateId,
          { name, email, phone, projectType, budget, message }
        );
      } else {
        await new Promise(r => setTimeout(r, 900));
      }

      showToast('success', i18nDictionary.formSuccessMsg[window.currentLang]);
      contactForm.reset();
    } catch (err) {
      console.error('Submission error:', err);
      showToast('error', i18nDictionary.formErrorMsg[window.currentLang]);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnHTML;
    }
  });

  // Initial reveal observer trigger
  observeRevealElements();
}

// Auto-run when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
