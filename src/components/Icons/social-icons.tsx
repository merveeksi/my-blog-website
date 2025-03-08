"use client";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "https://linkedin.com", icon: <FaLinkedin className="text-blue-500" /> },
    { href: "https://github.com", icon: <FaGithub className="text-yellow-600" /> },
    { href: "https://instagram.com", icon: <FaInstagram className="text-pink-500" /> },
    { href: "https://facebook.com", icon: <FaFacebook className="text-blue-600" /> },
    { href: "https://twitter.com", icon: <FaTwitter className="text-blue-400" /> },
  ];
  
  const SocialIcons = () => {
    return (
      <div className="flex flex-col items-center gap-4 fixed right-4 top-1/2 transform -translate-y-1/2">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            animate={{
              scale: [1, 1.3, 1], // Sürekli olarak büyüyüp küçülecek (kalp atışı)
            }}
            transition={{
              duration: 2, // 0.8 saniyede bir animasyon
              repeat: Infinity, // Sonsuz tekrar
              repeatType: "reverse", // Tekrar ederken tersine gitsin
              ease: "easeInOut", // Yumuşak geçiş
            }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    );
  };
  
  export default SocialIcons;