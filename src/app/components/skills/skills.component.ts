import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="skills">
      <div class="container">
        <p class="section-tag" appReveal>// skills</p>
        <h2 class="section-title" appReveal [revealDelay]="60">My technical toolkit</h2>
        <p class="section-sub" appReveal [revealDelay]="120">
          The languages, frameworks and tools I reach for every day.
        </p>

        <div class="grid">
          @for (s of profile.skills; track s.name) {
            <div class="row glass" appReveal [revealDelay]="$index * 70">
              <div class="head">
                <span class="name">{{ s.name }}</span>
                <span class="group">{{ s.group }}</span>
              </div>
              <div class="track">
                <span class="fill" [style.--lvl]="s.level + '%'"></span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
    .row { padding: 18px 22px; }
    .head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; }
    .name { font-weight: 600; }
    .group { font-family: var(--font-mono); font-size: .74rem; color: var(--text-dim); }
    .track { height: 8px; border-radius: 999px; background: rgba(255,255,255,.07); overflow: hidden; }
    .fill {
      display: block; height: 100%; width: 0; border-radius: 999px;
      background: var(--grad); box-shadow: 0 0 12px rgba(41,231,255,.5);
      transition: width 1.1s cubic-bezier(.2,.7,.2,1);
    }
    .row.is-visible .fill { width: var(--lvl); }
    @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
  `],
})
export class SkillsComponent {
  readonly profile = PROFILE;
}
