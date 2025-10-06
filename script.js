document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // Verificar tema salvo no localStorage (para persistir a preferência)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        sunIcon.classList.remove('active');
        moonIcon.classList.add('active');
    }

    // Alternar tema claro/escuro
    toggleThemeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        
        if (isDark) {
            // Mudar para tema claro
            document.body.classList.remove('dark-mode');
            sunIcon.classList.add('active');
            moonIcon.classList.remove('active');
            localStorage.setItem('theme', 'light');
        } else {
            // Mudar para tema escuro
            document.body.classList.add('dark-mode');
            sunIcon.classList.remove('active');
            moonIcon.classList.add('active');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Alternar páginas da navegação
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe 'active' de todos os botões de navegação
            navButtons.forEach(b => b.classList.remove('active'));
            // Adiciona 'active' ao botão clicado
            btn.classList.add('active');

            // Remove 'active' de todas as páginas e adiciona apenas à selecionada
            const pageId = btn.dataset.page;
            pages.forEach(page => {
                if (page.id === pageId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });

            // Em mobile, fecha o sidebar após clicar em um item
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Botão mobile para abrir/fechar sidebar
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Fechar sidebar mobile ao redimensionar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });
});
