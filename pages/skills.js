import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Skills() {
  const skills = [
    {name:'Python', level:90}, {name:'SQL', level:85}, {name:'React', level:80},
    {name:'Next.js', level:75}, {name:'TensorFlow', level:70}, {name:'GCP', level:65}
  ];
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="section-title">Skills</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map(s=> (
            <div key={s.name} className="card">
              <div className="flex justify-between items-center">
                <strong>{s.name}</strong>
                <span className="small">{s.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mt-3 overflow-hidden">
                <div style={{width: s.level + '%'}} className="bg-brand h-3"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
