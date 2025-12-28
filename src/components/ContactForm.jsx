// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'sent', 'error'

  // 會從 Vite 環境變數讀取；若沒有就用佔位字串（測試時可直接替換成你的值）
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot 檢查（若被填寫，很可能是機器人）
    if (form._gotcha) {
      setStatus('error');
      return;
    }
    setStatus('sending');

    // 時間字串（你可以改格式）
    const now = new Date();
    const timeString = now.toLocaleString();

    const templateParams = {
      name: form.name,
      email: form.email,
      time: timeString,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('sent');
      setForm({ name: '', email: '', message: '', _gotcha: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form">
      <h3>Contact Me</h3>

      <form onSubmit={handleSubmit}>
        {/* honeypot 隱藏欄位，阻擋簡單機器人 */}
        <div style={{ display: 'none' }}>
          <label>
            Keep this field empty
            <input name="_gotcha" value={form._gotcha} onChange={handleChange} />
          </label>
        </div>

        <label>
          Name
          <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Message
          <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} required />
        </label>

        <div style={{ marginTop: 8 }}>
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </div>
      </form>

      {status === 'sent' && <p className="success">Thanks — message sent!</p>}
      {status === 'error' && <p className="error">Failed to send. Try again later.</p>}
    </div>
  );
}
