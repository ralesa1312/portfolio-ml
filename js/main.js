/**
 * Portfolio - Main JavaScript
 * Features: Scroll Reveal, Typing Effect, Particles, Theme Toggle, Mobile Menu, i18n
 */

/* ============================================
   TRANSLATIONS
============================================ */
const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            skills: 'Compétences',
            experience: 'Expérience',
            projects: 'Projets',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Bonjour, je suis',
            bio: "Ingénieur Data & IA avec plus de 3 ans d'expérience. Spécialisé dans le déploiement de modèles ML, la construction de pipelines de données évolutifs et l'intelligence d'affaires (GCP, AWS, Azure, MLOps).",
            contact: 'Me contacter',
            projects: 'Voir mes projets',
            cv: 'Télécharger CV'
        },
        typing: [
            'Ingénieur Data & IA',
            'Spécialiste Machine Learning',
            'Analyste Business Intelligence',
            'MLOps Engineer',
            'Data Scientist'
        ],
        skills: {
            title: 'Mes <span class="highlight">Compétences</span>'
        },
        experience: {
            title: 'Mon <span class="highlight">Parcours</span>',
            job1: {
                date: 'Août 2025 – Présent',
                title: 'Ingénieur Data & IA',
                company: 'Fluentech Group',
                desc: "Conception de solutions IA de bout en bout, construction de pipelines de données évolutifs et implémentation de pratiques MLOps complètes (MLflow, Vertex AI, Docker)."
            },
            job2: {
                date: 'Janvier 2026 – Présent',
                title: 'Fondateur & Développeur',
                company: 'e-bosy.com — Plateforme digitale',
                desc: "Création et lancement de la plateforme e-bosy.com, de la conception initiale au déploiement en production. Définition de la vision produit, de l'architecture technique et de la stratégie de développement."
            },
            job3: {
                title: 'Analyste Business Intelligence',
                company: 'BNI Madagascar',
                desc: "Déploiement d'un tableau de bord Power BI stratégique et développement de modèles ML pour prédire les flux de crédit, réduisant le temps d'évaluation du risque de 30% et augmentant l'efficacité d'approbation de 25%."
            },
            job4: {
                title: "Développeur Système d'Information",
                company: 'Oceantrade',
                desc: "Développement d'un module CRM personnalisé sous Odoo, augmentant la productivité des ventes de 40%. Automatisation des tâches RH et marketing réduisant le temps de traitement de 60%."
            },
            job5: {
                title: 'Spécialiste Opérations Bancaires Web',
                company: 'Setex Group',
                desc: "Traitement et analyse des données comptables via Excel avancé. Gestion des réclamations clients et litiges de paiement, résolvant 95% des cas dans les délais SLA."
            },
            edu1: {
                date: 'Janvier 2023 – Juin 2024',
                title: 'Master 1 Data Science & IA',
                school: "Institut National Supérieur d'Informatique",
                desc: "Spécialisation en intelligence artificielle, machine learning et analyse de données avancée."
            },
            edu2: {
                title: 'Licence en Ingénierie — Physique des Signaux et Systèmes',
                school: "Université d'Antananarivo",
                desc: "Formation en physique appliquée, traitement du signal et systèmes embarqués."
            }
        },
        projects: {
            title: 'Projets <span class="highlight">Récents</span>',
            anomaly: {
                title: "Détection d'Anomalies",
                desc: "Système de détection d'anomalies en temps réel pour des capteurs industriels utilisant des algorithmes de clustering."
            },
            chatbot: {
                title: 'Chatbot NLP',
                desc: 'Assistant conversationnel fin-tuné sur des données spécifiques au domaine médical avec une précision de 94%.'
            },
            finance: {
                title: 'Prédiction Financière',
                desc: 'Modèle de séries temporelles LSTM pour prédire les tendances boursières avec un MAE de 2.3%.'
            }
        },
        contact: {
            title: 'Me <span class="highlight">Contacter</span>',
            intro: "Vous avez un projet en tête ? N'hésitez pas à me contacter !",
            linkedin: 'Connectons-nous',
            github: 'Voir mon code',
            phone: 'Téléphone'
        },
        footer: {
            rights: 'Tous droits réservés.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: "Hello, I'm",
            bio: 'Data & AI Engineer with 3+ years of experience. Specialized in ML model deployment, scalable data pipelines, and business intelligence (GCP, AWS, Azure, MLOps).',
            contact: 'Contact me',
            projects: 'View my projects',
            cv: 'Download CV'
        },
        typing: [
            'Data & AI Engineer',
            'Machine Learning Specialist',
            'Business Intelligence Analyst',
            'MLOps Engineer',
            'Data Scientist'
        ],
        skills: {
            title: 'My <span class="highlight">Skills</span>'
        },
        experience: {
            title: 'My <span class="highlight">Journey</span>',
            job1: {
                date: 'Aug 2025 – Present',
                title: 'Data & AI Engineer',
                company: 'Fluentech Group',
                desc: 'End-to-end AI solution design, scalable data pipeline construction, and full MLOps practices implementation (MLflow, Vertex AI, Docker).'
            },
            job2: {
                date: 'Jan 2026 – Present',
                title: 'Founder & Developer',
                company: 'e-bosy.com — Digital Platform',
                desc: 'Created and launched the e-bosy.com platform from initial design to production deployment. Defined the product vision, technical architecture, and development strategy.'
            },
            job3: {
                title: 'Business Intelligence Analyst',
                company: 'BNI Madagascar',
                desc: 'Deployed a strategic Power BI dashboard and developed ML models to predict credit flows, reducing risk assessment time by 30% and increasing approval efficiency by 25%.'
            },
            job4: {
                title: 'Information Systems Developer',
                company: 'Oceantrade',
                desc: 'Developed a custom CRM module in Odoo, boosting sales team productivity by 40%. Automated HR and marketing tasks reducing processing time by 60%.'
            },
            job5: {
                title: 'Web Banking Operations Specialist',
                company: 'Setex Group',
                desc: 'Processing and analysis of accounting data via advanced Excel. Managed customer complaints and payment disputes, resolving 95% of cases within SLA deadlines.'
            },
            edu1: {
                date: 'Jan 2023 – Jun 2024',
                title: 'Master 1 in Data Science & AI',
                school: 'Institut National Supérieur d\'Informatique',
                desc: 'Specialization in artificial intelligence, machine learning, and advanced data analysis.'
            },
            edu2: {
                title: 'Bachelor in Engineering — Signal & Systems Physics',
                school: 'University of Antananarivo',
                desc: 'Training in applied physics, signal processing, and embedded systems.'
            }
        },
        projects: {
            title: 'Recent <span class="highlight">Projects</span>',
            anomaly: {
                title: 'Anomaly Detection',
                desc: 'Real-time anomaly detection system for industrial sensors using clustering algorithms.'
            },
            chatbot: {
                title: 'NLP Chatbot',
                desc: 'Conversational assistant fine-tuned on medical domain-specific data with 94% accuracy.'
            },
            finance: {
                title: 'Financial Prediction',
                desc: 'LSTM time series model to predict stock market trends with a MAE of 2.3%.'
            }
        },
        contact: {
            title: 'Contact <span class="highlight">Me</span>',
            intro: 'Have a project in mind? Feel free to reach out!',
            linkedin: "Let's connect",
            github: 'View my code',
            phone: 'Phone'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'fr';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initLanguageSwitcher();
    initTypingEffect();
    initScrollReveal();
    initParticles();
    initThemeToggle();
    initMobileMenu();
    initNavbarScroll();
    initBackToTop();
    initSmoothScroll();
    initActiveNavLink();

    console.log('Portfolio loaded successfully');
});

