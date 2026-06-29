import { Component, HostListener, signal } from '@angular/core';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="nav" [class.scrolled]="scrolled()">
      <div class="container bar">
        <a class="brand" href="#hero">
          <span class="dot"></span>
          <span class="gradient-text">{{ initials }}</span>
        </a>

        <nav class="links" [class.open]="open()">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" (click)="close()">{{ l.label }}</a>
          }
          <a class="btn btn-primary nav-cta" href="#contact" (click)="close()">Let's talk</a>
        </nav>

        <button class="burger" (click)="toggle()" aria-label="Toggle menu" [class.x]="open()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .nav {
      position: fixed; inset: 0 0 auto 0; z-index: 50;
      transition: background .3s ease, border-color .3s ease, backdrop-filter .3s ease;
      border-bottom: 1px solid transparent;
    }
    .nav.scrolled {
      background: rgba(7, 11, 22, 0.65);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
    }
    .bar { display: flex; align-items: center; justify-content: space-between; height: 72px; }
    .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.15rem; text-decoration: none; letter-spacing: .5px; }
    .dot { width: 11px; height: 11px; border-radius: 50%; background: var(--grad); box-shadow: var(--shadow-glow); }
    .links { display: flex; align-items: center; gap: 28px; }
    .links a { color: var(--text-dim); text-decoration: none; font-size: .95rem; font-weight: 500; transition: color .2s ease; }
    .links a:hover { color: var(--text); }
    .nav-cta { color: #061018 !important; padding: 9px 18px; }
    .burger { display: none; flex-direction: column; gap: 5px; background: none; border: 0; cursor: pointer; padding: 8px; }
    .burger span { width: 24px; height: 2px; background: var(--text); border-radius: 2px; transition: transform .3s ease, opacity .3s ease; }
    .burger.x span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .burger.x span:nth-child(2) { opacity: 0; }
    .burger.x span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 820px) {
      .burger { display: flex; }
      .links {
        position: fixed; inset: 72px 0 auto 0;
        flex-direction: column; gap: 18px; padding: 28px 24px 34px;
        background: rgba(9, 14, 30, 0.96);
        backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--border);
        transform: translateY(-130%); transition: transform .35s cubic-bezier(.2,.7,.2,1);
      }
      .links.open { transform: translateY(0); }
      .nav-cta { width: 100%; justify-content: center; }
    }
  `],
})
export class NavbarComponent {
  readonly initials = PROFILE.name
    .split(' ')
    .map((p) => p[0])
    .join('');

  readonly links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
  ];

  scrolled = signal(false);
  open = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggle(): void {
    this.open.update((v) => !v);
  }
  close(): void {
    this.open.set(false);
  }
}
