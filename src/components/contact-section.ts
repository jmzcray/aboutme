import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import sharedStyles from '../styles/shared.css?raw';
import contactData from '../content/contact.json';

@customElement('contact-section')
export class ContactSection extends LitElement {
  @state() private emailCopied = false;

  static styles = [
    css`${unsafeCSS(sharedStyles)}`,
    css`
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        max-width: 900px;
        margin: 3rem auto 0 auto;
        align-items: stretch;
      }

      @media (max-width: 767px) {
        .contact-grid {
          gap: 1rem;
          margin-top: 2rem;
        }
      }

      @media (min-width: 768px) {
        .contact-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .contact-card {
        padding: 2.5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 100%;
        position: relative;
        overflow: hidden;
      }

      @media (max-width: 767px) {
        .contact-card {
          padding: 1.75rem 1.25rem;
          border-radius: 18px;
        }
      }

      .contact-icon {
        font-size: 2rem;
        color: var(--accent);
        background: rgba(129, 140, 248, 0.05);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        margin-bottom: 1.5rem;
        transition: var(--transition-normal);
      }

      .contact-card:hover .contact-icon {
        background: var(--accent-gradient);
        color: #ffffff;
        transform: translateY(-4px) scale(1.05);
        border-color: transparent;
        box-shadow: 0 8px 20px rgba(129, 140, 248, 0.3);
      }

      .contact-title {
        font-family: var(--font-heading);
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .contact-value {
        font-size: 0.95rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        overflow-wrap: anywhere;
        word-break: break-word;
        line-height: 1.6;
      }

      .contact-btn {
        margin-top: auto;
        width: 100%;
        font-size: 0.85rem;
        padding: 0.6rem 1.2rem;
        min-height: 48px;
      }

      @media (max-width: 767px) {
        .contact-btn {
          font-size: 0.9rem;
        }
      }

      /* Glowing background border effect */
      .contact-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: var(--accent-gradient);
        opacity: 0;
        transition: var(--transition-normal);
      }

      .contact-card:hover::before {
        opacity: 1;
      }
    `
  ];

  private async copyEmail() {
    try {
      await navigator.clipboard.writeText(contactData.email);
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="contact" class="section">
        <div class="container">
          <div class="section-intro">
            <span class="section-subtitle">Contact</span>
            <h2 class="section-title">Let's Connect</h2>
            <div class="section-desc">
              Like what you see or just want to get in touch? Reach out directly via the channels below. I'd love to hear from you.
            </div>
          </div>

          <div class="contact-grid">
            <!-- Email Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <h4 class="contact-title">Email</h4>
              <p class="contact-value">${contactData.email}</p>
              <button class="btn btn-primary contact-btn" @click=${this.copyEmail}>
                ${this.emailCopied
                  ? html`<i class="fa-solid fa-check"></i> Copied!`
                  : html`<i class="fa-regular fa-copy"></i> Copy Email`}
              </button>
            </div>

            <!-- LinkedIn Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <h4 class="contact-title">LinkedIn</h4>
              <p class="contact-value">linkedin.com/in/jimzau</p>
              <a href="${contactData.linkedin}" target="_blank" rel="noopener" class="btn btn-stroke contact-btn">
                Visit Profile <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>

            <!-- GitHub Card -->
            <div class="glass-card contact-card">
              <div class="contact-icon">
                <i class="fa-brands fa-github"></i>
              </div>
              <h4 class="contact-title">GitHub</h4>
              <p class="contact-value">github.com/jmzcray</p>
              <a href="${contactData.github}" target="_blank" rel="noopener" class="btn btn-stroke contact-btn">
                View Work <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
