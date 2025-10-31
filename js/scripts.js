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
    const githubInput = document.getElementById('github');
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
      
      
      const errorName = document.querySelector(".errorName")
      const errorEmail = document.querySelector(".errorEmail")
      const errorGit = document.querySelector(".errorGit")
      const errorDragOrange = document.querySelector(".errorDragOrange")
      const errorDragWhite = document.querySelector(".errorDragWhite")
      
      if(avatarFile === avatarInput.files['']){        
          errorDragOrange.classList.remove("hide")
          errorDragWhite.classList.add("hide")
          return
        }else{
            errorDragOrange.classList.add("hide")
            errorDragWhite.classList.remove("hide")      
      }
      if(name === ""){        
        errorName.classList.remove("hide")
        return
        }else{
        errorName.classList.add("hide")      
      }
      if(email === ""){        
        errorEmail.classList.remove("hide")
        return
         }else{
          errorEmail.classList.add("hide")

      }
      if(github === ""){        
        errorGit.classList.remove("hide")
        return
         }else{
          errorGit.classList.add("hide")

      }
     

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

    let dateDay = new Date().getDay()
    let dateMes = new Date().getMonth()
    let dateAno = new Date().getFullYear()

    console.log(dateDay);
    console.log(dateMes);
    console.log(dateAno);
