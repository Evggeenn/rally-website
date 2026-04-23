document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFilters();
    initModal();
    initScrollEffects();
});

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.page;

            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === target) {
                    page.classList.add('active');
                }
            });

            if (window.innerWidth <= 768) {
                document.querySelector('.main-nav').classList.remove('open');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.querySelector('.main-nav').classList.toggle('open');
        });
    }

    const homeBtn = document.querySelector('[data-page="home"]');
    if (homeBtn) {
        homeBtn.classList.add('active');
    }
    document.getElementById('home')?.classList.add('active');
}

function initFilters() {
    document.querySelectorAll('.filter-bar').forEach(bar => {
        const buttons = bar.querySelectorAll('.filter-btn');
        const container = bar.nextElementSibling;

        if (!container || !container.classList.contains('cards-grid') && !container.classList.contains('gallery-grid')) {
            return;
        }

        const cards = container.querySelectorAll('.card, .gallery-item');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.era === filter) {
                        card.style.display = '';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });
    });
}

function initModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;

    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.dataset.imgSrc;
            const imgAlt = item.dataset.imgAlt || 'Rally moment';

            if (imgSrc) {
                modalImg.src = imgSrc;
                modalImg.alt = imgAlt;
                modalCaption.textContent = imgAlt;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function initScrollEffects() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        }

        lastScroll = currentScroll;
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .timeline-item, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}