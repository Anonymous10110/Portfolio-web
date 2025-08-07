
        const modeToggle = document.getElementById('modeToggle');
        const body = document.body;
        const icon = modeToggle.querySelector('i');

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
            modeToggle.querySelector('span').textContent = 'Light Mode';
        }

        // Toggle theme
        modeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                modeToggle.querySelector('span').textContent = 'Light Mode';
                localStorage.setItem('theme', 'light');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                modeToggle.querySelector('span').textContent = 'Dark Mode';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to clicked link
                this.classList.add('active');
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
