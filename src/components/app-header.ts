import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import sharedStyles from '../styles/shared.css?raw';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) activeSection = 'intro';
  @state() private menuOpen = false;
  @state() private theme = localStorage.getItem('theme') || 'dark';

  static styles = [
    css`${unsafeCSS(sharedStyles)}`,
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        z-index: 1000;
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
      }

      .header {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        background: var(--bg-glass);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
      }

      .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      .logo a {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 800;
        text-decoration: none;
        color: var(--text-primary);
        letter-spacing: -0.03em;
        transition: color var(--transition-fast);
      }

      .logo a span {
        color: var(--accent);
      }

      .nav-menu {
        display: none;
        gap: 2.5rem;
        align-items: center;
      }

      .nav-link {
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-secondary);
        transition: color var(--transition-fast), transform var(--transition-fast);
        position: relative;
        padding: 0.5rem 0;
      }

      .nav-link:hover {
        color: var(--text-primary);
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-gradient);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
      }

      .nav-link:hover::after,
      .nav-link.active::after {
        transform: scaleX(1);
        transform-origin: left;
      }

      .nav-link.active {
        color: var(--accent);
        font-weight: 600;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .theme-toggle,
      .mobile-menu-btn {
        background: transparent;
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition-fast);
        outline: none;
      }

      .theme-toggle:hover,
      .mobile-menu-btn:hover {
        border-color: var(--accent);
        color: var(--accent);
        background: rgba(129, 140, 248, 0.08);
      }

      .mobile-menu-btn {
        display: inline-flex;
      }

      @media (min-width: 768px) {
        .nav-menu {
          display: flex;
        }

        .mobile-menu-btn {
          display: none;
        }
      }

      /* Mobile Navigation Menu */
      .mobile-nav {
        position: absolute;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        transform: translateY(-150%);
        opacity: 0;
        transition: transform var(--transition-normal), opacity var(--transition-normal);
        z-index: -1;
        box-shadow: var(--shadow-lg);
      }

      .mobile-nav.open {
        transform: translateY(0);
        opacity: 1;
      }

      .mobile-nav-link {
        font-family: var(--font-heading);
        font-size: 1.15rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--text-secondary);
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
        transition: color var(--transition-fast);
      }

      .mobile-nav-link:last-child {
        border-bottom: none;
      }

      .mobile-nav-link.active {
        color: var(--accent);
      }
    `
  ];

  firstUpdated() {
    this.applyTheme(this.theme);
  }

  private toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: string) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme } }));
  }

  private toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  private closeMenu() {
    this.menuOpen = false;
  }

  private handleNav(e: Event, targetId: string) {
    e.preventDefault();
    this.closeMenu();
    this.dispatchEvent(new CustomEvent('nav-navigate', {
      detail: { targetId },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <header class="header">
        <div class="container nav-container">
          <div class="logo">
            <a href="#top" @click=${(e: Event) => this.handleNav(e, 'intro')}>Jimz<span>.</span></a>
          </div>

          <nav class="nav-menu">
            <a href="#intro" class="nav-link ${this.activeSection === 'intro' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'intro')}>Intro</a>
            <a href="#about" class="nav-link ${this.activeSection === 'about' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'about')}>About</a>
            <a href="#resume" class="nav-link ${this.activeSection === 'resume' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'resume')}>Résumé</a>
            <a href="#contact" class="nav-link ${this.activeSection === 'contact' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'contact')}>Contact</a>
          </nav>

          <div class="actions">
            <button class="theme-toggle" @click=${this.toggleTheme} title="Toggle Dark/Light Mode">
              ${this.theme === 'dark'
                ? html`<i class="fa-solid fa-sun"></i>`
                : html`<i class="fa-solid fa-moon"></i>`}
            </button>
            <button class="mobile-menu-btn" @click=${this.toggleMenu} title="Toggle Menu">
              ${this.menuOpen
                ? html`<i class="fa-solid fa-xmark"></i>`
                : html`<i class="fa-solid fa-bars"></i>`}
            </button>
          </div>
        </div>

        <div class="mobile-nav ${this.menuOpen ? 'open' : ''}">
          <a href="#intro" class="mobile-nav-link ${this.activeSection === 'intro' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'intro')}>Intro</a>
          <a href="#about" class="mobile-nav-link ${this.activeSection === 'about' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'about')}>About</a>
          <a href="#resume" class="mobile-nav-link ${this.activeSection === 'resume' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'resume')}>Résumé</a>
          <a href="#contact" class="mobile-nav-link ${this.activeSection === 'contact' ? 'active' : ''}" @click=${(e: Event) => this.handleNav(e, 'contact')}>Contact</a>
        </div>
      </header>
    `;
  }
}
