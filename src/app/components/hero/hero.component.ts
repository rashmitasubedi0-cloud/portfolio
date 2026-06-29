import {
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PROFILE } from '../../shared/profile';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section id="hero" class="hero">
      <div class="container inner">
        <div class="copy">
          <p class="pill" appReveal>
            <span class="ping"></span> {{ profile.availability }}
          </p>

          <h1 appReveal [revealDelay]="80">
            Hi, I'm <span class="gradient-text">{{ profile.name }}</span>
          </h1>

          <h2 class="typed" appReveal [revealDelay]="160">
            <span class="prompt">&gt;</span>
            <span class="text">{{ typed() }}</span>
            <span class="caret">▍</span>
          </h2>

          <p class="lead" appReveal [revealDelay]="240">{{ profile.tagline }}</p>

          <div class="cta" appReveal [revealDelay]="320">
            <a class="btn btn-primary" href="#projects">View my work</a>
            <a class="btn btn-ghost" href="#contact">Get in touch</a>
          </div>

          <div class="stats" appReveal [revealDelay]="400">
            @for (s of profile.stats; track s.label) {
              <div class="stat glass">
                <div class="num gradient-text">{{ s.value }}</div>
                <div class="lbl">{{ s.label }}</div>
              </div>
            }
          </div>
        </div>

        <!-- ===== engineer workspace composite ===== -->
        <div class="workspace" appReveal [revealDelay]="200">
          <span class="halo"></span>

          <!-- monitors behind -->
          <div class="screen big">
            <div class="bar"><span></span><span></span><span></span><b>RashmitaSubedi.java</b></div>
            <pre class="code"><span class="ln">1</span><span class="kw">public class</span> <span class="ty">Engineer</span> {{ '{' }}
