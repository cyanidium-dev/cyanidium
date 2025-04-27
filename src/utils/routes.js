import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaTicketAlt, FaTiktok, FaTelegram } from "react-icons/fa";

// Основные ссылки для хедера, бургера и других общих компонентов
export const routes = [
  { name: "Portfolio", path: "/" },
  { name: "About_us", path: "/about" },
  { name: "Flow_development", path: "/flow" },
  { name: "Blog", path: "/blog" },
  { name: "Contact_us", path: "/contact" },
];

// Ссылки, которые используются только в футере
export const footerLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

// Соц.сети

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/cyanidium.dev?igsh=NXpwdHZ5cGR4ZTB6", icon: FaInstagram },
  // { name: "Youtube", url: "https://youtube.com", icon: FaYoutube },
  { name: "Tiktok", url: "https://www.tiktok.com/@cyanidium.dev?_t=ZM-8vt2mvMQAxZ&_r=1", icon: FaTiktok },
  { name: "Telegram", url: "https://t.me/FreelancerOnMondays", icon: FaTelegram },
  // { name: "Facebook", url: "https://facebook.com", icon: FaFacebook },
];
