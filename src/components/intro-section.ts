import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import sharedStyles from '../styles/shared.css?raw';
import introMd from '../content/intro.md?raw';
import contactData from '../content/contact.json';

@customElement('intro-section')
export class IntroSection extends LitElement {
  @state() private parsedHtml = '';

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
      :host {
        display: block;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow: hidden;
        background:
          linear-gradient(rgba(10, 15, 28, 0.68), rgba(10, 15, 28, 0.72)),
          url('/images/intro-bg.jpg') no-repeat center center;
        background-size: cover;
      }

      .intro-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        padding-top: var(--header-height);
        position: relative;
        z-index: 10;
      }

      /* Glowing background blobs */
      .glow-blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.15;
        z-index: 1;
        pointer-events: none;
        animation: float 20s infinite alternate ease-in-out;
      }

      .glow-blob-1 {
        width: 400px;
        height: 400px;
        background: var(--accent);
        top: -10%;
        left: -10%;
      }

      .glow-blob-2 {
        width: 500px;
        height: 500px;
        background: var(--accent-teal);
        bottom: -10%;
        right: -10%;
        animation-delay: -5s;
      }

      @keyframes float {
        0% {
          transform: translate(0, 0) scale(1);
        }
        50% {
          transform: translate(50px, 30px) scale(1.1);
        }
        100% {
          transform: translate(-30px, -50px) scale(0.9);
        }
      }

      .intro-content {
        max-width: 800px;
        animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* Markdown text custom styling */
      .markdown-content h1 {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin: 1.5rem 0;
        letter-spacing: -0.03em;
        color: var(--text-primary);
      }

      @media (min-width: 768px) {
        .markdown-content h1 {
          font-size: 5.5rem;
        }
      }

      .markdown-content h1 strong,
      .markdown-content h1 em {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
      }

      .markdown-content h5 {
        font-family: var(--font-heading);
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: var(--accent);
        margin: 0;
      }

      /* Bullet points style as badges */
      .markdown-content ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0;
        padding: 0;
      }

      .markdown-content li {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        padding: 0.5rem 1.25rem;
        border-radius: 9999px;
        box-shadow: var(--shadow-sm);
        transition: var(--transition-fast);
      }

      .markdown-content li:hover {
        border-color: var(--accent);
        color: var(--text-primary);
        transform: translateY(-2px);
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
      }

      .social-link {
        font-size: 1.5rem;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition-normal);
        text-decoration: none;
      }

      .social-link:hover {
        color: #ffffff;
        border-color: var(--accent);
        background: var(--accent);
        transform: translateY(-4px) rotate(8deg);
        box-shadow: 0 10px 20px rgba(129, 140, 248, 0.4);
      }

      .actions {
        margin-top: 2rem;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    this.parsedHtml = marked.parse(introMd) as string;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div class="glow-blob glow-blob-1"></div>
      <div class="glow-blob glow-blob-2"></div>

      <div class="container intro-container">
        <div class="intro-content">
          <div class="markdown-content">
            ${unsafeHTML(this.parsedHtml)}
          </div>

          <div class="social-links">
            <a href="${contactData.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="${contactData.github}" target="_blank" rel="noopener" class="social-link" title="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>

          <div class="actions">
            <a href="#about" class="btn btn-primary" @click=${(e: Event) => this.handleNavigate(e, 'about')}>
              More About Me <i class="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
