import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    const form = new FormData(e.target);
    const body = Object.fromEntries(form);
    console.log('Contact submission', body);
    setStatus('Message sent! (demo)');
    e.target.reset();
  }

  return (
    <div>
      <Navbar />
      <main className="container py-12 grid md:grid-cols-2 gap-8">
        <section>
          <h1 className="section-title">Contact</h1>
          <p className="small">Want to work together or have questions? Send a message.</p>
          <p className="mt-4 small">Email: <a className="nav-link" href="mailto:ayush.awasthi@example.com">ayush.awasthi@example.com</a></p>
          <p className="mt-2 small">LinkedIn: <a className="nav-link" href="https://www.linkedin.com/in/ayush-awasthi765" target="_blank" rel="noreferrer">View profile</a></p>
        </section>

        <form onSubmit={onSubmit} className="card">
          <input name="name" required placeholder="Name" className="w-full p-3 mb-3 rounded bg-white/6" />
          <input name="email" required type="email" placeholder="Email" className="w-full p-3 mb-3 rounded bg-white/6" />
          <textarea name="message" required rows="5" placeholder="Message" className="w-full p-3 mb-3 rounded bg-white/6" />
          <button className="btn" type="submit">Send Message</button>
          {status && <p className="mt-3 small">{status}</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
}
