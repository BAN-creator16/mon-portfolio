/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

const Petals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.img
          key={i}
          src="https://www.image2url.com/r2/default/images/1783108700470-71cc6cd3-87a0-45f4-a2ac-f3d2f1d671c4.png"
          className="absolute object-contain"
          style={{
            width: `${20 + Math.random() * 35}px`,
            left: `-10vw`,
            top: `${-20 + Math.random() * 120}vh`,
            filter: `blur(${Math.random() * 3}px)`,
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          animate={{
            x: `120vw`,
            y: `${(Math.random() - 0.2) * 100}vh`,
            rotate: Math.random() * 720,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            delay: Math.random() * 25,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const heroImage = "https://www.image2url.com/r2/default/images/1782927206503-1c8f29cc-bc5c-4f6a-9807-97feae8ffd3d.jpg";

  return (
    <div className="w-full relative text-gray-900 selection:bg-orange-500 selection:text-white">
      {/* Full Screen Background Image Layer - Fixed to allow scrolling */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Flying Petals Effect */}
      <Petals />

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto min-h-screen flex flex-col md:flex-row">
        
        {/* Left Side (Orange area content - Keep Empty for Face) */}
        <div className="w-full md:w-[45%] min-h-[30vh] md:min-h-0 md:h-full p-6 md:p-16 lg:p-24 flex flex-col justify-between items-start pointer-events-none">
          
          {/* Top Left: Logo */}
          <div className="flex flex-col items-start pointer-events-auto">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30 cursor-pointer"
            >
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </motion.div>
          </div>

          {/* Bottom Left: Empty */}
          <div></div>
        </div>

        {/* Right Side (White area content) */}
        <div className="w-full md:w-[55%] flex-1 md:h-full p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-between items-end text-right">
          
          {/* Header / Nav */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-end gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-semibold text-gray-800 -mt-2 md:-mt-8 lg:-mt-12 w-full"
          >
            <a href="#profil" className="relative overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">À propos</span>
            </a>
            <a href="#projets" className="relative overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Travaux</span>
            </a>
            <a href="#competences" className="relative overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Compétences</span>
            </a>
            <a href="#contact" className="relative overflow-hidden px-4 py-2 sm:px-5 sm:py-2.5 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Contact</span>
            </a>
          </motion.nav>

          {/* Right Main Content */}
          <div className="flex flex-col items-end mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 text-xs font-bold tracking-widest text-orange-600 mb-6 bg-orange-500/10 backdrop-blur-sm"
            >
              FAÏSSAL OUSSAMA BESSOU-KPEGLO
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-4 sm:mb-6"
            >
              SPÉCIALISTE EN <br />
              INTELLIGENCE <br />
              ARTIFICIELLE
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 leading-snug max-w-md mb-8 sm:mb-12 text-right"
            >
              Étudiant en 3ème année d’Informatique, passionné par l’Intelligence Artificielle et les technologies émergentes.
            </motion.p>

            {/* Buttons and Socials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-end sm:items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-16 w-full sm:w-auto"
            >
              {/* Social Icons */}
              <div className="flex justify-end gap-3 sm:gap-4 w-full sm:w-auto">
                <a href="https://github.com/BAN-creator16" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden p-3 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full text-gray-800 hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 hover:scale-110 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Github size={20} className="relative z-10" />
                </a>
                <a href="#" className="relative overflow-hidden p-3 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full text-gray-800 hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 hover:scale-110 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Linkedin size={20} className="relative z-10" />
                </a>
                <a href="#" className="relative overflow-hidden p-3 bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] rounded-full text-gray-800 hover:text-orange-600 hover:bg-orange-500/10 hover:border-orange-500/30 hover:scale-110 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Twitter size={20} className="relative z-10" />
                </a>
              </div>

              <a href="#projets" className="w-full sm:w-auto justify-center sm:justify-start relative overflow-hidden flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-black/5 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(255,255,255,1)] text-gray-900 font-bold hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-600 hover:scale-105 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  VOIR MON PORTFOLIO
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Modern Glassmorphic CV Content Area */}
      <div id="cv-content" className="relative z-20 w-full bg-white/70 backdrop-blur-3xl border-t border-white/50 shadow-2xl">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-24 md:px-16 lg:px-24 space-y-24 sm:space-y-32">
          
          {/* Profil */}
          <motion.section 
            id="profil" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
              <span className="text-orange-500 font-mono text-xl opacity-70">01.</span> Profil
            </h2>
            <div className="p-8 md:p-10 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] leading-relaxed text-lg md:text-xl text-gray-700">
              <p>
                Étudiant en 3ème année d’Informatique, passionné par l’Intelligence Artificielle et les technologies émergentes. 
                Solide maîtrise des langages de programmation, des bases de données et des réseaux. Capacité à résoudre 
                des problèmes complexes et à travailler efficacement en équipe sur des projets innovants. 
              </p>
              <p className="mt-4 font-medium text-gray-900">
                Certifié CCNA, IBM AI et AWS Cloud Practitioner.
              </p>
            </div>
          </motion.section>

          {/* Compétences Techniques */}
          <motion.section 
            id="competences" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
              <span className="text-orange-500 font-mono text-xl opacity-70">02.</span> Compétences
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Programmation', 'Développement', 'Java', 'C/C++', 'HTML', 'CSS', 'SQL', 'Intelligence Artificielle', 'Pycharm', 'Visual Studio Code', 'Bases de données', 'Réseaux', 'MySQL', 'CCNA', 'Systèmes', 'Outils', 'Windows', 'Ubuntu', 'Docker', 'Gestion de projet', 'Travail en équipe', 'Résolution de problèmes', 'Apprentissage automatique', 'Cloud Computing', 'Supabase', 'Antigravity', 'Firestore'].map(skill => (
                <span key={skill} className="px-5 py-2.5 bg-white/60 backdrop-blur-md border border-white/80 rounded-full text-sm font-bold text-gray-700 shadow-sm hover:scale-105 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Expérience Professionnelle */}
          <motion.section 
            id="experience" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-gray-900">
              <span className="text-orange-500 font-mono text-xl opacity-70">03.</span> Expérience Professionnelle
            </h2>
            <div className="relative pl-8 md:pl-10 border-l-2 border-orange-200">
              <div className="relative">
                <div className="absolute -left-[41px] md:-left-[49px] top-1 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Étudiant en Informatique - Projets académiques</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                  <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">CS LA RÉVÉLATION — Sokodé, Togo</span>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <span className="text-sm text-gray-500 font-mono bg-white/50 px-3 py-1 rounded-full border border-gray-200 w-fit">2021 — 2024</span>
                </div>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1.5 flex-shrink-0">✦</span>
                    <span>Réalisation de projets en Intelligence Artificielle (classification, prédiction) en équipe de 3 à 5 personnes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1.5 flex-shrink-0">✦</span>
                    <span>Développement d'applications web avec HTML, CSS, Java et C/C++.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1.5 flex-shrink-0">✦</span>
                    <span>Mise en place de bases de données MySQL pour la gestion de données scolaires.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1.5 flex-shrink-0">✦</span>
                    <span>Participation à des ateliers de résolution de problèmes et de challenges de programmation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1.5 flex-shrink-0">✦</span>
                    <span>Gestion de mini-projets en respectant les délais et en assurant la qualité du code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Projets */}
          <motion.section 
            id="projets" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
              <span className="text-orange-500 font-mono text-xl opacity-70">04.</span> Projets Phares
            </h2>
            <div className="mb-10">
              <a href="https://github.com/BAN-creator16" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-50 text-orange-600 border border-orange-200 rounded-full font-bold text-sm hover:bg-orange-100 transition-colors">
                <Github size={18} />
                DISPONIBLE SUR MON GITHUB
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Classification d'images IA</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Développement d’un modèle de classification d’images pour reconnaître des objets courants, utilisant Python et des bibliothèques IA.</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full">Python</span>
                  <span className="text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full">Bibliothèques IA</span>
                </div>
              </div>
              
              <div className="group p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Système de Gestion Étudiants</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">Conception et implémentation d’une base de données MySQL pour la gestion des notes et des présences des étudiants.</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full">MySQL</span>
                  <span className="text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full">Architecture BD</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Formations & Certifications */}
          <motion.section 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
                <span className="text-orange-500 font-mono text-xl opacity-70">05.</span> Formation
              </h2>
              <div className="p-8 bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">Baccalauréat — Informatique</h3>
                <div className="text-orange-600 font-bold mt-2">CS LA RÉVÉLATION</div>
                <div className="text-sm text-gray-500 font-mono mt-4 bg-white/50 px-3 py-1 rounded-full border border-gray-200 w-fit">2021 — 2024</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
                <span className="text-orange-500 font-mono text-xl opacity-70">06.</span> Certifications
              </h2>
              <div className="space-y-4">
                {[
                  { name: "CCNA 1 — Cisco", year: "2024" },
                  { name: "IBM AI — IBM", year: "2024" },
                  { name: "AWS Cloud Practitioner", year: "2024" }
                ].map((cert, i) => (
                  <div key={i} className="p-5 bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 hover:bg-white/80 transition-colors">
                    <span className="font-bold text-gray-800">{cert.name}</span>
                    <span className="text-sm font-mono text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Langues & Intérêts */}
          <motion.section 
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
                <span className="text-orange-500 font-mono text-xl opacity-70">07.</span> Langues
              </h2>
              <div className="space-y-4 p-8 bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl shadow-sm">
                <div className="flex justify-between items-end border-b border-gray-200/50 pb-4">
                  <span className="font-bold text-lg text-gray-900">Français</span>
                  <span className="text-gray-500 font-medium">Courant</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="font-bold text-lg text-gray-900">Anglais</span>
                  <span className="text-gray-500 font-medium">Niveau intermédiaire</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-gray-900">
                <span className="text-orange-500 font-mono text-xl opacity-70">08.</span> Centres d'intérêt
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Intelligence Artificielle', 'Développement web', 'Technologies émergentes', 'Bases de données'].map(interest => (
                  <span key={interest} className="px-5 py-3 bg-gray-900 text-white rounded-full text-sm font-bold shadow-md hover:bg-orange-500 transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

        </div>

        {/* Footer */}
        <footer id="contact" className="border-t border-gray-200/50 bg-white/80 backdrop-blur-3xl py-8 sm:py-12">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 font-bold text-lg sm:text-xl tracking-tight text-gray-900">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-sm transform rotate-45 flex-shrink-0"></div>
              <span>Faïssal Oussama</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm font-medium text-gray-600 text-center sm:text-left">
              <a href="tel:+22890989454" className="hover:text-orange-500 transition-colors">Tél: +228 90 98 94 54</a>
              <span className="hidden sm:inline text-gray-300">•</span>
              <a href="mailto:faissalmeliodas912@gmail.com" className="hover:text-orange-500 transition-colors break-all">Email: faissalmeliodas912@gmail.com</a>
              <span className="hidden md:inline text-gray-300">•</span>
              <a href="https://github.com/BAN-creator16" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">GitHub</a>
              <span className="hidden md:inline text-gray-300">•</span>
              <span>Localisation: Sokodé, Togo</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
