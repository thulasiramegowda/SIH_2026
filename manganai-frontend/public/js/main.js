// Main JavaScript for MANGANAI

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 MANGANAI loaded successfully!');
    
    // Add smooth transitions for area cards
    const cards = document.querySelectorAll('.area-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Remove selected class from all cards
            cards.forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            this.classList.add('selected');
        });
    });

    // Map layer switching
    const layerButtons = document.querySelectorAll('.layer-btn');
    layerButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all layer buttons
            layerButtons.forEach(b => {
                b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border', 'border-cyan-500/20');
                b.classList.add('text-gray-400');
            });
            // Add active class to clicked button
            this.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border', 'border-cyan-500/20');
            this.classList.remove('text-gray-400');
            
            // Update map layer (mock)
            const mapContainer = document.querySelector('.map-container');
            if (mapContainer) {
                mapContainer.style.opacity = '0.7';
                setTimeout(() => {
                    mapContainer.style.opacity = '1';
                }, 300);
            }
        });
    });

    // Score animation on load
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        const targetValue = parseInt(scoreCircle.getAttribute('data-target') || '84');
        let currentValue = 0;
        const interval = setInterval(() => {
            if (currentValue >= targetValue) {
                clearInterval(interval);
                return;
            }
            currentValue += Math.ceil(targetValue / 30);
            const circle = scoreCircle.querySelector('circle:last-child');
            if (circle) {
                const circumference = 2 * Math.PI * 26;
                const offset = circumference - (currentValue / 100) * circumference;
                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = offset;
            }
            const numberDisplay = scoreCircle.querySelector('.score-number');
            if (numberDisplay) {
                numberDisplay.textContent = Math.min(currentValue, targetValue);
            }
        }, 30);
    }

    // Indicator card hover effects
    const indicatorCards = document.querySelectorAll('.indicator-card');
    indicatorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.borderColor = 'rgba(0, 200, 255, 0.2)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        });
    });

    // Priority badge pulse
    const priorityBadges = document.querySelectorAll('.priority-badge');
    priorityBadges.forEach(badge => {
        const dot = badge.querySelector('.priority-dot');
        if (dot) {
            setInterval(() => {
                dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
            }, 1000);
        }
    });

    // Smooth scroll for main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.addEventListener('scroll', function() {
            // Add subtle shadow when scrolled
            const header = document.querySelector('header');
            if (this.scrollTop > 10) {
                header?.classList.add('shadow-lg');
            } else {
                header?.classList.remove('shadow-lg');
            }
        });
    }

    // Sidebar navigation highlight
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => {
                l.classList.remove('bg-cyan-500/10', 'text-cyan-400', 'border', 'border-cyan-500/20');
                l.classList.add('text-gray-400');
                const indicator = l.querySelector('.ml-auto');
                if (indicator) indicator.remove();
            });
            this.classList.add('bg-cyan-500/10', 'text-cyan-400', 'border', 'border-cyan-500/20');
            this.classList.remove('text-gray-400');
            
            // Add active indicator
            const indicator = document.createElement('span');
            indicator.className = 'ml-auto w-0.5 h-5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,200,255,0.3)]';
            this.appendChild(indicator);
        });
    });
});

// Utility function for formatting numbers
function formatNumber(num, decimals = 2) {
    return Number(num).toFixed(decimals);
}

// Utility function for getting priority color
function getPriorityColor(priority) {
    const colors = {
        'HIGH': 'emerald',
        'MEDIUM': 'yellow',
        'LOW': 'red'
    };
    return colors[priority] || 'gray';
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatNumber, getPriorityColor };
}