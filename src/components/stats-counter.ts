import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import sharedStyles from '../styles/shared.css?raw';
import statsData from '../content/stats.json';

interface StatItem {
  id: string;
  icon: string;
  count: number;
  suffix: string;
  title: string;
}

@customElement('stats-counter')
export class StatsCounter extends LitElement {
  @state() private stats: StatItem[] = statsData;
  @state() private displayCounts: number[] = statsData.map(() => 0);
  private animated = false;
  private observer!: IntersectionObserver;

  static styles = [
    css`${unsafeCSS(sharedStyles)}`,
    css`
      :host {
        display: block;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        transition: background-color var(--transition-normal), border-color var(--transition-normal);
      }

      .stats-section {
        padding: 5rem 0;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      @media (min-width: 576px) {
        .stats-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 992px) {
        .stats-grid {
          grid-template-columns: repeat(6, 1fr);
        }
      }

      .stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1.5rem 1rem;
        background: transparent;
        border: none;
      }

      .stat-icon {
        font-size: 2.25rem;
        color: var(--accent);
        margin-bottom: 1rem;
        background: rgba(129, 140, 248, 0.05);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        transition: var(--transition-normal);
      }

      .stat-card:hover .stat-icon {
        background: var(--accent-gradient);
        color: #ffffff;
        transform: scale(1.1) rotate(5deg);
        border-color: transparent;
        box-shadow: 0 8px 20px rgba(129, 140, 248, 0.3);
      }

      .stat-number {
        font-family: var(--font-heading);
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--text-primary);
        line-height: 1.2;
        margin-bottom: 0.5rem;
        letter-spacing: -0.02em;
      }

      .stat-title {
        font-family: var(--font-sans);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    `
  ];

  firstUpdated() {
    this.setupIntersectionObserver();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          this.startCounterAnimation();
          this.observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.renderRoot.querySelector('.stats-grid')!);
  }

  private startCounterAnimation() {
    if (this.animated) return;
    this.animated = true;

    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      this.displayCounts = this.stats.map((stat) => {
        return Math.floor(stat.count * easeProgress);
      });

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        this.displayCounts = this.stats.map((stat) => stat.count);
      }
    }, frameRate);
  }

  private getIconClass(icon: string): string {
    switch (icon) {
      case 'pencil-ruler': return 'fa-solid fa-pen-ruler';
      case 'users': return 'fa-solid fa-users';
      case 'badge': return 'fa-solid fa-award';
      case 'light-bulb': return 'fa-regular fa-lightbulb';
      case 'cup': return 'fa-solid fa-mug-hot';
      case 'clock': return 'fa-regular fa-clock';
      default: return 'fa-solid fa-chart-simple';
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div class="stats-section">
        <div class="container">
          <div class="stats-grid">
            ${this.stats.map(
              (stat, index) => html`
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="${this.getIconClass(stat.icon)}"></i>
                  </div>
                  <div class="stat-number">
                    ${this.displayCounts[index]}${stat.suffix}
                  </div>
                  <div class="stat-title">
                    ${stat.title}
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `;
  }
}
