import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="education">
      <div class="container">
        <h2 class="section-title" appReveal>Academic background</h2>

        <div class="list">
          @for (e of profile.education; track e.degree) {
            <article class="card glass" appReveal [revealDelay]="$index * 120">
              <div class="cap">🎓</div>
              <div>
                <h3>{{ e.degree }}</h3>
                <p class="org">{{ e.org }} · <span class="period">{{ e.period }}</span></p>
                <p class="note">{{ e.note }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .list { display: flex; flex-direction: column; gap: 18px; }
    .card { display: flex; gap: 22px; padding: 26px 28px; align-items: flex-start; }
    .cap {
      font-size: 1.5rem; width: 56px; height: 56px; flex: none; display: grid; place-items: center;
      border-radius: 14px; background: var(--grad-soft); border: 1px solid var(--border-strong);
    }
    h3 { margin: 0 0 6px; font-size: 1.18rem; }
    .org { color: var(--accent); font-weight: 600; margin: 0 0 8px; }
    .period { font-family: var(--font-mono); font-size: .8rem; color: var(--text-dim); font-weight: 400; }
    .note { color: var(--text-dim); margin: 0; }
  `],
})
export class EducationComponent {
  readonly profile = PROFILE;
}
