import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="experience">
      <div class="container">
        <h2 class="section-title" appReveal>Where I've been working</h2>
        <p class="section-sub" appReveal [revealDelay]="120">
          Balancing a full-time engineering role with teaching — two sides of the same craft.
        </p>

        <div class="timeline">
          @for (job of profile.experience; track job.org) {
            <article class="item glass" [attr.data-accent]="job.accent" appReveal [revealDelay]="$index * 140">
              <span class="node"></span>
              <header>
                <h3>{{ job.role }}</h3>
                <span class="period">{{ job.period }}</span>
              </header>
              <p class="org">{{ job.org }}</p>
              <ul>
                @for (pt of job.points; track pt) { <li>{{ pt }}</li> }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline { position: relative; display: flex; flex-direction: column; gap: 26px; padding-left: 26px; }
    .timeline::before {
      content: ""; position: absolute; left: 5px; top: 6px; bottom: 6px; width: 2px;
      background: linear-gradient(var(--neon-cyan), var(--neon-violet), transparent);
    }
    .item { position: relative; padding: 26px 28px; }
    .node {
      position: absolute; left: -25px; top: 30px; width: 13px; height: 13px; border-radius: 50%;
      background: var(--bg); border: 2px solid var(--neon-cyan); box-shadow: 0 0 14px rgba(41,231,255,.7);
    }
    .item[data-accent="violet"] .node { border-color: var(--neon-violet); box-shadow: 0 0 14px rgba(139,92,255,.7); }
    header { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; flex-wrap: wrap; }
    h3 { margin: 0; font-size: 1.2rem; }
    .period { font-family: var(--font-mono); font-size: .8rem; color: var(--text-dim); white-space: nowrap; }
    .org { color: var(--accent); font-weight: 600; margin: 4px 0 14px; }
    .item[data-accent="violet"] .org { color: var(--neon-violet); }
    ul { margin: 0; padding-left: 18px; color: var(--text-dim); }
    li { margin-bottom: 7px; }
  `],
})
export class ExperienceComponent {
  readonly profile = PROFILE;
}