<span class="ln">2</span>  <span class="kw">private</span> String name = <span class="st">"Rashmita"</span>;
<span class="ln">3</span>  <span class="kw">private</span> String[] stack = {{ '{' }}<span class="st">"Java"</span>, <span class="st">"Spring"</span>{{ '}' }};
<span class="ln">4</span>
<span class="ln">5</span>  <span class="cm">// build. ship. repeat.</span>
<span class="ln">6</span>  <span class="kw">public void</span> <span class="fn">deploy</span>() {{ '{' }}
<span class="ln">7</span>    docker.build().push();
<span class="ln">8</span>    k8s.apply(<span class="st">"prod"</span>);
<span class="ln">9</span>  {{ '}' }}
<span class="ln">10</span>{{ '}' }}</pre>
          </div>

          <div class="screen small">
            <div class="term">
              <span class="t-line"><span class="t-pre">rashmita&#64;dev</span>:~$ mvn clean package</span>
              <span class="t-line ok">BUILD SUCCESS ✓</span>
              <span class="t-line"><span class="t-pre">rashmita&#64;dev</span>:~$ docker push bank:latest</span>
              <span class="t-line ok">deployed → k3s <span class="t-cursor">▍</span></span>
            </div>
          </div>

          <!-- the person, masked to fade sofa/legs into the desk -->
          <img class="person" [src]="profile.photo" [alt]="'Photo of ' + profile.name" loading="eager" />

          <!-- desk surface in front -->
          <div class="desk"></div>

          <!-- floating engineer badges -->
          <span class="chip c1 glass">☕ Java</span>
          <span class="chip c2 glass">🍃 Spring Boot</span>
          <span class="chip c3 glass">🐳 Docker</span>
          <span class="chip c4 glass">☸ k8s</span>

          <div class="tag glass"><span class="tag-dot"></span> {{ profile.location }}</div>
        </div>
      </div>

      <a class="scroll-hint" href="#about" aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  `,
  styles: [`
    .hero { min-height: 100vh; display: flex; align-items: center; padding-top: 96px; padding-bottom: 60px; }
    .inner { display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 56px; align-items: center; width: 100%; }
    .copy { display: flex; flex-direction: column; align-items: flex-start; }

    .pill { display: inline-flex; align-items: center; gap: 9px; font-family: var(--font-mono); font-size: .82rem; color: var(--neon-green); border: 1px solid rgba(54,241,163,.35); background: rgba(54,241,163,.08); padding: 7px 15px; border-radius: 999px; margin: 0 0 26px; }
    .ping { width: 8px; height: 8px; border-radius: 50%; background: var(--neon-green); box-shadow: 0 0 0 0 rgba(54,241,163,.6); animation: ping 1.8s ease-out infinite; }
    @keyframes ping { 0% { box-shadow: 0 0 0 0 rgba(54,241,163,.55);} 70%,100% { box-shadow: 0 0 0 9px rgba(54,241,163,0);} }

    h1 { font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 800; letter-spacing: -.03em; line-height: 1.05; margin: 0 0 14px; }
    .typed { font-family: var(--font-mono); font-weight: 500; font-size: clamp(1.05rem, 2.6vw, 1.7rem); color: var(--text); margin: 0 0 24px; min-height: 1.6em; display: flex; align-items: center; gap: 10px; }
    .prompt { color: var(--accent); }
    .caret { color: var(--accent); animation: blink 1s steps(1) infinite; }
    @keyframes blink { 50% { opacity: 0; } }

    .lead { color: var(--text-dim); font-size: 1.05rem; max-width: 520px; margin: 0 0 30px; }
    .cta { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 44px; }
    .stats { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; width: 100%; max-width: 520px; }
    .stat { padding: 18px 18px; }
    .num { font-size: 1.7rem; font-weight: 800; line-height: 1; }
    .lbl { color: var(--text-dim); font-size: .78rem; margin-top: 8px; }

    /* ================= workspace ================= */
    .workspace {
      position: relative; justify-self: center;
      width: min(100%, 430px); aspect-ratio: 1 / 1;
      border-radius: 24px;
      background:
        radial-gradient(120% 80% at 50% 18%, rgba(41,231,255,.16), transparent 60%),
        linear-gradient(180deg, rgba(15,21,40,.7), rgba(7,11,22,.9));
      border: 1px solid var(--border);
      box-shadow: 0 30px 80px rgba(0,0,0,.55), inset 0 0 60px rgba(41,231,255,.06);
      overflow: hidden;
    }
    .halo { position: absolute; inset: -20%; z-index: 0; background: radial-gradient(closest-side, rgba(139,92,255,.4), transparent 70%); filter: blur(40px); animation: pulse 7s ease-in-out infinite; }

    /* monitors */
    .screen { position: absolute; z-index: 1; border-radius: 12px; background: rgba(8,12,24,.92); border: 1px solid var(--border-strong); box-shadow: 0 14px 40px rgba(0,0,0,.5), 0 0 26px rgba(41,231,255,.18); overflow: hidden; }
    .screen.big { top: 7%; left: 5%; width: 64%; transform: rotate(-3deg); animation: floaty 8s ease-in-out infinite; }
    .screen.small { top: 40%; right: 4%; width: 42%; transform: rotate(4deg); animation: floaty 9s ease-in-out infinite reverse; }
    .bar { display: flex; align-items: center; gap: 5px; padding: 7px 10px; background: rgba(255,255,255,.05); border-bottom: 1px solid var(--border); }
    .bar span { width: 8px; height: 8px; border-radius: 50%; background: #ff5f57; }
    .bar span:nth-child(2) { background: #febc2e; }
    .bar span:nth-child(3) { background: #28c840; }
    .bar b { margin-left: 8px; font-family: var(--font-mono); font-weight: 500; font-size: .62rem; color: var(--text-dim); }
    .code { margin: 0; padding: 10px 12px; font-family: var(--font-mono); font-size: .6rem; line-height: 1.55; color: #cdd6f4; white-space: pre; }
    .code .ln { display: inline-block; width: 16px; color: #50607a; }
    .code .kw { color: #c792ea; } .code .ty { color: #82aaff; } .code .st { color: #c3e88d; } .code .cm { color: #5d6a86; font-style: italic; } .code .fn { color: #82aaff; }
    .term { padding: 12px; font-family: var(--font-mono); font-size: .58rem; line-height: 1.7; display: flex; flex-direction: column; }
    .t-pre { color: var(--neon-green); } .t-line { color: var(--text-dim); } .t-line.ok { color: var(--neon-cyan); }
    .t-cursor { animation: blink 1s steps(1) infinite; color: var(--neon-cyan); }

    /* person cutout — masked to fade sofa (right) and legs/seat (bottom) into the desk */
    .person {
      position: absolute; z-index: 2; bottom: 0; left: 50%; transform: translateX(-52%);
      height: 96%; width: auto; max-width: none; object-fit: contain;
      filter: drop-shadow(0 18px 30px rgba(0,0,0,.55)) contrast(1.05);
      -webkit-mask-image:
        linear-gradient(to bottom, #000 64%, transparent 92%),
        linear-gradient(to right, #000 74%, transparent 96%);
      -webkit-mask-composite: source-in;
      mask-image:
        linear-gradient(to bottom, #000 64%, transparent 92%),
        linear-gradient(to right, #000 74%, transparent 96%);
      mask-composite: intersect;
    }

    /* desk surface in front, hides lower body / sofa seat */
    .desk {
      position: absolute; z-index: 3; left: 0; right: 0; bottom: 0; height: 26%;
      background: linear-gradient(180deg, transparent, rgba(7,11,22,.6) 30%, rgba(7,11,22,.96) 100%);
      border-top: 1px solid rgba(41,231,255,.18);
      box-shadow: 0 -8px 30px rgba(41,231,255,.1);
    }

    /* floating badges */
    .chip { position: absolute; z-index: 4; font-family: var(--font-mono); font-size: .72rem; color: var(--text); padding: 6px 11px; border-radius: 11px; white-space: nowrap; animation: floaty 5s ease-in-out infinite; }
    .c1 { top: 5%; right: 6%; animation-delay: -.2s; }
    .c2 { top: 22%; left: 3%; animation-delay: -1.4s; }
    .c3 { bottom: 30%; left: 5%; animation-delay: -2.6s; }
    .c4 { bottom: 34%; right: 6%; animation-delay: -3.4s; }

    .tag { position: absolute; z-index: 5; left: 50%; bottom: 12px; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; font-family: var(--font-mono); font-size: .78rem; color: var(--text); padding: 8px 15px; border-radius: 999px; }
    .tag-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--grad); }

    @keyframes floaty { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)); } 50% { transform: translateY(-8px) rotate(var(--r,0deg)); } }
    .screen.big { --r: -3deg; } .screen.small { --r: 4deg; }
    @keyframes pulse { 0%,100% { opacity: .7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }

    .scroll-hint { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); width: 26px; height: 42px; border: 2px solid var(--border-strong); border-radius: 14px; display: flex; justify-content: center; padding-top: 8px; }
    .scroll-hint span { width: 4px; height: 8px; border-radius: 4px; background: var(--accent); animation: scroll 1.6s ease-in-out infinite; }
    @keyframes scroll { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(14px); opacity: 0; } }

    @media (max-width: 900px) {
      .inner { grid-template-columns: 1fr; gap: 52px; }
      .copy { order: 2; }
      .workspace { order: 1; width: min(86%, 380px); }
      .stats { max-width: none; }
    }
    @media (max-width: 560px) {
      .stats { grid-template-columns: 1fr; }
      .workspace { width: 100%; }
      .c2, .c3 { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      .screen, .halo, .chip { animation: none !important; }
    }
  `],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  typed = signal('');

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void { this.tick(); }
  ngOnDestroy(): void { if (this.timer) clearTimeout(this.timer); }

  private tick(): void {
    const roles = this.profile.roles;
    const current = roles[this.roleIndex];
    if (this.deleting) { this.charIndex--; } else { this.charIndex++; }
    this.typed.set(current.substring(0, this.charIndex));
    let delay = this.deleting ? 45 : 90;
    if (!this.deleting && this.charIndex === current.length) { delay = 1500; this.deleting = true; }
    else if (this.deleting && this.charIndex === 0) { this.deleting = false; this.roleIndex = (this.roleIndex + 1) % roles.length; delay = 350; }
    this.timer = setTimeout(() => this.tick(), delay);
  }
}
