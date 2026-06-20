'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="section-label">যোগাযোগ · CONTACT</div>
      <h2 className="section-title">আমার সাথে যোগাযোগ করুন</h2>
      <p className="section-subtitle">
        Let's collaborate, create, and preserve culture together
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">নাম · Name</label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="আপনার নাম"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">ইমেইল · Email</label>
          <input
            type="email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="আপনার ইমেইল"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">বিষয় · Subject</label>
          <input
            type="text"
            className="form-input"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="বিষয়"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">বার্তা · Message</label>
          <textarea
            className="form-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="আপনার বার্তা"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-send"
          style={{
            background: submitted ? 'var(--teal)' : 'var(--saffron)',
          }}
        >
          {submitted
            ? '✓ পাঠানো হয়েছে · Sent!'
            : 'বার্তা পাঠান · Send Message →'}
        </button>
      </form>
    </section>
  );
}
