class modal {
    classmodalShow =  'modal--show';
    classForBody = 'modal-active';
    modal = null;
    closeOnClickOverlay = false;

    constructor(options = {}) {

      if (options.closeOnClickOverlay) {
        this.closeOnClickOverlay = true;
      }

      this.scrollWidthInit();

      document.addEventListener('click', e => {
        
        // Abrir Modal
        if (e.target.dataset.modalOpen) {
          e.preventDefault();
          this.modal = document.getElementById(e.target.dataset.modalOpen);
          this.show();
        }

        // Fechar Modal
        if (e.target.hasAttribute('data-modal-close') ||
           (e.target.closest('.modal__close') && e.target.closest('.modal__close').hasAttribute('data-modal-close')) ||
           (this.closeOnClickOverlay && e.target.classList.contains('modal__content'))
        ){
          e.preventDefault();
          this.hide();
        }
      })
    }

    scrollWidthInit() {

      function existVerticalScroll() {
        let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
            sh =  document.body.scrollHeight;

        return sh > vh ? true : false;
      }

      let div = document.createElement('div');
  
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
  
      document.body.append(div);
  
      let scrollWidth = div.offsetWidth - div.clientWidth;
  
      div.remove();

      if (existVerticalScroll()) {
        document.documentElement.style.setProperty('--scroll-width', scrollWidth + 'px');
      }
    }

    show() {
      
      if (this.modal) {
        this.modal.classList.add(this.classmodalShow);
      }

      document.body.classList.add(this.classForBody);
    }

    hide() {

      if (this.modal) {
        this.modal.classList.remove(this.classmodalShow);
      }

      document.body.classList.remove(this.classForBody);
    }
  }

  new modal({
    closeOnClickOverlay: true,
  });
