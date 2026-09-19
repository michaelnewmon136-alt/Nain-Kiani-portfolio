import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Biotechnology Research / Internship Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect for Research, Design & Internships
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Interested in discussing research internships, collaborative branding projects, motion graphics, or academic inquiries? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone / WhatsApp Card */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Call / WhatsApp</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-teal-400 group-hover:bg-teal-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Direct Email</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={`https://${PERSONAL_INFO.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Professional LinkedIn</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {PERSONAL_INFO.linkedin}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* Location & Academic Base */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-800 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Location Base</div>
                <div className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-xs text-slate-400">
                  International Islamic University (IIUI)
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Typical response turnaround within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Your inquiry regarding "{formData.subject}" has been queued. Nain Fatima will review and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Biotechnology Research / Internship Inquiry', message: '' });
                  }}
                  className="px-5 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Salman / Sarah Ahmed"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Project Category
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="Biotechnology Research / Internship Inquiry">
                      Biotechnology Research / Internship Inquiry
                    </option>
                    <option value="Brand Identity & Graphic Design Project">
                      Brand Identity & Graphic Design Project
                    </option>
                    <option value="Motion Graphics & Video Editing">
                      Motion Graphics & Video Editing
                    </option>
                    <option value="Scientific Communication & Content Writing">
                      Scientific Communication & Content Writing
                    </option>
                    <option value="Academic Collaboration / General Inquiry">
                      Academic Collaboration / General Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your research opportunity, project scope, timeline, or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-md hover:shadow-emerald-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Nain Fatima</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
