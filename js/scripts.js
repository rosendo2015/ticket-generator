const dropzone = document.querySelector('.dropzone');
    const fileInput = document.getElementById('avatar-photo');
    const previewImg = document.getElementById('dropzone-preview');

    // Evita comportamento padrão
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    // Destaque visual
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.classList.add('highlight');
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.classList.remove('highlight');
    });

    // Drop de arquivos
    dropzone.addEventListener('drop', e => {
      const files = e.dataTransfer.files;
      fileInput.files = files; // sincroniza com input
      handleFiles(files);
    });

    // Seleção manual
    fileInput.addEventListener('change', e => {
      handleFiles(e.target.files);
    });

    function handleFiles(files) {
      const file = files[0];
      if (!file || !file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        previewImg.src = reader.result;
        previewImg.style.width = '100px';
        previewImg.style.height = '100px';
        previewImg.style.objectFit = 'cover';
        previewImg.style.borderRadius = '0.5rem';
      };
    }

    const form = document.querySelector('form');
    const ticket = document.querySelector('.Generated');
    const heroTop = document.querySelector('.hero-top')

    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const githubInput = document.getElementById('github-email');
    const avatarInput = document.getElementById('avatar-photo');

    const ticketName = document.getElementById('ticket-name');
    const ticketEmail = document.getElementById('ticket-email');
    const ticketNameCard = document.getElementById('ticket-name-card');
    const ticketGithub = document.getElementById('ticket-github');
    const ticketAvatar = document.getElementById('ticket-avatar');

    form.addEventListener('submit', e => {
      e.preventDefault();

      // Preenche os dados
      const name = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const github = githubInput.value.trim();
      const avatarFile = avatarInput.files[0];

      ticketName.textContent = name || 'Guest';
      ticketEmail.textContent = email || 'no-email@example.com';
      ticketNameCard.textContent = name || 'Guest';
      ticketGithub.textContent = github || '@guest';

      // Atualiza imagem do ticket
      if (avatarFile && avatarFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(avatarFile);
        reader.onloadend = () => {
          ticketAvatar.src = reader.result;
        };
      }

      // Oculta formulário e exibe ticket
      form.classList.add('hide');
      ticket.classList.remove('hide');
      heroTop.classList.add('hide');
    });