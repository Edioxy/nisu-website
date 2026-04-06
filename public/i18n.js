/**
 * Nisu site language + chrome (EN / SQ)
 */
(function () {
  var STORAGE_KEY = 'nisu-lang';

  var STRINGS = {
    en: {
      pageTitle: 'Nisu — Move through Kosovo',
      metaDescription:
        'Nisu connects riders and drivers in Kosovo and the region. Clear pricing, live tracking, human support.',
      skip: 'Skip to content',
      'nav.home': 'Home',
      'nav.faq': 'FAQ',
      'nav.privacy': 'Privacy',
      'nav.terms': 'Terms',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu',
      'nav.closeMenu': 'Close menu',
      'lang.label': 'Language',
      'hero.eyebrow': 'Kosovo & region',
      'hero.title': 'Move with intention.',
      'hero.lead':
        'Nisu pairs riders and drivers in a focused, modern experience — request when you need a ride, accept trips when you\'re behind the wheel. Built for real streets, upfront expectations, and support from humans when something needs fixing.',
      'card.rider.label': 'For passengers',
      'card.rider.title': 'Rider',
      'card.rider.body':
        'Set pickup and destination, watch your driver approach in real time, and pay the way that works for you. Fewer taps, clearer flow — from open app to on your way.',
      'card.rider.li1': 'Live trip tracking and driver ETA',
      'card.rider.li2': 'Saved places and fast re-booking',
      'card.rider.li3': 'Receipts and ride history in one place',
      'card.driver.label': 'For drivers',
      'card.driver.title': 'Driver',
      'card.driver.body':
        'Separate app, same standard of clarity. See requests, navigate pickups, and keep your earnings organized — without the noise.',
      'card.driver.li1': 'Request feed built for quick decisions',
      'card.driver.li2': 'Navigation-friendly trip flow',
      'card.driver.li3': 'Independent partners — you choose when you drive',
      'btn.play': 'Google Play',
      'btn.store': 'App Store',
      'app.storeSoon': 'App Store (coming soon)',
      'app.storeSoonNote': 'Coming soon on the App Store.',
      'section.principles.label': 'Principles',
      'section.principles.title': 'How we think',
      'section.principles.lead': 'Product choices that stay obvious in the hand — not buried in settings.',
      'principle.direct.title': 'Direct',
      'principle.direct.body': 'Fewer steps from launch to on your way. Maps and actions first; clutter last.',
      'principle.fair.title': 'Fair',
      'principle.fair.body': 'Pricing and expectations you can parse before you confirm — no surprises by design.',
      'principle.present.title': 'Present',
      'principle.present.body': 'When something breaks, you reach a team — not an endless bot loop.',
      'section.steps.label': 'Riders',
      'section.steps.title': 'How a ride works',
      'section.steps.lead': 'Three beats — the same ones you\'ll feel in the app.',
      'step1.title': 'Pick where you\'re going',
      'step1.body':
        'Search an address, choose a saved place, or drop a pin. Pickup and destination stay visible before you commit.',
      'step2.title': 'Confirm and match',
      'step2.body': 'Choose your ride option and payment method. We connect you with an available driver nearby.',
      'step3.title': 'Track and finish',
      'step3.body': 'Watch the map as your driver arrives, ride with live updates, then wrap up with an in-app receipt.',
      'section.qa.label': 'Help',
      'section.qa.title': 'Quick answers',
      'section.qa.leadBefore': 'More topics in our',
      'section.qa.leadLink': 'full FAQ',
      'section.qa.leadAfter': '— or email us anytime.',
      'homeFaq.q1': 'How do I pay for rides?',
      'homeFaq.a1':
        'Add a payment method when you confirm a trip. Nisu supports card payments; charges are processed when your ride ends.',
      'homeFaq.q2': 'Is my location shared?',
      'homeFaq.a2.part1': 'Location is used to match you with drivers, show progress during a trip, and power navigation. We don\'t sell your location. Details are in our',
      'homeFaq.a2.link': 'Privacy Policy',
      'homeFaq.a2.part2': '',
      'homeFaq.q3': 'How do I get help?',
      'homeFaq.a3.part1': 'Email',
      'homeFaq.a3.mid': 'for account, ride, or payment questions — we read every message.',
      'contact.support': 'Support',
      'footer.faq': 'FAQ',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.contact': 'Contact',
      'footer.meta': 'nisu.info · Kosovo & the wider region',

      'faq.pageTitle': 'FAQ — Nisu',
      'faq.metaDescription':
        'Frequently asked questions about booking rides, driver signup, payments, and privacy on Nisu.',
      'faq.back': '← Back to home',
      'faq.h1': 'Help & frequently asked questions',
      'faq.updated': 'Last updated: February 2025',
      'faq.q1': 'How do I book a ride?',
      'faq.a1':
        'Enter your pickup and destination in the search fields, or pin locations on the map. Select your ride type and confirm. Available drivers will be shown; once a driver accepts, you can track their arrival and your ride in real time.',
      'faq.q2': 'How do I pay for rides?',
      'faq.a2': 'Add a payment method in the ride confirmation flow. Nisu supports card payments. Payment is processed at the end of your ride.',
      'faq.q3': 'Can I cancel a ride?',
      'faq.a3':
        'Yes. You can cancel before the driver arrives. Cancellation fees may apply depending on timing. Check the ride screen for cancellation options.',
      'faq.q4': 'How do I become a driver?',
      'faq.a4':
        'Download the Nisu Driver app and complete registration. You will need to provide required documents and pass verification. Approval is subject to Nisu\'s driver requirements.',
      'faq.q5': 'Is my location shared?',
      'faq.a5.part1':
        'Your location is used to match you with nearby drivers, show your position during a ride, and for navigation. We do not share your location with third parties except as necessary to provide the service (for example, with your driver during an active ride). See our',
      'faq.a5.link': 'Privacy Policy',
      'faq.a5.part2': ' for details.',
      'faq.q6': 'Where is Nisu available?',
      'faq.a6':
        'Nisu is built for Kosovo and may be available in nearby regions as we expand. The app will show whether service is offered in your area when you open it.',
      'faq.q7': 'What if something goes wrong during a trip?',
      'faq.a7.before':
        'Your safety matters. Use in-app tools where available, and contact',
      'faq.a7.after':
        'with ride details. For emergencies, contact local emergency services first.',
      'faq.q8': 'Does Nisu employ drivers or own cars?',
      'faq.a8.part1': 'No. Nisu is a technology platform that connects riders and drivers. Drivers are independent users of the service, not employees of Nisu. See our',
      'faq.a8.link': 'Terms of Service',
      'faq.a8.part2': 'for the legal overview.',
      'faq.q9': 'How do I contact support?',
      'faq.a9.before': 'Email us at',
      'faq.a9.after': 'for help with your account, rides, payments, or any other questions.',

      'privacy.pageTitle': 'Privacy Policy — Nisu',
      'privacy.metaDescription':
        'How Nisu collects, uses, and protects your information when you use our rider and driver apps.',
      'privacy.back': '← Back to home',
      'terms.pageTitle': 'Terms of Service — Nisu',
      'terms.metaDescription':
        'Terms governing use of the Nisu rider and driver apps. Nisu is a technology platform connecting riders and drivers.',
      'terms.back': '← Back to home',
    },
    sq: {
      pageTitle: 'Nisu — Lëviz në Kosovë dhe rajon',
      metaDescription:
        'Nisu lidh udhëtarët dhe vozitësit në Kosovë dhe rajon. Çmime të qarta, ndjekje në kohë reale, mbështetje njerëzore.',
      skip: 'Kapërce te përmbajtja',
      'nav.home': 'Ballina',
      'nav.faq': 'FAQ',
      'nav.privacy': 'Privatësia',
      'nav.terms': 'Kushtet',
      'nav.contact': 'Kontakt',
      'nav.menu': 'Menuja',
      'nav.closeMenu': 'Mbyll menunë',
      'lang.label': 'Gjuha',
      'hero.eyebrow': 'Kosova & rajoni',
      'hero.title': 'Lëviz me qëllim.',
      'hero.lead':
        'Nisu bashkon udhëtarët dhe vozitësit në një përvojë të fokusuar dhe moderne — kërko kur të duhet një udhëtim, prano kur je pas timonit. E ndërtuar për rrugë reale, pritshmëri të qarta dhe mbështetje njerëzore kur diçka duhet rregulluar.',
      'card.rider.label': 'Për udhëtarë',
      'card.rider.title': 'Udhëtari',
      'card.rider.body':
        'Vendos nisjen dhe destinacionin, ndiq vozitësin në kohë reale dhe paguaj si të të përshtatet. Më pak prekje, rrjedhë më e qartë — nga hapja e aplikacionit deri në nisje.',
      'card.rider.li1': 'Ndjekje e udhëtimit dhe koha e mbërritjes së vozitësit',
      'card.rider.li2': 'Vende të ruajtura dhe rirezervim i shpejtë',
      'card.rider.li3': 'Faturat dhe historia e udhëtimeve në një vend',
      'card.driver.label': 'Për vozitës',
      'card.driver.title': 'Vozitësi',
      'card.driver.body':
        'Aplikacion i veçantë, i njëjti standard qartësie. Shiko kërkesat, navigo te marrjet dhe mbaji të ardhurat në rend — pa zhurmë.',
      'card.driver.li1': 'Liste kërkesash për vendime të shpejta',
      'card.driver.li2': 'Rrjedhë udhëtimi e përshtatshme për navigim',
      'card.driver.li3': 'Partnerë të pavarur — ti zgjedh kur vozit',
      'btn.play': 'Google Play',
      'btn.store': 'App Store',
      'app.storeSoon': 'App Store (së shpejti)',
      'app.storeSoonNote': 'Së shpejti në App Store.',
      'section.principles.label': 'Parime',
      'section.principles.title': 'Si mendojmë',
      'section.principles.lead': 'Zgjedhje produkti që mbeten të qarta në dorë — jo të fshehura në cilësime.',
      'principle.direct.title': 'Direkt',
      'principle.direct.body': 'Më pak hapa nga hapja deri te nisja. Hartat dhe veprimet së pari; zhurma e familjes së fundit.',
      'principle.fair.title': 'I drejtë',
      'principle.fair.body': 'Çmime dhe pritshmëri që i lexon para konfirmimit — pa surpriza me qëllim.',
      'principle.present.title': 'I pranishëm',
      'principle.present.body': 'Kur diçka prishet, flet me një ekip — jo me një rob pa fund.',
      'section.steps.label': 'Udhëtarët',
      'section.steps.title': 'Si funksionon një udhëtim',
      'section.steps.lead': 'Tre hapa — të njëjtët që i ndjen në aplikacion.',
      'step1.title': 'Zgjidh ku po shkon',
      'step1.body':
        'Kërko një adresë, zgjidh një vend të ruajtur ose vendos një pin. Nisja dhe destinacioni duken qartë përpara se të konfirmosh.',
      'step2.title': 'Konfirmo dhe përputh',
      'step2.body': 'Zgjidh opsionin e udhëtimit dhe metodën e pagesës. Të lidhim me një vozitës të disponueshëm afër.',
      'step3.title': 'Ndiq dhe përfundo',
      'step3.body':
        'Shiko hartën ndërsa vozitësi vjen, udhëto me përditësime të drejtpërdrejta, pastaj mbyll me faturë në aplikacion.',
      'section.qa.label': 'Ndihmë',
      'section.qa.title': 'Përgjigje të shpejta',
      'section.qa.leadBefore': 'Më shumë tema në',
      'section.qa.leadLink': 'FAQ të plota',
      'section.qa.leadAfter': '— ose na shkruaj me email kur të duash.',
      'homeFaq.q1': 'Si paguaj udhëtimet?',
      'homeFaq.a1':
        'Shto një metodë pagese kur konfirmon udhëtimin. Nisu mbështet pagesa me kartë; tarifohet kur udhëtimi përfundon.',
      'homeFaq.q2': 'A ndahet vendndodhja ime?',
      'homeFaq.a2.part1':
        'Vendndodhja përdoret për të të përputhur me vozitës, për progres gjatë udhëtimit dhe navigim. Ne nuk shesim vendndodhjen tënde. Detajet janë te',
      'homeFaq.a2.link': 'Politika e privatësisë',
      'homeFaq.a2.part2': '.',
      'homeFaq.q3': 'Si marr ndihmë?',
      'homeFaq.a3.part1': 'Dërgo email te',
      'homeFaq.a3.mid': 'për llogari, udhëtime ose pagesa — i lexojmë të gjitha mesazhet.',
      'contact.support': 'Mbështetje',
      'footer.faq': 'FAQ',
      'footer.privacy': 'Politika e privatësisë',
      'footer.terms': 'Kushtet e shërbimit',
      'footer.contact': 'Kontakt',
      'footer.meta': 'nisu.info · Kosova & rajoni më i gjerë',

      'faq.pageTitle': 'FAQ — Nisu',
      'faq.metaDescription':
        'Pyetje të shpeshta për rezervimin e udhëtimeve, regjistrimin e vozitësit, pagesat dhe privatësinë në Nisu.',
      'faq.back': '← Kthehu në ballinë',
      'faq.h1': 'Ndihmë & pyetje të shpeshta',
      'faq.updated': 'Përditësuar: shkurt 2025',
      'faq.q1': 'Si rezervoj një udhëtim?',
      'faq.a1':
        'Shkruaj nisjen dhe destinacionin, ose vendos pin në hartë. Zgjidh llojin e udhëtimit dhe konfirmo. Shfaqen vozitës të disponueshëm; pasi një vozitës pranon, mund ta ndjekësh ardhjen dhe udhëtimin në kohë reale.',
      'faq.q2': 'Si paguaj për udhëtime?',
      'faq.a2':
        'Shto metodën e pagesës në ekranin e konfirmimit. Nisu mbështet kartën. Pagesa përpunohet në fund të udhëtimit.',
      'faq.q3': 'A mund ta anuloj udhëtimin?',
      'faq.a3':
        'Po. Mund të anulosh para se të mbërrijë vozitësi. Mund të zbatohen tarifa anulimi sipas kohës. Shiko ekranin e udhëtimit për opsionet.',
      'faq.q4': 'Si bëhem vozitës?',
      'faq.a4':
        'Shkarko aplikacionin Nisu Driver dhe plotëso regjistrimin. Nevojiten dokumentet e kërkuara dhe verifikimi. Aprovimi varet nga kushtet e Nisu.',
      'faq.q5': 'A ndahet vendndodhja ime?',
      'faq.a5.part1':
        'Vendndodhja përdoret për të të lidhur me vozitës afër, për pozicionin gjatë udhëtimit dhe navigim. Nuk e ndajmë me palë të treta përveç sa është e nevojshme për shërbimin (p.sh. me vozitësin gjatë udhëtimit). Shih',
      'faq.a5.link': 'Politikën e privatësisë',
      'faq.a5.part2': ' për detaje.',
      'faq.q6': 'Ku është i disponueshëm Nisu?',
      'faq.a6':
        'Nisu është ndërtuar për Kosovën dhe mund të jetë i disponueshëm në rajone fqinje me zgjerim. Aplikacioni tregon nëse ka shërbim në zonën tënde.',
      'faq.q7': 'Çfarë nëse diçka shkon keq gjatë udhëtimit?',
      'faq.a7.before': 'Siguria jote ka rëndësi. Përdor mjetet në aplikacion kur ka, dhe kontakto',
      'faq.a7.after':
        'me detajet e udhëtimit. Për emergjenca, së pari shërbimet lokale të emergjencës.',
      'faq.q8': 'A punëson Nisu vozitës ose ka makina?',
      'faq.a8.part1':
        'Jo. Nisu është platformë teknologjie që lidh udhëtarët dhe vozitësit. Vozitësit janë përdorues të pavarur, jo punonjës të Nisu. Shih',
      'faq.a8.link': 'Kushtet e shërbimit',
      'faq.a8.part2': '.',
      'faq.q9': 'Si kontaktoj mbështetjen?',
      'faq.a9.before': 'Na shkruaj te',
      'faq.a9.after': 'për llogari, udhëtime, pagesa ose çdo pyetje tjetër.',

      'privacy.pageTitle': 'Politika e privatësisë — Nisu',
      'privacy.metaDescription':
        'Si Nisu mbledh, përdor dhe mbron informacionin tuaj kur përdorni aplikacionet për udhëtarë dhe vozitës.',
      'privacy.back': '← Kthehu në ballinë',
      'terms.pageTitle': 'Kushtet e shërbimit — Nisu',
      'terms.metaDescription':
        'Kushtet e përdorimit të aplikacioneve Nisu për udhëtarë dhe vozitës. Nisu është platformë teknologjie që lidh palët.',
      'terms.back': '← Kthehu në ballinë',
    },
  };

  function getLang() {
    var l = localStorage.getItem(STORAGE_KEY);
    if (l === 'sq' || l === 'en') return l;
    return 'en';
  }

  function setLang(code) {
    if (code !== 'sq' && code !== 'en') code = 'en';
    localStorage.setItem(STORAGE_KEY, code);
    applyLanguage();
  }

  function t(key) {
    var lang = getLang();
    var pack = STRINGS[lang] || STRINGS.en;
    if (pack[key] != null) return pack[key];
    return STRINGS.en[key] != null ? STRINGS.en[key] : key;
  }

  function applyLanguage() {
    var lang = getLang();
    var pack = STRINGS[lang] || STRINGS.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (pack[k] != null) el.textContent = pack[k];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (pack[k] != null) el.setAttribute('aria-label', pack[k]);
    });

    var pageTitleKey = document.body.getAttribute('data-page-title');
    if (pageTitleKey && pack[pageTitleKey]) {
      document.title = pack[pageTitleKey];
    }

    document.querySelectorAll('.legal-lang').forEach(function (el) {
      var show = el.getAttribute('data-lang') === lang;
      el.hidden = !show;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var is = btn.getAttribute('data-set-lang') === lang;
      btn.setAttribute('aria-pressed', is ? 'true' : 'false');
      btn.classList.toggle('lang-btn--active', is);
    });

    syncIosNotes();
    refreshAppStoreAria();
    var desc = document.querySelector('meta[name="description"]');
    if (desc) {
      var descKey = document.body.getAttribute('data-description-key') || 'metaDescription';
      if (pack[descKey]) desc.setAttribute('content', pack[descKey]);
    }
  }

  function syncIosNotes() {
    document.querySelectorAll('.app-card').forEach(function (card) {
      var btn = card.querySelector('a.btn--ghost[aria-disabled="true"]');
      var note = card.querySelector('.btn-note');
      if (btn && note) note.textContent = t('app.storeSoonNote');
    });
  }

  function wireAppStoreButtons(riderUrl, driverUrl) {
    function wire(btnId, noteId, url) {
      var btn = document.getElementById(btnId);
      var note = document.getElementById(noteId);
      if (!btn || btn.getAttribute('data-store-wired') === '1') return;
      btn.setAttribute('data-store-wired', '1');
      if (url && url.indexOf('http') === 0) {
        btn.href = url;
        btn.rel = 'noopener noreferrer';
        btn.target = '_blank';
        btn.removeAttribute('aria-disabled');
        if (note) note.textContent = '';
      } else {
        btn.setAttribute('aria-disabled', 'true');
        btn.href = '#';
        btn.addEventListener('click', function (e) {
          e.preventDefault();
        });
        if (note) note.textContent = t('app.storeSoonNote');
      }
    }
    wire('ios-rider', 'note-rider', riderUrl || '');
    wire('ios-driver', 'note-driver', driverUrl || '');
    var lr = t('app.storeSoon');
    var ir = document.getElementById('ios-rider');
    var idd = document.getElementById('ios-driver');
    if (ir && ir.getAttribute('aria-disabled') === 'true') ir.setAttribute('aria-label', lr);
    if (idd && idd.getAttribute('aria-disabled') === 'true') idd.setAttribute('aria-label', lr);
  }

  function refreshAppStoreAria() {
    var lr = t('app.storeSoon');
    var ir = document.getElementById('ios-rider');
    var idd = document.getElementById('ios-driver');
    if (ir && ir.getAttribute('aria-disabled') === 'true') ir.setAttribute('aria-label', lr);
    if (idd && idd.getAttribute('aria-disabled') === 'true') idd.setAttribute('aria-label', lr);
  }

  function bindLangButtons() {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  function bindDrawer() {
    var toggle = document.querySelector('.menu-toggle');
    var drawer = document.getElementById('site-drawer');
    if (!toggle || !drawer) return;

    var backdrop = drawer.querySelector('.site-drawer__backdrop');
    var panel = drawer.querySelector('.site-drawer__panel');

    function open() {
      drawer.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
      if (panel) panel.focus();
    }

    function close() {
      drawer.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
      toggle.focus();
    }

    toggle.addEventListener('click', function () {
      if (drawer.hidden) open();
      else close();
    });
    if (backdrop) backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !drawer.hidden) close();
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        close();
      });
    });
  }

  function bootstrap() {
    applyLanguage();
    bindLangButtons();
    bindDrawer();
  }

  window.NisuI18n = {
    getLang: getLang,
    setLang: setLang,
    applyLanguage: applyLanguage,
    wireAppStoreButtons: wireAppStoreButtons,
    bootstrap: bootstrap,
    t: t,
    refreshAppStoreAria: refreshAppStoreAria,
  };
})();
