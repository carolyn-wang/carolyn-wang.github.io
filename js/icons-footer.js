class IconsFooter extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer role="contentinfo" class="ui-section-footer">
        <div class="ui-section-footer__layout ui-layout-flex">
          <!-- COPYRIGHT -->
          <p class="ui-section-footer--copyright ui-text-note"><small>&copy; 2021 Carolyn Wang</small></p>
          <!-- MENU -->
          <a href="https://github.com/carolyn-wang" target="_blank" role="link" aria-label="#">
            <img src="image/git_icon.png" height="22" width="22" />
          </a>
          <a href="https://www.linkedin.com/in/carolyn-w/" role="link" target="_blank" aria-label="#">
            <img src="image/linkedin.png" height="22" width="22" />
          </a>
          <a href="mailto:carolynw@berkeley.edu" target="_blank" role="link" aria-label="#">
            <img src="image/gmail.png" height="22" width="22" />
          </a>
        </div>
      </footer>
      `;
    }
  }

customElements.define('icons-footer', IconsFooter);
