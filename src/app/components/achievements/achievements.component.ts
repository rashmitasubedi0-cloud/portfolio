import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="achievements">
      <div class="container">
        <h2 class="section-title" appReveal>Milestones &amp; highlights</h2>
        <p class="section-sub" appReveal [revealDelay]="120">
          A few moments I'm proud of along the way.
        </p>

        <div class="grid">
          @for (a of profile.achievements; track a.title) {
            <article class="card glass" appReveal [revealDelay]="$index * 90">
              <div class="cap">{{ a.icon }}</div>
              <div>
                <div class="head">
                  <h3>{{ a.title }}</h3>
                  <span class="year">{{ a.year }}</span>
                </div>
                <p class="detail">{{ a.detail }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
    .card { display: flex; gap: 20px; padding: 24px 26px; align-items: flex-start; }
    .cap {
      font-size: 1.4rem; width: 52px; height: 52px; flex: none; display: grid; place-items: center;
      border-radius: 14px; background: var(--grad-soft); border: 1px solid var(--border-strong);
    }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; margin-bottom: 8px; }
    h3 { margin: 0; font-size: 1.1rem; }
    .year { font-family: var(--font-mono); font-size: .76rem; color: var(--text-dim); flex: none; }
    .detail { color: var(--text-dim); margin: 0; line-height: 1.55; }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
  `],
})
export class AchievementsComponent {
  readonly profile = PROFILE;
}
