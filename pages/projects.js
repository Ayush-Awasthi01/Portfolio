import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="section-title">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p=> (
            <article key={p.id} className="card hover:scale-102 transition-smooth">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="small mt-2">{p.summary}</p>
              <div className="mt-3 flex gap-2 flex-wrap small">
                {p.tech.map(t=> <span key={t} className="px-2 py-1 bg-white/6 rounded">{t}</span>)}
              </div>
              <div className="mt-4">
                <a className="nav-link" href={p.code} target="_blank" rel="noreferrer">View Code</a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
