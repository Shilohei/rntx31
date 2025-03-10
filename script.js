// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 0, 51, 0.95)';
        } else {
            navbar.style.background = 'transparent';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // GSAP Animations
    // Hero Section Animation
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.logo-wrapper', {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power4.out'
        })
        .from('.rntx-logo', {
            duration: 1.2,
            scale: 0.5,
            rotation: 15,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.8')
        .from('.revenant-text', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.4')
        .from('.tagline', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.8')
        .from('.hero-cta', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power4.out'
        }, '-=0.6');
    
    // Wolf overlay parallax effect
    gsap.to('.wolf-overlay', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        opacity: 0.02,
        ease: 'none'
    });

    // Scroll Animations
    // About Section
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power4.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power4.out'
    });

    // Teams Section Animation
    gsap.from('.teams-section .section-title', {
        scrollTrigger: {
            trigger: '.teams-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power4.out'
    });

    // Contact Form Animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power4.out'
    });

    // Parallax Effect
    document.querySelectorAll('.parallax-element').forEach(element => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
    });

    // File Upload Handler
    const fileUpload = document.getElementById('fileUpload');
    if (fileUpload) {
        fileUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Add file size validation
                const maxSize = 5 * 1024 * 1024; // 5MB
                if (file.size > maxSize) {
                    alert('File size should not exceed 5MB');
                    fileUpload.value = '';
                    return;
                }

                // Add file type validation
                const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
                if (!allowedTypes.includes(file.type)) {
                    alert('Only JPEG, PNG and PDF files are allowed');
                    fileUpload.value = '';
                    return;
                }
            }
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            try {
                // Here you would typically send the form data to your backend
                // For now, we'll just simulate a successful submission
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Clear form
                contactForm.reset();
                alert('Message sent successfully!');
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error sending your message. Please try again.');
            }
        });
    }

    // Add dynamic team cards (example)
    const teamsContainer = document.querySelector('.teams-section .row');
    if (teamsContainer) {
        const teams = [
            { name: 'Valorant', members: 5 },
            { name: 'PUBG', members: 4 },
            { name: 'League of Legends', members: 5 }
        ];

        teams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.className = 'col-md-4';
            teamCard.innerHTML = `
                <div class="card bg-dark text-light">
                    <div class="card-body">
                        <h5 class="card-title">${team.name} Team</h5>
                        <p class="card-text">Active Members: ${team.members}</p>
                    </div>
                </div>
            `;
            teamsContainer.appendChild(teamCard);
        });
    }

    // Player cards animation
    animatePlayerCards();
});

