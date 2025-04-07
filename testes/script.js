document.addEventListener('DOMContentLoaded', () => {
    // Registrar o plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Timeline para a seção Hero
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    heroTimeline
        .from('.character', { x: -200, opacity: 0, duration: 1.5 })
        .to('.character', { x: 50, duration: 1 }, '-=0.5')
        .from('.speech-bubble', { opacity: 0, y: -30, duration: 1 }, '-=0.5')
        .from('.hero h1', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
        .from('.cta-button', { opacity: 0, scale: 0.8, duration: 1 }, '-=0.5');

    // Animações para Navegação
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Animações para Serviços
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
    });

    // Animações para Galeria
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
    });

    // Animações para Agendamento
    gsap.from('.booking form', {
        scrollTrigger: {
            trigger: '.booking',
            start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
    });

    // Animações para Produtos
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products',
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
    });

    // Animações para Botões
    document.querySelectorAll('.service-button, .product-button, .cta-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.1, duration: 0.3 });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.3 });
        });
    });

    // Rolamento Animado para Links de Navegação
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                gsap.to(window, {
                    scrollTo: {
                        y: targetElement,
                        offsetY: 70
                    },
                    duration: 1,
                    ease: 'power2.inOut'
                });
            }
        });
    });
});