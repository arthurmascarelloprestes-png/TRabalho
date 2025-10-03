document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // Alternar tema claro/escuro
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Alternar páginas da navegação
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove ativo de todos os botões e adiciona ao clicado
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Mostrar a página correta
            const pageId = btn.dataset.page;
            pages.forEach(page => {
                page.classList.toggle('active', page.id === pageId);
            });

            // Fecha menu sidebar no mobile após clique
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Botão para abrir/fechar menu mobile
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
