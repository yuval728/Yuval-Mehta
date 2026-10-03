import { CONFIG } from '@/data/config';

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-8">// about</p>

        <div className="space-y-6 font-sans leading-relaxed text-text-muted">
          {CONFIG.about.sections.map((section, index) => (
            <p key={index}>{section}</p>
          ))}
        </div>

        <p className="section-label mb-4 mt-12">// education</p>
        <div className="space-y-4">
          {CONFIG.education.map((edu) => (
            <div key={edu.degree} className="rounded-lg border border-border/50 bg-surface/30 p-5">
              <h3 className="font-sans font-medium text-text-primary">{edu.degree}</h3>
              <p className="mt-1 font-sans text-sm text-accent-blue">{edu.school}</p>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {edu.period} · {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
