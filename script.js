// Animation du texte dynamique dans la section héro
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Working Capital',
            'Recovery Process',
            'Inventory Management',
            'Day Payables Outstanding'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: false,
        cursorChar: ''
    });
});

// Système de traduction
const translations = {
    en: {
        // Navigation
        context: 'Context',
        whyWka: 'Why WKA',
        services: 'Services',
        roi: 'ROI',
        contact: 'Contact',
        
        // Hero
        unlockYour: 'Unlock Your',
        typedStrings: [
            'Working Capital',
            'Recovery Process',
            'Inventory Management',
            'Day Payables Outstanding'
        ],
        subtitle: 'Advisory | Automation | Execution',
        contactUs: 'Contact Us',

        // Context Section
        contextTitle: 'Context',
        companiesLate: 'companies pay invoices late',
        daysDelay: 'days average delay',
        cashFlow: 'Cash flow is the #1 cause of corporate failures',
        dataSource: 'FR Data | source : Banque de France, Insee, Altares',

        // Why WKA Section
        whyWkaTitle: 'Why WKA?',
        expertise: 'Real-world treasury expertise',
        automation: 'Built-in automation with best in class solutions',
        independent: 'Independent: tool-agnostic, ROI-driven',
        execution: 'Fast, senior-led execution',

        // Services Section
        servicesTitle: 'What We Do',
        
        // Strategy
        strategyTitle: 'Strategy & Diagnosis',
        strategy1: 'Working Capital Cycle Analysis',
        strategy2: 'In-depth DSO, DPO, DIO process understanding',
        strategy3: 'Review of current Working Capital optimization',
        strategy4: 'Financing solution selection',
        strategy5: 'RFP Design & Negotiation',
        strategy6: 'International approach',

        // Automation
        automationTitle: 'Automation & Integration',
        automation1: 'Partnerships with advanced market solutions',
        automation2: 'Process Automation implementation',
        automation3: 'Real-time visibility with Data Visualization',
        automation4: 'n8n workflows integration',

        // Operations
        operationsTitle: 'Operational Engineering',
        operations1: 'Short term financing programs support',
        operations2: 'Receivables & Payables optimization',
        operations3: 'Manual tasks reduction',
        operations4: 'Weekly/Monthly KPI reviews',
        operations5: 'Bridge between Finance, IT and operations',

        // Packages Section
        packagesTitle: 'Service Packages',
        offerHeader: 'Offer',
        descriptionHeader: 'Description',
        durationHeader: 'Duration',
        
        flashAudit: 'Flash Audit',
        flashDesc: 'KPI scan & opportunity map',
        flashDuration: '2 weeks',
        
        sprint: 'WKA Sprint',
        sprintDesc: 'Structuring & execution',
        sprintDuration: '2–3 months',
        
        automationPackage: 'Automation',
        automationDesc: 'Workflow build-out & integration',
        automationDuration: '4–6 weeks',
        
        advisory: 'Advisory+',
        advisoryDesc: 'Strategic support & reporting',
        advisoryDuration: 'Ongoing',

        // ROI Section
        roiTitle: 'Your ROI with WKA',
        dsoImprovement: 'Average DSO Improvement',
        costSavings: 'Financing Cost Savings',
        effortSaved: 'Manual Effort Saved',
        capacity: 'Financing Capacity & Coverage',

        // Contact Section
        contactTitle: 'Let\'s Talk',
        bookCall: 'Book a discovery call',
        emailPlaceholder: 'Your email',
        messagePlaceholder: 'Your message',
        sendMessage: 'Send Message',
        emailLabel: 'Email: contact@wka.com',
        phoneLabel: 'Phone: +33 (0)1 XX XX XX XX',

        // Footer
        privacy: 'Privacy Policy',
        legal: 'Legal Mentions',
        copyright: '© 2025 WKA. All rights reserved.'
    },
    fr: {
        // Navigation
        context: 'Contexte',
        whyWka: 'Pourquoi WKA',
        services: 'Services',
        roi: 'ROI',
        contact: 'Contact',
        
        // Hero
        unlockYour: 'Optimisez Votre',
        typedStrings: [
            'Besoin en Fonds de Roulement',
            'Processus de Recouvrement',
            'Gestion des Stocks',
            'Délai de Paiement Fournisseurs'
        ],
        subtitle: 'Conseil | Automatisation | Exécution',
        contactUs: 'Contactez-nous',

        // Context Section
        contextTitle: 'Contexte',
        companiesLate: '1 entreprise sur 3 paie ses factures en retard',
        daysDelay: '11,9 jours de retard en moyenne',
        cashFlow: 'La trésorerie est la 1ère cause de défaillance',
        dataSource: 'Données FR | source : Banque de France, Insee, Altares',

        // Why WKA Section
        whyWkaTitle: 'Pourquoi WKA ?',
        expertise: 'Expertise opérationnelle en trésorerie',
        automation: 'Solutions d\'automatisation intégrées best-in-class',
        independent: 'Indépendant : approche agnostique, axée sur le ROI',
        execution: 'Mise en œuvre rapide par des experts seniors',

        // Services Section
        servicesTitle: 'Nos Services',
        
        // Strategy
        strategyTitle: 'Stratégie & Diagnostic',
        strategy1: 'Analyse du cycle BFR',
        strategy2: 'Diagnostic approfondi DSO, DPO, DIO',
        strategy3: 'Revue de l\'optimisation du BFR',
        strategy4: 'Sélection des solutions de financement',
        strategy5: 'Design & Négociation des appels d\'offres',
        strategy6: 'Approche internationale',

        // Automation
        automationTitle: 'Automatisation & Intégration',
        automation1: 'Partenariats avec les solutions leaders',
        automation2: 'Déploiement des automatisations',
        automation3: 'Tableaux de bord en temps réel',
        automation4: 'Intégration des workflows n8n',

        // Operations
        operationsTitle: 'Ingénierie Opérationnelle',
        operations1: 'Support des financements court terme',
        operations2: 'Optimisation créances & dettes',
        operations3: 'Réduction des tâches manuelles',
        operations4: 'Suivi KPI hebdo/mensuel',
        operations5: 'Interface Finance, IT et Opérations',

        // Packages Section
        packagesTitle: 'Nos Offres',
        offerHeader: 'Offre',
        descriptionHeader: 'Description',
        durationHeader: 'Durée',
        
        flashAudit: 'Audit Flash',
        flashDesc: 'Diagnostic KPI & cartographie',
        flashDuration: '2 semaines',
        
        sprint: 'Sprint WKA',
        sprintDesc: 'Structuration & exécution',
        sprintDuration: '2-3 mois',
        
        automationPackage: 'Automatisation',
        automationDesc: 'Construction & intégration',
        automationDuration: '4-6 semaines',
        
        advisory: 'Conseil+',
        advisoryDesc: 'Support stratégique & reporting',
        advisoryDuration: 'Continu',

        // ROI Section
        roiTitle: 'Votre ROI avec WKA',
        dsoImprovement: '+5-15 jours de DSO',
        costSavings: '0,3-0,7% d\'économies financières',
        effortSaved: '40-70% de gain opérationnel',
        capacity: 'Capacité de financement accrue',

        // Contact Section
        contactTitle: 'Échangeons',
        bookCall: 'Planifiez un appel découverte',
        emailPlaceholder: 'Votre email',
        messagePlaceholder: 'Votre message',
        sendMessage: 'Envoyer',
        emailLabel: 'Email : contact@wka.com',
        phoneLabel: 'Tél : +33 (0)1 XX XX XX XX',

        // Footer
        privacy: 'Politique de Confidentialité',
        legal: 'Mentions Légales',
        copyright: '© 2025 WKA. Tous droits réservés.'
    }
};

