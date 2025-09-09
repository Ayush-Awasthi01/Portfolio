import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="section-title">About Me</h1>
          <p className="small">I am Ayush Awasthi, a B.Tech (Information Technology) student with a diploma in Mechanical Production. I enjoy building products at the intersection of data and UX — from machine learning prototypes to full-stack web apps.</p>
          <h2 className="mt-6 font-semibold">Education</h2>
          <ul className="small mt-2">
            <li>B.Tech — Information Technology</li>
            <li>Diploma — Mechanical Production</li>
          </ul>

          <h2 className="mt-6 font-semibold">Projects & Experience</h2>
          <p className="small mt-2">Worked on projects like Driver Drowsiness Detection (InceptionV3), Customer Churn Prediction, and E-Library Management System. Focused on model robustness, UI polish, and deployment best practices.</p>
        </div>

        <aside className="card">
          <Image src="/profile.jpg" alt="Ayush" width={240} height={240} className="profile-img" />
          <h3 className="mt-4 font-semibold">Skills</h3>
          <ul className="mt-2 small space-y-1">
            <li>Python • SQL • JavaScript/TypeScript</li>
            <li>React • Next.js • Tailwind CSS</li>
            <li>Machine Learning • TensorFlow • scikit-learn</li>
            <li>GCP • AWS • Docker</li>
          </ul>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
