import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="projects">
      <div class="container">
        <h2 class="section-title" appReveal>Things I've built</h2>
        <p class="section-sub" appReveal [revealDelay]="120">
          A few projects that show how I think and ship. Swap these for your favourites anytime.
        </p>

        <div class="grid">
          @for (p of profile.projects; track p.title) {
            <a class="card glass" [href]="p.link" target="_blank" rel="noopener" appReveal [revealDelay]="$index * 110">
              <div class="glow"></div>
              <div class="top">
                <span class="folder">&lt;/&gt;</span>
                <span class="arrow">↗</span>
              </div>
              <h3>{{ p.title }}</h3>
              <p class="blurb">{{ p.blurb }}</p>
              <div class="tags">
                @for (t of p.tags; track t) { <span class="tag">{{ t }}</span> }
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; }
    .card {
      position: relative; overflow: hidden; padding: 26px; text-decoration: none; color: inherit;
      display: flex; flex-direction: column; min-height: 250px;
      transition: transform .3s ease, border-color .3s ease;
    }
    .card:hover { transform: translateY(-6px); border-color: var(--border-strong); }
    .glow {
      position: absolute; inset: -40% 50% 60% -40%; background: var(--grad-soft);
      filter: blur(50px); opacity: 0; transition: opacity .35s ease; pointer-events: none;
    }
    .card:hover .glow { opacity: 1; }
    .top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
    .folder { font-family: var(--font-mono); font-size: 1.4rem; color: var(--accent); }
    .arrow { color: var(--text-dim); font-size: 1.2rem; transition: transform .3s ease, color .3s ease; }
    .card:hover .arrow { transform: translate(3px, -3px); color: var(--text); }
    h3 { margin: 0 0 10px; font-size: 1.22rem; position: relative; }
    .blurb { color: var(--text-dim); font-size: .95rem; margin: 0 0 18px; flex: 1; position: relative; }
    .tags { display: flex; flex-wrap: wrap; gap: 8px; position: relative; }
    .tag {
      font-family: var(--font-mono); font-size: .72rem; color: var(--text);
      border: 1px solid var(--border); padding: 5px 11px; border-radius: 999px; background: var(--surface);
    }
    @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
  `],
})
export class ProjectsComponent {
  readonly profile = PROFILE;
}
