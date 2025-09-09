import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container py-6 small flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Ayush Awasthi</div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-smooth"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/ayush-awasthi765" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-smooth"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:ayushawasthi765@gmail.com" 
            className="transition-smooth"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
