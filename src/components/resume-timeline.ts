import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import sharedStyles from '../styles/shared.css?raw';
import resumeMd from '../content/resume.md?raw';

interface TimelineItem {
  title: string;
  subtitleHtml: string;
  contentHtml: string;
}

interface ResumeSection {
  title: string;
  preambleHtml: string;
  items: TimelineItem[];
}

@customElement('resume-timeline')
export class ResumeTimeline extends LitElement {
  @state() private sections: ResumeSection[] = [];
  @state() private activeTab = 0;

  static styles = [
    css`${unsafeCSS(sharedStyles)}`,
    css`
      .resume-container {
        position: relative;
      }

      /* Tabs Navigation */
      .tabs-nav {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 3.5rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1px;
        flex-wrap: wrap;
      }

      .tab-btn {
        background: transparent;
        border: none;
        outline: none;
        font-family: var(--font-heading);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-secondary);
        padding: 1rem 1.5rem;
        cursor: pointer;
        transition: var(--transition-fast);
        position: relative;
        border-radius: 8px 8px 0 0;
      }

      @media (min-width: 768px) {
        .tab-btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
        }
      }

      .tab-btn:hover {
        color: var(--text-primary);
        background: rgba(129, 140, 248, 0.04);
      }

      .tab-btn.active {
        color: var(--accent);
      }

      .tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-gradient);
      }

      /* Timeline Layout */
      .timeline-section {
        display: none;
        animation: fadeIn 0.5s ease forwards;
      }

      .timeline-section.active {
        display: block;
      }

      .section-preamble {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 3rem auto;
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-secondary);
      }

      .timeline-track-container {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem 0;
      }

      /* The vertical line */
      .timeline-track-container::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 20px;
        width: 2px;
        background: var(--border-color);
      }

      @media (min-width: 768px) {
        .timeline-track-container::before {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .timeline-block {
        position: relative;
        margin-bottom: 3rem;
      }

      .timeline-block:last-child {
        margin-bottom: 0;
      }

      /* Timeline Icons */
      .timeline-ico {
        position: absolute;
        top: 0;
        left: 20px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--bg-secondary);
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        transform: translateX(-50%);
        color: var(--accent);
        box-shadow: var(--shadow-sm);
        transition: var(--transition-normal);
      }

      .timeline-block:hover .timeline-ico {
        border-color: var(--accent);
        background: var(--accent);
        color: #ffffff;
        box-shadow: 0 0 15px rgba(129, 140, 248, 0.4);
      }

      @media (min-width: 768px) {
        .timeline-ico {
          left: 50%;
          width: 48px;
          height: 48px;
        }
      }

      /* Timeline Card */
      .timeline-card {
        margin-left: 50px;
        padding: 2rem;
      }

      @media (min-width: 768px) {
        .timeline-card {
          margin-left: 0;
          width: 45%;
        }

        .timeline-block:nth-child(even) .timeline-card {
          margin-left: 55%;
        }

        .timeline-block:nth-child(odd) .timeline-card {
          text-align: right;
        }
      }

      .card-header h3 {
        font-family: var(--font-heading);
        font-size: 1.35rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .card-header .subtitle {
        font-size: 0.95rem;
        color: var(--accent-teal);
        margin-bottom: 1.25rem;
        font-weight: 500;
      }

      .card-header .subtitle strong {
        color: var(--text-primary);
      }

      .card-header .subtitle em {
        background: rgba(20, 184, 166, 0.1);
        color: var(--accent-teal);
        padding: 0.2rem 0.6rem;
        border-radius: 6px;
        font-style: normal;
        font-size: 0.85rem;
        display: inline-block;
        margin-top: 0.25rem;
      }

      /* Card Content markdown styles */
      .card-content {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-secondary);
        text-align: left;
      }

      .card-content p {
        margin-bottom: 1rem;
      }

      .card-content ul {
        padding-left: 1.25rem;
        margin-bottom: 1rem;
      }

      .card-content li {
        margin-bottom: 0.5rem;
      }

      .card-content li strong {
        color: var(--text-primary);
      }

      .card-content h3, .card-content h4, .card-content h5 {
        font-family: var(--font-heading);
        font-weight: 600;
        color: var(--text-primary);
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        font-size: 1.05rem;
      }

      .card-content a {
        color: var(--accent);
        text-decoration: none;
      }

      .card-content a:hover {
        text-decoration: underline;
      }

      .card-content iframe {
        border-radius: 12px;
        margin-top: 1rem;
        border: 1px solid var(--border-color);
        max-width: 100%;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(15px);
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
    this.parseResumeData();
  }

  private parseResumeData() {
    // Split resumeMd into main sections starting with "# "
    const rawSections = resumeMd.split(/^# /gm);
    const parsed: ResumeSection[] = [];

    for (const rawSec of rawSections) {
      if (!rawSec.trim()) continue;

      const lines = rawSec.split('\n');
      const sectionTitle = lines[0].trim();
      const restContent = lines.slice(1).join('\n');

      // Split the rest by "## " to get items
      const rawBlocks = restContent.split(/^## /gm);
      const preambleHtml = marked.parse(rawBlocks[0].trim()) as string;

      const items: TimelineItem[] = [];
      for (let i = 1; i < rawBlocks.length; i++) {
        const blockLines = rawBlocks[i].split('\n');
        const title = blockLines[0].trim();

        // Subtitle line (usually company/dates)
        let subtitleIdx = 1;
        while (subtitleIdx < blockLines.length && !blockLines[subtitleIdx].trim()) {
          subtitleIdx++;
        }

        let subtitleHtml = '';
        let contentStartIdx = subtitleIdx + 1;

        if (subtitleIdx < blockLines.length) {
          subtitleHtml = marked.parse(blockLines[subtitleIdx].trim()) as string;
        }

        const blockContent = blockLines.slice(contentStartIdx).join('\n').trim();
        const contentHtml = marked.parse(blockContent) as string;

        items.push({
          title,
          subtitleHtml,
          contentHtml
        });
      }

      parsed.push({
        title: sectionTitle,
        preambleHtml,
        items
      });
    }

    this.sections = parsed;
  }

  private getSectionIcon(sectionTitle: string): string {
    const title = sectionTitle.toLowerCase();
    if (title.includes('work') || title.includes('experience')) return 'fa-briefcase';
    if (title.includes('education')) return 'fa-graduation-cap';
    return 'fa-certificate';
  }

  render() {
    if (this.sections.length === 0) return html``;

    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <section id="resume" class="section">
        <div class="container resume-container">
          <div class="section-intro">
            <span class="section-subtitle">Résumé</span>
            <h2 class="section-title">Experience & Education</h2>
          </div>

          <!-- Tabs Navigation -->
          <div class="tabs-nav">
            ${this.sections.map(
              (sec, index) => html`
                <button
                  class="tab-btn ${this.activeTab === index ? 'active' : ''}"
                  @click=${() => (this.activeTab = index)}
                >
                  ${sec.title}
                </button>
              `
            )}
          </div>

          <!-- Timeline Sections -->
          ${this.sections.map(
            (sec, secIndex) => html`
              <div class="timeline-section ${this.activeTab === secIndex ? 'active' : ''}">
                ${sec.preambleHtml ? html`<div class="section-preamble">${unsafeHTML(sec.preambleHtml)}</div>` : ''}

                <div class="timeline-track-container">
                  ${sec.items.map(
                    (item) => html`
                      <div class="timeline-block">
                        <div class="timeline-ico">
                          <i class="fa-solid ${this.getSectionIcon(sec.title)}"></i>
                        </div>
                        <div class="glass-card timeline-card">
                          <div class="card-header">
                            <h3>${item.title}</h3>
                            <div class="subtitle">${unsafeHTML(item.subtitleHtml)}</div>
                          </div>
                          <div class="card-content">
                            ${unsafeHTML(item.contentHtml)}
                          </div>
                        </div>
                      </div>
                    `
                  )}
                </div>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}