// Player cards animation
function animatePlayerCards() {
    const playerCards = document.querySelectorAll('.player-card');
    
    if (playerCards.length === 0) {
        console.log("No player cards found on the page");
        return;
    }
    
    console.log(`Found ${playerCards.length} player cards`);
    
    // Make sure cards are visible first
    playerCards.forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "none";
    });
    
    // Then apply animations
    playerCards.forEach((card, index) => {
        // Main card animation
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.1 * index,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
        
        // Image animation
        const playerImage = card.querySelector('.player-image');
        if (playerImage) {
            gsap.from(playerImage, {
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
                delay: 0.1 * index + 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        }
        
        // Hover animations
        card.addEventListener('mouseenter', () => {
            // Only animate the player name if it exists
            const playerName = card.querySelector('h4');
            if (playerName) {
                gsap.to(playerName, {
                    scale: 1.05,
                    color: '#ffffff',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            
            // Only animate the role if it exists
            const playerRole = card.querySelector('.player-role');
            if (playerRole) {
                gsap.to(playerRole, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            
            // Animate the image if it exists
            if (playerImage) {
                gsap.to(playerImage, {
                    boxShadow: '0 0 25px rgba(157, 0, 255, 0.6)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Only animate the player name if it exists
            const playerName = card.querySelector('h4');
            if (playerName) {
                gsap.to(playerName, {
                    scale: 1,
                    color: 'var(--primary-color)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            
            // Only animate the role if it exists
            const playerRole = card.querySelector('.player-role');
            if (playerRole) {
                gsap.to(playerRole, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            
            // Animate the image if it exists
            if (playerImage) {
                gsap.to(playerImage, {
                    boxShadow: '0 0 20px rgba(157, 0, 255, 0.4)',
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
}

// Valorant Section Animations
function initValorantAnimations() {
    // Check if Valorant section exists
    if (document.querySelector('#valorant')) {
        // Create a timeline for the Valorant section
        const valorantTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#valorant",
                start: "top 80%",
                end: "center center",
                toggleActions: "play none none none"
            }
        });

        // Add animations to the timeline
        valorantTL
            .from(".valorant-section .section-title", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(".valorant-section .section-intro p", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(".valorant-section .sub-title", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.3")
            .from(".player-card.valorant-player", {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.2")
            .from(".stats-card", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.4")
            .from(".table-dark", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.3")
            .from(".achievements-card", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.3")
            .from(".achievement-list li", {
                x: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.2");

        // Add hover animations for player cards
        gsap.utils.toArray(".player-card.valorant-player").forEach(card => {
            card.addEventListener("mouseenter", () => {
                gsap.to(card.querySelector(".player-image"), {
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(255, 70, 85, 0.6)",
                    duration: 0.3
                });
                gsap.to(card.querySelector("h4"), {
                    color: "#ffffff",
                    duration: 0.3
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card.querySelector(".player-image"), {
                    scale: 1,
                    boxShadow: "0 0 20px rgba(255, 70, 85, 0.4)",
                    duration: 0.3
                });
                gsap.to(card.querySelector("h4"), {
                    color: "#ff4655",
                    duration: 0.3
                });
            });
        });

        // Add counter animation for stats
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(stat => {
            const value = parseFloat(stat.textContent);
            stat.textContent = "0";
            
            ScrollTrigger.create({
                trigger: stat,
                start: "top 90%",
                onEnter: () => {
                    gsap.to(stat, {
                        duration: 2,
                        textContent: value.toString(),
                        roundProps: "textContent",
                        ease: "power1.inOut",
                        snap: { textContent: 1 }
                    });
                },
                once: true
            });
        });
    }
}

// Initialize lightning effects for all sections
function initLightningEffects() {
    // Get all lightning elements
    const lightningElements = document.querySelectorAll('.lightning');
    
    // Function to animate a random lightning element
    function animateRandomLightning() {
        // Get a random lightning element
        const randomIndex = Math.floor(Math.random() * lightningElements.length);
        const lightning = lightningElements[randomIndex];
        
        // Random opacity and duration
        const opacity = Math.random() * 0.3 + 0.1;
        const duration = Math.random() * 0.2 + 0.1;
        
        // Animate the lightning
        gsap.to(lightning, {
            opacity: opacity,
            duration: duration,
            onComplete: () => {
                gsap.to(lightning, {
                    opacity: 0,
                    duration: duration * 2
                });
            }
        });
        
        // Schedule the next lightning with respect to performance setting
        const nextDelay = window.reducedLightning ? 
            Math.random() * 10 + 5 : // 5-15 seconds for reduced mode
            Math.random() * 5 + 2;   // 2-7 seconds for normal mode
        setTimeout(animateRandomLightning, nextDelay * 1000);
    }
    
    // Start the lightning animation
    animateRandomLightning();
}

// Initialize particle effects
function initParticleEffects() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    // Function to create a single particle
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        // Random animation duration
        const duration = Math.random() * 5 + 3;
        
        // Set styles
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Add to container
        container.appendChild(particle);
        
        // Remove and recreate particle after animation ends
        setTimeout(() => {
            particle.remove();
            createParticle(container);
        }, duration * 1000);
    }
}

// Initialize player cards modal functionality
function initPlayerCards() {
    const playerCards = document.querySelectorAll('.player-card');
    const playerModalOverlay = document.querySelector('.player-modal-overlay');
    const playerModal = document.querySelector('.player-modal');
    const playerModalClose = document.querySelector('.player-modal-close');
    
    // Player stats data (additional stats that aren't in the data attributes)
    const playerStats = {
        // BGMI Players
        'sarang': {
            tournaments: 18,
            wins: 7,
            kd: 3.2,
            avgPlacement: 3.5,
            avgKills: 5.8,
            clutches: 24
        },
        'spraygod': {
            tournaments: 22,
            wins: 9,
            kd: 4.7,
            avgPlacement: 2.8,
            avgKills: 8.2,
            clutches: 18
        },
        'shadow': {
            tournaments: 20,
            wins: 8,
            kd: 2.9,
            avgPlacement: 2.5,
            avgKills: 4.5,
            clutches: 15
        },
        'jokerr': {
            tournaments: 25,
            wins: 12,
            kd: 5.1,
            avgPlacement: 2.2,
            avgKills: 9.3,
            clutches: 32
        },
        'syed': {
            tournaments: 10,
            wins: 3,
            kd: 2.5,
            avgPlacement: 4.1,
            avgKills: 3.8,
            clutches: 8
        },
        
        // Valorant Players
        'antidote': {
            tournaments: 15,
            wins: 6,
            kd: 1.8,
            avgPlacement: 2.7,
            avgKills: 18.5,
            clutches: 21
        },
        'azys': {
            tournaments: 12,
            wins: 5,
            kd: 1.6,
            avgPlacement: 2.9,
            avgKills: 17.2,
            clutches: 14
        },
        'deathmaker': {
            tournaments: 14,
            wins: 6,
            kd: 1.9,
            avgPlacement: 2.5,
            avgKills: 22.1,
            clutches: 19
        },
        'rawfiul': {
            tournaments: 13,
            wins: 5,
            kd: 1.5,
            avgPlacement: 3.1,
            avgKills: 16.8,
            clutches: 12
        },
        'georggyyy': {
            tournaments: 10,
            wins: 4,
            kd: 1.7,
            avgPlacement: 2.8,
            avgKills: 19.3,
            clutches: 16
        },
        'levi': {
            tournaments: 6,
            wins: 2,
            kd: 1.4,
            avgPlacement: 3.5,
            avgKills: 15.7,
            clutches: 8
        },
        'gobz': {
            tournaments: 5,
            wins: 2,
            kd: 1.3,
            avgPlacement: 3.8,
            avgKills: 14.2,
            clutches: 6
        }
    };
    
    // Add click event to each player card
    playerCards.forEach(card => {
        card.addEventListener('click', () => {
            const playerId = card.getAttribute('data-player-id');
            const playerName = card.getAttribute('data-player-name');
            const playerRealName = card.getAttribute('data-player-realname');
            const playerRole = card.getAttribute('data-player-role');
            const playerEarnings = card.getAttribute('data-player-earnings');
            const playerAchievements = card.getAttribute('data-player-achievements').split(',');
            
            // Populate modal with player data
            document.querySelector('.player-modal-name').textContent = playerName;
            document.querySelector('.player-modal-realname').textContent = playerRealName;
            document.querySelector('.player-modal-role').textContent = playerRole;
            document.querySelector('.player-earnings').textContent = playerEarnings;
            
            // Populate player stats
            if (playerStats[playerId]) {
                const stats = playerStats[playerId];
                const statValues = document.querySelectorAll('.player-stat-value');
                
                statValues[0].textContent = stats.tournaments;
                statValues[1].textContent = stats.wins;
                statValues[2].textContent = stats.kd;
                statValues[3].textContent = stats.avgPlacement;
                statValues[4].textContent = stats.avgKills;
                statValues[5].textContent = stats.clutches;
            }
            
            // Populate achievements
            const achievementsList = document.querySelector('.player-achievements-list');
            achievementsList.innerHTML = '';
            
            playerAchievements.forEach(achievement => {
                if (achievement.trim()) {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="achievement-bullet"><i class="fas fa-trophy"></i></span>
                        <span>${achievement.trim()}</span>
                    `;
                    achievementsList.appendChild(li);
                }
            });
            
            // Show modal with animation
            playerModalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Add animation to modal entrance
            gsap.from(playerModal, {
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.out'
            });
        });
    });
    
    // Close modal when clicking the close button
    playerModalClose.addEventListener('click', () => {
        closePlayerModal();
    });
    
    // Close modal when clicking outside the modal
    playerModalOverlay.addEventListener('click', (e) => {
        if (e.target === playerModalOverlay) {
            closePlayerModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && playerModalOverlay.classList.contains('active')) {
            closePlayerModal();
        }
    });
    
    // Function to close the modal
    function closePlayerModal() {
        gsap.to(playerModal, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            ease: 'power3.in',
            onComplete: () => {
                playerModalOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });
    }
}

// Check and create missing assets
function checkAndCreateAssets() {
    // List of required assets
    const requiredAssets = [
        { name: 'rntx-logo.png', fallback: '<i class="fas fa-gamepad"></i>' },
        { name: 'bgmi-logo.png', fallback: '<i class="fas fa-gamepad"></i>' },
        { name: 'valorant-logo.png', fallback: '<i class="fas fa-user-ninja"></i>' },
        { name: 'wolf-silhouette.png', fallback: null },
        { name: 'dark-texture.jpg', fallback: null },
        { name: 'team-logo.png', fallback: '<i class="fas fa-shield-alt"></i>' }
    ];
    
    // Check each asset
    requiredAssets.forEach(asset => {
        const img = new Image();
        img.src = `assets/${asset.name}`;
        
        img.onerror = function() {
            console.warn(`Missing asset: assets/${asset.name}`);
            
            // Handle missing assets with fallbacks
            if (asset.name === 'rntx-logo.png') {
                const logoWrapper = document.querySelector('.logo-wrapper');
                if (logoWrapper && logoWrapper.querySelector('img')) {
                    const imgElement = logoWrapper.querySelector('img');
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder';
                    placeholder.innerHTML = asset.fallback;
                    imgElement.replaceWith(placeholder);
                }
            } else if (asset.name === 'bgmi-logo.png' || asset.name === 'valorant-logo.png') {
                const logoElements = document.querySelectorAll(`.bgmi-logo[src="assets/${asset.name}"]`);
                logoElements.forEach(element => {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder';
                    placeholder.innerHTML = asset.fallback;
                    placeholder.style.width = '200px';
                    placeholder.style.height = '100px';
                    placeholder.style.display = 'flex';
                    placeholder.style.alignItems = 'center';
                    placeholder.style.justifyContent = 'center';
                    placeholder.style.margin = '0 auto 20px';
                    element.replaceWith(placeholder);
                });
            }
        };
    });
}

// Performance optimization for animations
function initPerformanceOptimization() {
    // Check if user has reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Create a toggle button for animations
    const footer = document.querySelector('.footer');
    if (footer) {
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'animation-toggle';
        toggleContainer.style.textAlign = 'center';
        toggleContainer.style.marginTop = '20px';
        
        const toggleButton = document.createElement('button');
        toggleButton.className = 'btn btn-sm btn-outline-light';
        toggleButton.textContent = localStorage.getItem('reduceAnimations') === 'true' || prefersReducedMotion ? 
            'Enable Animations' : 'Reduce Animations';
        toggleButton.style.fontSize = '0.8rem';
        toggleButton.style.padding = '5px 10px';
        
        toggleContainer.appendChild(toggleButton);
        footer.querySelector('.container').appendChild(toggleContainer);
        
        // Set initial animation state
        if (localStorage.getItem('reduceAnimations') === 'true' || prefersReducedMotion) {
            reduceAnimations();
        }
        
        // Toggle animations on click
        toggleButton.addEventListener('click', function() {
            const currentState = localStorage.getItem('reduceAnimations') === 'true';
            localStorage.setItem('reduceAnimations', !currentState);
            
            if (!currentState) {
                reduceAnimations();
                toggleButton.textContent = 'Enable Animations';
            } else {
                enableAnimations();
                toggleButton.textContent = 'Reduce Animations';
            }
        });
    }
    
    // Function to reduce animations
    function reduceAnimations() {
        // Reduce particle count
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index % 3 !== 0) { // Keep only 1/3 of particles
                particle.style.display = 'none';
            }
        });
        
        // Reduce lightning frequency
        window.reducedLightning = true;
        
        // Disable some animations
        document.body.classList.add('reduced-motion');
        
        // Add CSS to reduce animations
        if (!document.getElementById('reduced-motion-styles')) {
            const style = document.createElement('style');
            style.id = 'reduced-motion-styles';
            style.textContent = `
                .reduced-motion .player-card:hover {
                    animation: none !important;
                    transform: translateY(-5px) !important;
                }
                .reduced-motion .stats-card::before {
                    animation: none !important;
                }
                .reduced-motion .achievement-list li:hover {
                    transform: none !important;
                }
                .reduced-motion .achievement-list li:hover .achievement-icon {
                    transform: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Function to enable animations
    function enableAnimations() {
        // Restore particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.display = '';
        });
        
        // Restore lightning frequency
        window.reducedLightning = false;
        
        // Enable animations
        document.body.classList.remove('reduced-motion');
    }
}

// Initialize all animations
function initAnimations() {
    // ... existing animation initializations ...
    
    // Initialize player cards animations
    animatePlayerCards();
    
    // Initialize Valorant section animations
    initValorantAnimations();
    
    // Initialize lightning effects
    initLightningEffects();
    
    // Initialize particle effects
    initParticleEffects();
    
    // Initialize player cards modal functionality
    initPlayerCards();
    
    // Initialize performance optimization
    initPerformanceOptimization();
}

// Initialize all animations and functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Initialize animations
    initAnimations();
    
    // Initialize player cards modal functionality
    initPlayerCards();
    
    // Initialize contact form
    initContactForm();
    
    // Check and create missing assets
    checkAndCreateAssets();
    
    // Initialize performance optimization
    initPerformanceOptimization();
    
    // Fallback to ensure player cards are visible even if animations fail
    setTimeout(() => {
        const playerCards = document.querySelectorAll('.player-card');
        playerCards.forEach(card => {
            card.style.opacity = '1';
        });
    }, 1000);
});

// Handle contact form submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
            const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
            const messageInput = contactForm.querySelector('textarea[placeholder="Your Message"]');
            const fileInput = document.getElementById('fileUpload');
            
            // Validate form
            let isValid = true;
            let errorMessage = '';
            
            if (!nameInput.value.trim()) {
                isValid = false;
                errorMessage += 'Name is required.\n';
                nameInput.classList.add('is-invalid');
            } else {
                nameInput.classList.remove('is-invalid');
            }
            
            if (!emailInput.value.trim()) {
                isValid = false;
                errorMessage += 'Email is required.\n';
                emailInput.classList.add('is-invalid');
            } else if (!isValidEmail(emailInput.value.trim())) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                emailInput.classList.add('is-invalid');
            } else {
                emailInput.classList.remove('is-invalid');
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                errorMessage += 'Message is required.\n';
                messageInput.classList.add('is-invalid');
            } else {
                messageInput.classList.remove('is-invalid');
            }
            
            if (!isValid) {
                alert('Please fix the following errors:\n' + errorMessage);
                return;
            }
            
            // Create form data for submission
            const formData = new FormData();
            formData.append('name', nameInput.value.trim());
            formData.append('email', emailInput.value.trim());
            formData.append('message', messageInput.value.trim());
            
            if (fileInput.files.length > 0) {
                formData.append('file', fileInput.files[0]);
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }, 1500);
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 