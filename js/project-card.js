class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');

        this.link = this.getAttribute('link');
        this.img = this.getAttribute('img');
        this.title = this.getAttribute('title');
        this.description = this.getAttribute('description');
        this.lang = this.getAttribute('lang');
        this.github = this.getAttribute('github');
        this.name = this.innerHTML;

        this.template.innerHTML = ` 
        <style>

        h4 {
            color: var(--ui-color-typography-heading);
            font-size: var(--ui-typography-h4);
            line-height: var(--ui-typography-h4-leading);
          }

        .ui-section-projects__layout {
            row-gap: var(--ui-gap-card);
          }
          
          /* CARD */

          .ui-component-card {
            border: .0625rem solid var(--ui-color-border);
            border-radius: var(--ui-radius-card);
            overflow: hidden;
            width: 100%;
          }
          
          .ui-component-card--projects {
            text-align: center;
          }
          
          .ui-component-card--projects-image {
            max-height: 15rem;
            height: 15rem;
            overflow: hidden;
          }
          
          .ui-component-card--projects-content {
            padding: 2.25rem 1.5rem;
            max-height: 18rem;
            height: 18rem;
          }
          
          .ui-component-card--projects-title {
            font-size: var(--ui-typography-h3);
            margin-bottom: .5rem;
          }
          
          .component-card--projects-note{
            position: relative;
            bottom: 20%;
            color: var(--ui-color-typography-note);
            line-height: 1.5;
          }

        </style>

        <div class="ui-component-card ui-component-card--projects">
        <div class="ui-component-card--projects-image">
        <a href="${this.link}" target="_blank">
          <img src="${this.img}" alt="#" loading="lazy">
        </a>
        </div>
        <div class="ui-component-card--projects-content">
          <h4 class="ui-component-card--projects-title">${this.title}</h4>
          <p>${this.description}</p>
          <p class="ui-component-card--projects-note">${this.lang}</p>
          <a href="${this.github}" target="_blank" role="link" aria-label="#">
            <img src="image/git_icon.png" height="22" width="22" />
          </a>
        </div>
      </div>
        `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}
window.customElements.define('project-card', ProjectCard);

