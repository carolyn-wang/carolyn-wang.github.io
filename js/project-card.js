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

        h3{
            color: var(--ui-color-typography-heading);
            font-size: var(--ui-typography-h3);
            line-height: var(--ui-typography-h4-leading);
            font-weight: var(--ui-bold);
          }
        
        h4{
            color: var(--ui-color-typography-note);
            font-size: var(--ui-typography-h4);
            line-height: var(--ui-typography-h4-leading);
            bottom: 20%;
            line-height: 1.5;
          }

        p{
            margin: 0rem;
        }

          .image-container{
            max-height: 15rem;
            overflow: hidden;
          }

          img {
            max-width: 100%;
            min-height: 100%;
          }
          
          .content-container {
            padding: 1rem 1.5rem;
            max-height: 15rem;
            height: 15rem;
            text-align: center;
          }
          
          .title {
            font-size: var(--ui-typography-h3);
            margin-bottom: .5rem;
          }

          .subtext{
              position: relative;
          }

          .icon{
            text-decoration: none;
            padding: 0.3rem;
          }
          
        </style>

        <div class="image-container">
        <a href="${this.link}" target="_blank">
          <img src="${this.img}" alt="#" loading="lazy">
        </a>
        </div>
        <div class="content-container">
          <h3 class="title">${this.name}</h3>
          <p>${this.description}</p>
          <div class="subtext">
            <h4 class="note">${this.lang}</h4>
            <a href="${this.github}" class="icon" target="_blank" role="link" aria-label="#">
                <img src="image/git_icon.png" height="22" width="22" />
            </a>
            <a href="${this.link}" class="icon" target="_blank" role="link" aria-label="#">
            <img src="image/link.png" height="22" width="22" />
            </a>
          </div>
        </div>
        `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}
window.customElements.define('project-card', ProjectCard);

