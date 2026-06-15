import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import sharedStyles from '../styles/shared.css?raw';
import './app-header.ts';
import './intro-section.ts';
import './about-section.ts';
import './resume-timeline.ts';
import './stats-counter.ts';
import './contact-section.ts';

@customElement('resume-app')
export class ResumeApp extends LitElement {
  @state() private activeSection = 'intro';
  @state() private showGoTop = false;

  static styles = [
    css`${unsafeCSS(sharedStyles)}`,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--bg-primary);
        color: var(--text-primary);
        transition: background-color var(--transition-normal), color var(--transition-normal);
      }

      main {
        position: relative;
      }

      /* Footer styling */
      footer {
        padding: 4rem 0;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
        text-align: center;
        position: relative;
      }

      .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
      }

      .footer-content p {
        font-size: 0.9rem;
        color: var(--text-muted);
      }

      .footer-content a {
        color: var(--accent);
        text-decoration: none;
        transition: color var(--transition-fast);
      }

      .footer-content a:hover {
        color: var(--text-primary);
      }

      /* Go to top button */
      .go-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--accent-gradient);
        color: #ffffff;
        border: none;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all var(--transition-normal);
        box-shadow: 0 4px 15px rgba(129, 140, 248, 0.4);
        z-index: 99;
      }

      .go-top.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .go-top:hover {
        transform: translateY(-4px);
        background: var(--accent-gradient-hover);
        box-shadow: 0 6px 20px rgba(129, 140, 248, 0.6);
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleScroll);
  }

  firstUpdated() {
    this.setupScrollSpy();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = () => {
    this.showGoTop = window.scrollY > 300;
  };

  private scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private handleNavigation(e: CustomEvent) {
    const targetId = e.detail.targetId;
    const target = this.shadowRoot?.getElementById(targetId);
    if (target) {
      const headerHeight = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private setupScrollSpy() {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Active when element hits center screen
      threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    const sections = this.shadowRoot?.querySelectorAll('.spy-target');
    sections?.forEach((sec) => spyObserver.observe(sec));
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div id="top"></div>
      
      <!-- Sticky Navigation Header -->
      <app-header .activeSection=${this.activeSection} @nav-navigate=${this.handleNavigation}></app-header>

      <!-- Main Body sections -->
      <main>
        <div id="intro" class="spy-target">
          <intro-section @nav-navigate=${this.handleNavigation}></intro-section>
        </div>
        
        <div id="about" class="spy-target">
          <about-section></about-section>
        </div>
        
        <div id="resume" class="spy-target">
          <resume-timeline></resume-timeline>
        </div>
        
        <stats-counter></stats-counter>
        
        <div id="contact" class="spy-target">
          <contact-section></contact-section>
        </div>
      </main>

      <!-- Footer layout -->
      <footer>
        <div class="container footer-content">
          <p>Rewritten with Lit Stack & Vite &copy; 2026.</p>
          <p>Handcrafted by <a href="mailto:hello@jimz.au">Jimz Au</a>. Original design inspiration by <a href="http://www.styleshout.com/" target="_blank" rel="noopener">styleshout</a>.</p>
        </div>
        <button class="go-top ${this.showGoTop ? 'visible' : ''}" @click=${this.scrollToTop} title="Back to Top">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </footer>
    `;
  }
}
