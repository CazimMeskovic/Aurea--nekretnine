'use client';
import { useState } from 'react';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: any = {};
    if (!form.name) newErrors.name = 'Ime je obavezno';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Validan email je obavezan';
    if (!form.message) newErrors.message = 'Poruka je obavezna';
    return newErrors;
  }

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  }

  return (
    <form className="bg-white rounded-lg shadow p-6" onSubmit={handleSubmit} noValidate>
      <h2 className="text-xl font-bold mb-4 text-green-700">Kontakt forma</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="name">Ime</label>
        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="message">Poruka</label>
        <textarea name="message" id="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={4} />
        {errors.message && <span className="text-red-600 text-sm">{errors.message}</span>}
      </div>
      <button type="submit" className="bg-green-700 text-white font-semibold px-6 py-2 rounded hover:bg-green-800 transition">Pošalji</button>
      {submitted && <div className="mt-4 text-green-700 font-semibold">Poruka je uspješno poslana!</div>}
    </form>
  );
}
