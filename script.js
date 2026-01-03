// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const techCarousel = document.getElementById('techCarousel');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeCarousel();
    initializeForm();
    initializeIntersectionObserver();
    initializeParallaxEffects();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Navigation
function initializeNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';

                // Update active link
                updateActiveLink(link);
            }
        });
    });

    // Update active navigation link based on scroll position
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) updateActiveLink(activeLink);
        }
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Add scroll-triggered animations
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });

    // Floating elements animation enhancement
    const floatingElements = document.querySelectorAll('.element');
    floatingElements.forEach((element, index) => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = `scale(1.2) rotate(${10 + index * 5}deg)`;
            element.style.transition = 'transform 0.3s ease';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize carousel for technologies
function initializeCarousel() {
    if (!techCarousel) return;

    // Clone carousel items for infinite scroll effect
    const carouselItems = techCarousel.children;
    const itemsArray = Array.from(carouselItems);

    // Clone all items and append them
    itemsArray.forEach(item => {
        const clone = item.cloneNode(true);
        techCarousel.appendChild(clone);
    });

    // Add hover pause effect
    techCarousel.addEventListener('mouseenter', () => {
        techCarousel.style.animationPlayState = 'paused';
    });

    techCarousel.addEventListener('mouseleave', () => {
        techCarousel.style.animationPlayState = 'running';
    });

    // Add individual tech item hover effects
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.05)';
            item.style.boxShadow = '0 10px 30px rgba(168, 5, 5, 0.3)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = 'none';
        });
    });
}

// Initialize form handling
function initializeForm() {
    const form = document.querySelector('.contact-form');
    const formInputs = form.querySelectorAll('input, select, textarea');

    // Enhanced form validation and styling
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });

        input.addEventListener('input', () => {
            if (input.value) {
                input.parentElement.classList.add('has-value');
            } else {
                input.parentElement.classList.remove('has-value');
            }
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmission(form);
    });
}

function handleFormSubmission(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    // Show loading state
    submitButton.innerHTML = '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Success state
        submitButton.innerHTML = '<span>¡Enviado!</span><i class="fas fa-check"></i>';
        submitButton.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';

        // Reset form
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
        }, 3000);

        // Show success message
        showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        </div>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        color: #f5f5f5;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        border: 1px solid ${type === 'success' ? '#28a745' : '#a80505'};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #f5f5f5;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
    `;

    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });

    // Auto close
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Initialize Intersection Observer for scroll animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Add specific animations for different elements
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }

                if (entry.target.classList.contains('portfolio-item')) {
                    entry.target.style.transform = 'translateY(0) rotateX(0)';
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item, .tech-category');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize parallax effects
function initializeParallaxEffects() {
    const heroElements = document.querySelectorAll('.element');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = scrolled / heroHeight;

        if (scrollProgress < 1) {
            heroElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translate(-50%, -50%) translateY(${yPos}px)`;
            });
        }
    });
}

// Initialize all animations
function initializeAnimations() {
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        animateTyping(heroTitle);
    }

    // Counter animation for statistics (if any)
    animateCounters();

    // Stagger animation for service cards
    staggerAnimation('.service-card', 100);
    staggerAnimation('.portfolio-item', 150);
    staggerAnimation('.tech-item', 50);
}

function animateTyping(element) {
    const lines = element.querySelectorAll('.title-line');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-30px)';

        setTimeout(() => {
            line.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 200 + 500);
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

function staggerAnimation(selector, delay) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * delay}ms`;
        element.classList.add('animate-in');
    });
}

// Initialize performance optimizations
function initializePerformanceOptimizations() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Debounced scroll handler
    let ticking = false;
    function updateScrollEffects() {
        // Update any scroll-based effects here
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Add smooth reveal animations
function addRevealAnimations() {
    const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // Add CSS for revealed state
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when window loads
window.addEventListener('load', () => {

    initializePerformanceOptimizations();
    addRevealAnimations();

    // Add loading complete class to body
    document.body.classList.add('loaded');
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Arrow key navigation for carousel items
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('tech-item')) {
            const techItems = Array.from(document.querySelectorAll('.tech-item'));
            const currentIndex = techItems.indexOf(focusedElement);
            let nextIndex;

            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : techItems.length - 1;
            } else {
                nextIndex = currentIndex < techItems.length - 1 ? currentIndex + 1 : 0;
            }

            techItems[nextIndex].focus();
            e.preventDefault();
        }
    }
});

// Add focus management for accessibility
function initializeAccessibility() {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #a80505;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s ease;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
initializeAccessibility();

// Add error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Recalculate any position-dependent elements
    updateActiveNavigation();
}, 250));

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add prefetch for faster navigation
function prefetchResources() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                // Preload any images in the target section
                const images = target.querySelectorAll('img[data-src]');
                images.forEach(img => {
                    if (!img.src) {
                        img.src = img.dataset.src;
                    }
                });
            }
        });
    });
}

// Initialize prefetching
prefetchResources();