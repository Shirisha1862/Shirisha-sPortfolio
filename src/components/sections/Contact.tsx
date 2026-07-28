import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactStore } from '../../lib/contact/store';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Real-time inline validation checks
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isNameValid = formData.name.trim().length >= 2;
  const isMessageValid = formData.message.trim().length >= 5;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isNameValid || !isEmailValid || !isMessageValid) return;

    setStatus('loading');
    try {
      await contactStore.save(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 bg-base relative overflow-hidden border-t border-border/40 pb-36">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-2 block">
            // INITIATE HANDSHAKE
          </span>
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-text tracking-tight mb-4">
            Let's build something <span className="text-accent text-glow">extraordinary.</span>
          </h2>
          <p className="text-text-2 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Whether you have a full-stack engineering role, an AI project to collaborate on, or just want to connect — transmit a message directly below.
          </p>
        </div>

        {/* Two-Pane Terminal Handshake (Section 4.5 Spec!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Right Pane: Code-Editor Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0D1117] border border-border/90 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Terminal Window Top Header Bar */}
            <div className="bg-surface-2 px-4 py-3 border-b border-border/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-muted">send_transmission.ts</span>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {/* Name Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                  <label htmlFor="name" className="text-text-2 font-medium">
                    const senderName =
                  </label>
                  {touched.name && (
                    <span className={isNameValid ? 'text-accent' : 'text-red-400'}>
                      {isNameValid ? '✓ Valid' : '✗ Required (min 2 chars)'}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={() => setTouched({ ...touched, name: true })}
                  placeholder='"e.g. Alex Mercer"'
                  className={`w-full bg-base/80 border rounded-xl px-4 py-3 text-sm text-text font-mono transition-colors focus:outline-none ${
                    touched.name && !isNameValid
                      ? 'border-red-500/80'
                      : touched.name && isNameValid
                      ? 'border-accent/60'
                      : 'border-border/80 focus:border-accent'
                  }`}
                />
              </div>

              {/* Email Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                  <label htmlFor="email" className="text-text-2 font-medium">
                    const senderEmail =
                  </label>
                  {touched.email && (
                    <span className={isEmailValid ? 'text-accent' : 'text-red-400'}>
                      {isEmailValid ? '✓ Valid Email' : '✗ Invalid Email Address'}
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  placeholder='"e.g. alex@company.com"'
                  className={`w-full bg-base/80 border rounded-xl px-4 py-3 text-sm text-text font-mono transition-colors focus:outline-none ${
                    touched.email && !isEmailValid
                      ? 'border-red-500/80'
                      : touched.email && isEmailValid
                      ? 'border-accent/60'
                      : 'border-border/80 focus:border-accent'
                  }`}
                />
              </div>

              {/* Message Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                  <label htmlFor="message" className="text-text-2 font-medium">
                    const messageBody =
                  </label>
                  {touched.message && (
                    <span className={isMessageValid ? 'text-accent' : 'text-red-400'}>
                      {isMessageValid ? '✓ Valid Message' : '✗ Message too short'}
                    </span>
                  )}
                </div>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onBlur={() => setTouched({ ...touched, message: true })}
                  placeholder={`"Share opportunity details or mission requirements..."`}
                  className={`w-full bg-base/80 border rounded-xl px-4 py-3 text-sm text-text font-mono transition-colors resize-none focus:outline-none ${
                    touched.message && !isMessageValid
                      ? 'border-red-500/80'
                      : touched.message && isMessageValid
                      ? 'border-accent/60'
                      : 'border-border/80 focus:border-accent'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm bg-accent text-base shadow-glow hover:shadow-glow-lg hover:bg-[#10B981] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : status === 'success' ? (
                  <span className="text-base font-bold">✓ TRANSMISSION SENT SUCCESSFULLY!</span>
                ) : (
                  <span>SEND TRANSMISSION 🚀</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
