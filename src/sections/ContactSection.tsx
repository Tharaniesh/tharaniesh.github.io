import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

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

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
      <article className="rounded-2xl border border-cyber-edge bg-cyber-panel/45 p-6 shadow-card backdrop-blur-2xl">
        <h3 className="mb-4 text-lg font-semibold text-cyber-neon">Connect</h3>
        <div className="space-y-3 text-sm">
          <p>
            Email:{' '}
            <a className="text-cyber-neon hover:underline" href="mailto:tharaniesh46@gmail.com">
              tharaniesh46@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a className="text-cyber-neon hover:underline" href="https://www.linkedin.com/in/tharaniesh-j-1331a9246/" target="_blank" rel="noreferrer">
              linkedin.com/in/tharaniesh-j-1331a9246/
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a className="text-cyber-neon hover:underline" href="https://github.com/Tharaniesh" target="_blank" rel="noreferrer">
              github.com/Tharaniesh
            </a>
          </p>
        </div>
      </article>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl border border-cyber-edge bg-cyber-panel/45 p-6 shadow-card backdrop-blur-2xl"
      >
        <h3 className="mb-5 text-lg font-semibold text-cyber-neon">Secure Message Channel</h3>

        <div className="grid gap-4">
          <label className="grid gap-2 text-sm">
            Name
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
              className="rounded-lg border border-cyber-neon/30 bg-black/20 px-3 py-2 outline-none transition focus:border-cyber-neon"
            />
            {errors.name && <span className="text-xs text-rose-400">{errors.name}</span>}
          </label>

          <label className="grid gap-2 text-sm">
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
              className="rounded-lg border border-cyber-neon/30 bg-black/20 px-3 py-2 outline-none transition focus:border-cyber-neon"
            />
            {errors.email && <span className="text-xs text-rose-400">{errors.email}</span>}
          </label>

          <label className="grid gap-2 text-sm">
            Message
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
              className="resize-none rounded-lg border border-cyber-neon/30 bg-black/20 px-3 py-2 outline-none transition focus:border-cyber-neon"
            />
            {errors.message && <span className="text-xs text-rose-400">{errors.message}</span>}
          </label>

          <button
            type="submit"
            className="mt-2 rounded-lg border border-cyber-neon/60 bg-cyber-neon/10 px-5 py-2.5 text-sm font-medium text-cyber-neon transition hover:shadow-neon"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-xs text-emerald-300">
              Message validated on frontend. Endpoint integration can be connected to your backend handler.
            </p>
          )}
        </div>
      </motion.form>
    </div>
  );
}

export default ContactSection;
