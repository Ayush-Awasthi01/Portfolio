import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container py-12 grid lg:grid-cols-2 gap-8 items-center">
        <section>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-5xl font-bold leading-tight">
            Hi, I am <span className="text-brand">Ayush Awasthi</span>
          </motion.h1>
          <div className="mt-4 text-lg">
            <Typewriter options={{
              strings: ['B.Tech (IT) Student', 'Aspiring Software Engineer', 'Data Science & ML Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 60
            }} />
          </div>
          <p className="mt-6 small max-w-xl">I build scalable web applications, data-driven ML projects, and polished user experiences. Currently exploring cloud-native systems and full-stack development.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="btn">View Projects</Link>
            <a className="btn" href="/Ayush_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </div>

          <div className="mt-10 card">
            <h4 className="font-semibold">Quick Overview</h4>
            <div className="mt-3 small">
              <div>Location: Kanpur, India</div>
              <div>Education: B.Tech — Information Technology</div>
              <div>Tools: Python, SQL, React, Next.js, GCP, AWS</div>
            </div>
          </div>
        </section>

        <aside className="flex justify-center lg:justify-end">
          <div className="card flex items-center justify-center">
            <Image src="/profile.jpg" alt="Ayush" width={320} height={320} className="profile-img" />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
