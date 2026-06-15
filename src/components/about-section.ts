import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import sharedStyles from '../styles/shared.css?raw';
import aboutMd from '../content/about.md?raw';
import skillsData from '../content/skills.json';
import contactData from '../content/contact.json';

@customElement('about-section')
export class AboutSection extends LitElement {
  @state() private introHtml = '';
  @state() private profileHtml = '';

  private handleNavigate(e: Event, targetId: string) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('nav-navigate', {
      detail: { targetId },
      bubbles: true,
      composed: true
    }));
  }

  static styles = [
    css`${unsafeCSS(sharedStyles)}`,
    css`
      .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-top: 3rem;
      }

      @media (min-width: 992px) {
        .about-grid {
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
        }
      }

      .profile-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .profile-pic-wrapper {
        text-align: center;
        margin-bottom: 2rem;
      }

      .profile-pic {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--border-color);
        box-shadow: var(--shadow-md);
        transition: var(--transition-normal);
      }

      .profile-pic:hover {
        border-color: var(--accent);
        transform: scale(1.05) rotate(3deg);
        box-shadow: 0 10px 25px rgba(129, 140, 248, 0.3);
      }

      .profile-text {
        font-size: 1.05rem;
        line-height: 1.7;
        color: var(--text-secondary);
      }

      .profile-text h3 {
        font-family: var(--font-heading);
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
        letter-spacing: -0.01em;
      }

      .profile-text p {
        margin-bottom: 1rem;
      }

      .profile-text ul {
        list-style: none;
        margin-top: 1.5rem;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .profile-text li {
        display: flex;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 0.5rem;
      }

      .profile-text li strong {
        width: 120px;
        color: var(--text-primary);
        font-family: var(--font-heading);
        font-weight: 600;
      }

      .profile-text li span {
        color: var(--text-secondary);
      }

      .profile-text li a {
        color: var(--accent);
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      .profile-text li a:hover {
        color: var(--text-primary);
        text-decoration: underline;
      }

      /* Skills Grid */
      .skills-container {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
      }

      .skill-card {
        padding: 1.75rem;
      }

      .skill-category-title {
        font-family: var(--font-heading);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border-bottom: 1px dashed var(--border-color);
        padding-bottom: 0.5rem;
      }

      .skill-category-title i {
        color: var(--accent);
      }

      .skill-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
      }

      .skill-badge {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-secondary);
        background: rgba(129, 140, 248, 0.04);
        border: 1px solid var(--border-color);
        padding: 0.4rem 0.9rem;
        border-radius: 8px;
        transition: var(--transition-fast);
      }

      .skill-badge:hover {
        background: var(--accent-gradient);
        border-color: transparent;
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(129, 140, 248, 0.25);
      }

      .buttons-section {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
      }

      @media (min-width: 992px) {
        .buttons-section {
          justify-content: flex-start;
        }
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    
    // Parse aboutMd and split it into Intro and Profile
    const splitKey = '### Profile';
    const index = aboutMd.indexOf(splitKey);
    
    if (index !== -1) {
      this.introHtml = marked.parse(aboutMd.substring(0, index)) as string;
      this.profileHtml = marked.parse(aboutMd.substring(index)) as string;
    } else {
      this.introHtml = marked.parse(aboutMd) as string;
      this.profileHtml = '';
    }
  }

  private getCategoryIcon(category: string): string {
    const cat = category.toLowerCase();
    if (cat.includes('cloud')) return 'fa-cloud';
    if (cat.includes('language') || cat.includes('programming')) return 'fa-code';
    if (cat.includes('cms')) return 'fa-laptop-code';
    if (cat.includes('system')) return 'fa-terminal';
    if (cat.includes('tool') || cat.includes('platform')) return 'fa-screwdriver-wrench';
    if (cat.includes('ai')) return 'fa-brain';
    return 'fa-gears';
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="about" class="section">
        <div class="container">
          <div class="section-intro">
            <span class="section-subtitle">About</span>
            <h2 class="section-title">Let me introduce myself.</h2>
            <div class="section-desc">
              ${unsafeHTML(this.introHtml)}
            </div>
          </div>

          <div class="about-grid">
            <!-- Profile Column -->
            <div class="profile-info">
              <div class="profile-pic-wrapper">
                <img class="profile-pic" src="${contactData.profilePic}" alt="James Au - Profile Picture" />
              </div>
              
              <div class="profile-text">
                ${unsafeHTML(this.profileHtml)}
                
                <ul>
                  <li>
                    <strong>Full Name:</strong>
                    <span>James Au</span>
                  </li>
                  <li>
                    <strong>Role:</strong>
                    <span>Senior Software Engineer</span>
                  </li>
                  <li>
                    <strong>Email:</strong>
                    <span><a href="mailto:${contactData.email}">${contactData.email}</a></span>
                  </li>
                </ul>
              </div>

              <div class="buttons-section">
                <a href="#contact" class="btn btn-stroke" @click=${(e: Event) => this.handleNavigate(e, 'contact')}>
                  <i class="fa-regular fa-envelope"></i> Contact Me
                </a>
                <a href="${contactData.cvWord}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="fa-regular fa-file-word"></i> Download Word CV
                </a>
                <a href="${contactData.cvPdf}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="fa-regular fa-file-pdf"></i> Download PDF CV
                </a>
              </div>
            </div>

            <!-- Skills Column -->
            <div class="skills-container">
              ${skillsData.map(
                (cat) => html`
                  <div class="glass-card skill-card">
                    <h4 class="skill-category-title">
                      <i class="fa-solid ${this.getCategoryIcon(cat.category)}"></i>
                      ${cat.category}
                    </h4>
                    <div class="skill-badges">
                      ${cat.skills.map(
                        (skill) => html`<span class="skill-badge">${skill}</span>`
                      )}
                    </div>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
