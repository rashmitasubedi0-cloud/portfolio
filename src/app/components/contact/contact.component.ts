import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  template: `
    <section id="contact">
      <div class="container">
        <div class="card glass" appReveal>
          <h2 class="section-title">Let's build something <span class="gradient-text">together</span></h2>
          <p class="section-sub">
            Hiring, collaborating, or just want to talk Java? Drop me a message — I'll get back to you.
          </p>

          <form (ngSubmit)="send()">
            <div class="fields">
              <input class="in" name="name" [(ngModel)]="name" placeholder="Your name" required />
              <input class="in" name="from" type="email" [(ngModel)]="from" placeholder="Your email" required />
            </div>
            <textarea class="in" name="message" [(ngModel)]="message" rows="4" placeholder="Your message" required></textarea>
            <div class="actions">
              <button class="btn btn-primary" type="submit">Send message ✉</button>
              <a class="btn btn-ghost" [href]="'mailto:' + profile.email">{{ profile.email }}</a>
            </div>
            @if (sent()) { <p class="ok">Opening your email client… thank you! 🎉</p> }
          </form>

          <div class="socials">
            @for (s of profile.socials; track s.label) {
              <a class="social" [href]="s.url" target="_blank" rel="noopener">{{ s.label }}</a>
            }
          </div>
        </div>
      </div>

      <footer class="foot">
        <div class="container">
          <span>© {{ year }} {{ profile.name }}</span>
          <span class="mono">Built with Angular · {{ profile.location }}</span>
        </div>
      </footer>
    </section>
  `,
  styles: [`
    .card { padding: 48px; text-align: center; }
    .section-sub { margin-inline: auto; }
    form { max-width: 620px; margin: 0 auto; }
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
    .in {
      width: 100%; padding: 14px 16px; border-radius: 12px; color: var(--text);
      background: rgba(255,255,255,.04); border: 1px solid var(--border);
      font-family: var(--font-sans); font-size: .96rem; outline: none;
      transition: border-color .2s ease, box-shadow .2s ease;
    }
    .in::placeholder { color: var(--text-faint); }
    .in:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(41,231,255,.15); }
    textarea.in { resize: vertical; margin-bottom: 18px; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
    .ok { color: var(--neon-green); margin-top: 16px; font-size: .95rem; }
    .socials { display: flex; gap: 14px; justify-content: center; margin-top: 30px; }
    .social { color: var(--text-dim); text-decoration: none; font-family: var(--font-mono); font-size: .88rem; transition: color .2s ease; }
    .social:hover { color: var(--accent); }
    .foot {
      margin-top: 70px; border-top: 1px solid var(--border); padding-top: 26px;
    }
    .foot .container { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; color: var(--text-faint); font-size: .85rem; }
    .foot .mono { font-family: var(--font-mono); }
    @media (max-width: 560px) { .card { padding: 32px 22px; } .fields { grid-template-columns: 1fr; } }
  `],
})
export class ContactComponent {
  readonly profile = PROFILE;
  readonly year = 2026;

  name = '';
  from = '';
  message = '';
  sent = signal(false);

  send(): void {
    const subject = encodeURIComponent(`Portfolio contact from ${this.name || 'someone'}`);
    const body = encodeURIComponent(`${this.message}\n\n— ${this.name} (${this.from})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
