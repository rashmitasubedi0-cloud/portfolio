import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="about">
      <div class="container grid">
        <div class="left" appReveal>
          <h2 class="section-title">Engineer by day,<br /><span class="gradient-text">mentor by passion.</span></h2>
          <div class="avatar glass">
            <span class="mono">{{ '{' }} dev: "{{ profile.name }}" {{ '}' }}</span>
            <div class="loc">📍 {{ profile.location }}</div>
          </div>
        </div>

        <div class="right">
          @for (p of profile.about; track $index) {
            <p class="para" appReveal [revealDelay]="$index * 120">{{ p }}</p>
          }
          <div class="chips" appReveal [revealDelay]="360">
            @for (c of focus; track c) {
              <span class="chip">{{ c }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 56px; align-items: start; }
    .avatar { margin-top: 26px; padding: 28px; display: flex; flex-direction: column; gap: 14px; }
    .mono { font-family: var(--font-mono); color: var(--accent); font-size: 1rem; }
    .loc { color: var(--text-dim); font-size: .92rem; }
    .para { color: var(--text-dim); font-size: 1.05rem; margin: 0 0 18px; }
    .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
    .chip {
      font-family: var(--font-mono); font-size: .82rem; color: var(--text);
      border: 1px solid var(--border-strong); background: var(--surface);
      padding: 7px 14px; border-radius: 999px;
    }
    @media (max-width: 820px) { .grid { grid-template-columns: 1fr; gap: 32px; } }
  `],
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly focus = ['Problem solving', 'Clean code', 'Teaching', 'Backend systems', 'Continuous learning'];
}
