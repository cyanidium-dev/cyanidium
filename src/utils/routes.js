import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaTicketAlt, FaTiktok } from "react-icons/fa";

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
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram },
  { name: "Youtube", url: "https://youtube.com", icon: FaYoutube },
  { name: "Tiktok", url: "https://tiktok.com", icon: FaTiktok },
  { name: "Facebook", url: "https://facebook.com", icon: FaFacebook },
];