/* ============================================
   LANGUAGE SWITCHER
============================================ */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Set initial language
    setLanguage(currentLang);

    // Add click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.innerHTML = translation;
        }
    });

    // Restart typing effect with new language
    restartTypingEffect();
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
}

/* ============================================
   TYPING EFFECT
============================================ */
let typingTimeout = null;

function initTypingEffect() {
    startTypingEffect();
}

function startTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const texts = translations[currentLang].typing;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        typingTimeout = setTimeout(type, typingSpeed);
    }

    // Start typing after a small delay
    typingTimeout = setTimeout(type, 1000);
}

function restartTypingEffect() {
    // Clear existing timeout
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }

    // Clear current text
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        typingElement.textContent = '';
    }

    // Restart typing
    startTypingEffect();
}

/* ============================================
   SCROLL REVEAL ANIMATION
============================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for elements
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/* ============================================
   PARTICLES BACKGROUND
============================================ */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            const theme = document.documentElement.getAttribute('data-theme');
            const color = theme === 'light' ? '14, 165, 233' : '56, 189, 248';

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles
    function createParticles() {
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Draw connections between nearby particles
    function drawConnections() {
        const theme = document.documentElement.getAttribute('data-theme');
        const color = theme === 'light' ? '14, 165, 233' : '56, 189, 248';

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.3;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${color}, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    // Recreate particles on resize
    window.addEventListener('resize', () => {
        createParticles();
    });
}

/* ============================================
   THEME TOGGLE
============================================ */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/* ============================================
   MOBILE MENU
============================================ */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('mobile-overlay');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (!hamburger || !navLinks) return;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking a nav link
    navLinkItems.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}

/* ============================================
   NAVBAR SCROLL EFFECT
============================================ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/* ============================================
   BACK TO TOP BUTTON
============================================ */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================
   SMOOTH SCROLL FOR NAVIGATION
============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   ACTIVE NAV LINK ON SCROLL
============================================ */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call once on load
}

/* ============================================
   TILT EFFECT FOR CARDS (Optional Enhancement)
============================================ */
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Initialize tilt effect after page load
window.addEventListener('load', initTiltEffect);
