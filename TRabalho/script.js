// Espera o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('overlay');
    const navBtns = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    // Função para abrir/fechar a sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Ajusta a margem do conteúdo principal no mobile
        const mainContent = document.querySelector('.main-content');
        if (sidebar.classList.contains('active')) {
            mainContent.style.marginLeft = '256px'; // Desliza o conteúdo para a direita
        } else {
            mainContent.style.marginLeft = '0';
        }
    }

    // Função para mostrar uma página específica e atualizar navegação
    function showPage(pageId) {
        // Esconde todas as páginas
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Remove o ativo de todos os botões de navegação
        navBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // Mostra a página selecionada
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Ativa o botão correspondente
        const targetBtn = document.querySelector(`[data-page="${pageId}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }

        // Fecha a sidebar no mobile após navegar
        if (window.innerWidth < 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.querySelector('.main-content').style.marginLeft = '0';
        }
    }

    // Event listener para o botão mobile (☰)
    mobileMenuBtn.addEventListener('click', toggleSidebar);

    // Event listener para o overlay (fecha sidebar ao clicar fora)
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('.main-content').style.marginLeft = '0';
    });

    // Event listeners para os botões de navegação
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Página inicial: mostra "home" por padrão
    showPage('home');

    // Ajusta responsividade ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            // No desktop, sidebar sempre visível e conteúdo com margem
            sidebar.classList.add('active'); // Garante que esteja visível
            overlay.classList.remove('active');
            document.querySelector('.main-content').style.marginLeft = '256px';
        } else {
            // No mobile, esconde se estiver aberta
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        }
    });
});