// Gestion du changement de langue
const langButtons = document.querySelectorAll('.lang-btn');
const typedInstance = null;

function updateContent(lang) {
    // Mise à jour de la navigation
    document.querySelector('a[href="#context"]').textContent = translations[lang].context;
    document.querySelector('a[href="#why-wka"]').textContent = translations[lang].whyWka;
    document.querySelector('a[href="#services"]').textContent = translations[lang].services;
    document.querySelector('a[href="#roi"]').textContent = translations[lang].roi;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;

    // Mise à jour du hero
    document.querySelector('.hero h1').firstChild.textContent = translations[lang].unlockYour + ' ';
    document.querySelector('.subtitle').textContent = translations[lang].subtitle;
    document.querySelector('.hero .cta-button').textContent = translations[lang].contactUs;

    // Mise à jour des sections
    document.querySelector('#context h2').textContent = translations[lang].contextTitle;
    document.querySelectorAll('#context .stat-card p')[0].textContent = translations[lang].companiesLate;
    document.querySelectorAll('#context .stat-card p')[1].textContent = translations[lang].daysDelay;
    document.querySelectorAll('#context .stat-card p')[2].textContent = translations[lang].cashFlow;
    document.querySelector('#context .footnote').innerHTML = `<em>${translations[lang].dataSource}</em>`;

    // Why WKA
    document.querySelector('#why-wka h2').textContent = translations[lang].whyWkaTitle;
    document.querySelectorAll('#why-wka .feature h3')[0].textContent = translations[lang].expertise;
    document.querySelectorAll('#why-wka .feature h3')[1].textContent = translations[lang].automation;
    document.querySelectorAll('#why-wka .feature h3')[2].textContent = translations[lang].independent;
    document.querySelectorAll('#why-wka .feature h3')[3].textContent = translations[lang].execution;

    // Services
    const servicesSection = document.querySelector('#services');
    servicesSection.querySelector('h2').textContent = translations[lang].servicesTitle;
    
    // Strategy
    const strategyCard = servicesSection.querySelectorAll('.service-card')[0];
    strategyCard.querySelector('h3').textContent = translations[lang].strategyTitle;
    const strategyItems = strategyCard.querySelectorAll('li');
    strategyItems[0].textContent = translations[lang].strategy1;
    strategyItems[1].textContent = translations[lang].strategy2;
    strategyItems[2].textContent = translations[lang].strategy3;
    strategyItems[3].textContent = translations[lang].strategy4;
    strategyItems[4].textContent = translations[lang].strategy5;
    strategyItems[5].textContent = translations[lang].strategy6;

    // Automation
    const automationCard = servicesSection.querySelectorAll('.service-card')[1];
    automationCard.querySelector('h3').textContent = translations[lang].automationTitle;
    const automationItems = automationCard.querySelectorAll('li');
    automationItems[0].textContent = translations[lang].automation1;
    automationItems[1].textContent = translations[lang].automation2;
    automationItems[2].textContent = translations[lang].automation3;
    automationItems[3].textContent = translations[lang].automation4;

    // Operations
    const operationsCard = servicesSection.querySelectorAll('.service-card')[2];
    operationsCard.querySelector('h3').textContent = translations[lang].operationsTitle;
    const operationsItems = operationsCard.querySelectorAll('li');
    operationsItems[0].textContent = translations[lang].operations1;
    operationsItems[1].textContent = translations[lang].operations2;
    operationsItems[2].textContent = translations[lang].operations3;
    operationsItems[3].textContent = translations[lang].operations4;
    operationsItems[4].textContent = translations[lang].operations5;

    // Packages
    const packagesSection = document.querySelector('.packages');
    packagesSection.querySelector('h2').textContent = translations[lang].packagesTitle;
    const tableHeaders = packagesSection.querySelectorAll('th');
    tableHeaders[0].textContent = translations[lang].offerHeader;
    tableHeaders[1].textContent = translations[lang].descriptionHeader;
    tableHeaders[2].textContent = translations[lang].durationHeader;

    const tableRows = packagesSection.querySelectorAll('tbody tr');
    // Flash Audit
    tableRows[0].children[0].textContent = translations[lang].flashAudit;
    tableRows[0].children[1].textContent = translations[lang].flashDesc;
    tableRows[0].children[2].textContent = translations[lang].flashDuration;
    // Sprint
    tableRows[1].children[0].textContent = translations[lang].sprint;
    tableRows[1].children[1].textContent = translations[lang].sprintDesc;
    tableRows[1].children[2].textContent = translations[lang].sprintDuration;
    // Automation
    tableRows[2].children[0].textContent = translations[lang].automationPackage;
    tableRows[2].children[1].textContent = translations[lang].automationDesc;
    tableRows[2].children[2].textContent = translations[lang].automationDuration;
    // Advisory
    tableRows[3].children[0].textContent = translations[lang].advisory;
    tableRows[3].children[1].textContent = translations[lang].advisoryDesc;
    tableRows[3].children[2].textContent = translations[lang].advisoryDuration;

    // ROI
    document.querySelector('#roi h2').textContent = translations[lang].roiTitle;
    const roiCards = document.querySelectorAll('.roi-card');
    roiCards[0].querySelector('p').textContent = translations[lang].dsoImprovement;
    roiCards[1].querySelector('p').textContent = translations[lang].costSavings;
    roiCards[2].querySelector('p').textContent = translations[lang].effortSaved;
    roiCards[3].querySelector('p').textContent = translations[lang].capacity;

    // Contact
    const contactSection = document.querySelector('#contact');
    contactSection.querySelector('h2').textContent = translations[lang].contactTitle;
    contactSection.querySelector('.subtitle').textContent = translations[lang].bookCall;
    contactSection.querySelector('input[type="email"]').placeholder = translations[lang].emailPlaceholder;
    contactSection.querySelector('textarea').placeholder = translations[lang].messagePlaceholder;
    contactSection.querySelector('button').textContent = translations[lang].sendMessage;
    contactSection.querySelectorAll('.contact-details p')[0].textContent = translations[lang].emailLabel;
    contactSection.querySelectorAll('.contact-details p')[1].textContent = translations[lang].phoneLabel;

    // Footer
    const footer = document.querySelector('footer');
    footer.querySelectorAll('.footer-links a')[0].textContent = translations[lang].privacy;
    footer.querySelectorAll('.footer-links a')[1].textContent = translations[lang].legal;
    footer.querySelector('.copyright').textContent = translations[lang].copyright;

    // Mise à jour de la langue du document
    document.documentElement.lang = lang;

    // Réinitialisation de Typed.js avec les nouvelles chaînes
    if (window.typed) {
        window.typed.destroy();
        window.typed = new Typed('#typed-text', {
            strings: translations[lang].typedStrings,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    }
}

langButtons.forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.dataset.lang;
        
        // Mise à jour des boutons de langue
        langButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Mise à jour du contenu
        updateContent(lang);
    });
});

// Animation de la barre de navigation au scroll
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scroll vers le bas
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        nav.style.transform = 'translateY(0)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animation des cartes au scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Appliquer l'animation aux cartes
document.querySelectorAll('.stat-card, .feature, .service-card, .roi-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Ici, vous pouvez ajouter le code pour envoyer les données à votre backend
        console.log('Email:', email);
        console.log('Message:', message);
        
        // Afficher un message de confirmation
        alert('Merci pour votre message. Nous vous contacterons bientôt.');
        this.reset();
    });
}

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 