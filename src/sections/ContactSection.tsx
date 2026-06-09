import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonLink } from '../components/ui/ButtonLink';
import { contactLinks } from '../data/site';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: '', email: '', message: '' };

function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
      <article className="min-w-0 surface-panel rounded-[2rem] p-5 sm:p-6">
        <div className="space-y-5">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-100/75">
              Contact
            </span>
            <div className="space-y-3">
              <h3 className="max-w-[14ch] text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[2.3rem]">
                Have a project, startup idea, or collaboration in mind?
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                I&apos;m open to freelance projects, business inquiries, startup partnerships, and collaborations across
                websites, web applications, Android apps, UI/UX, branding, product design, and 3D visualization.
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="min-w-0 rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-sm transition hover:border-teal-300/25 hover:bg-teal-300/6"
              >
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <span className="pt-0.5 uppercase tracking-[0.2em] text-slate-400">{link.label}</span>
                  <span className="min-w-0 max-w-[26ch] break-words text-right text-slate-100">{link.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <ButtonLink href="mailto:tharaniesh46@gmail.com" variant="primary" className="w-full">
              Email Me Directly
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/tharaniesh-j-1331a9246/"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              Open LinkedIn
            </ButtonLink>
          </div>
        </div>
      </article>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="min-w-0 surface-panel rounded-[2rem] p-5 sm:p-6"
      >
        <div className="mb-5 space-y-2">
          <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
            Inquiry
          </span>
          <h3 className="pt-1 text-2xl font-semibold tracking-tight text-white">Send a project inquiry</h3>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Share the type of project, timeline, and what you want to build. The form validates locally and is ready
            for backend or email-service integration.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4">
            <label className="grid min-w-0 gap-2 text-sm">
              <span className="text-slate-200">Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-300/45 focus:bg-white/7"
              />
              {errors.name && <span className="text-xs text-rose-400">{errors.name}</span>}
            </label>

            <label className="grid min-w-0 gap-2 text-sm">
              <span className="text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-300/45 focus:bg-white/7"
              />
              {errors.email && <span className="text-xs text-rose-400">{errors.email}</span>}
            </label>
          </div>

          <label className="grid min-w-0 gap-2 text-sm">
            <span className="text-slate-200">Message</span>
            <textarea
              name="message"
              rows={4}
              value={values.message}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
              className="w-full resize-none rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-300/45 focus:bg-white/7"
            />
            {errors.message && <span className="text-xs text-rose-400">{errors.message}</span>}
          </label>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-teal-300/30 bg-teal-300/12 px-5 py-3 text-sm font-medium text-white transition hover:border-teal-200/60 hover:bg-teal-300/18"
            >
              Validate Inquiry
            </button>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Frontend validation ready</p>
          </div>

          {submitted && (
            <p className="rounded-[1.25rem] border border-emerald-300/15 bg-emerald-300/8 px-4 py-3 text-sm leading-7 text-emerald-200">
              Inquiry details look valid. This form is currently frontend-only and ready to connect to a backend
              handler or email workflow.
            </p>
          )}
        </div>
      </motion.form>
    </div>
  );
}

export default ContactSection;
