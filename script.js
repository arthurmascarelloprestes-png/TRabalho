document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // Alternar tema claro/escuro
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggleThemeBtn.textContent = isDark ? '🌞' : '🌙';
    });

    // Alternar páginas
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos botões
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Mostrar só a página selecionada
            const pageId = btn.dataset.page;
            pages.forEach(page => {
                page.classList.toggle('active', page.id === pageId);
            });

            // Se estiver mobile, fechar menu ao clicar
            if(window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Botão mobile abrir/fechar sidebar
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Não altera o conteúdo do botão
});
});
