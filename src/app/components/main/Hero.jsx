"use client"

import Container from "@/utils/Container";
import { useDisclosure } from "@heroui/react"
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import HeroLeft from "./hero/HeroLeft";
import HeroRight from "./hero/HeroRight";
import HeroPoints from "./hero/HeroPoints";
import HeroBackground from "./hero/HeroBackground";
import HeroMobileButton from "./hero/HeroMobileButton";

import ContactModal from "../modals/ContactModal";

export default function Hero() {
  const t = useTranslations("HomeSection");
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div className="relative overflow-hidden">
      <HeroBackground />

      <ContactModal isOpen={isOpen} onClose={onClose} />
      <Container>
        <div className="relative min-h-[900px] sm:min-h-[1000px] md:min-h-[1330px] xl:min-h-[1000px] pt-[20px] md:pt-[40px] lg:pt-[65px] px-[20px] sm:px-[60px] md:px-[80px] lg:px-[140px] z-[50]">
            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
              {/* Левая часть */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <HeroLeft onOpen={onOpen} />
              </motion.div>
              {/* Правая часть */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 "
              >
                <HeroRight />
              </motion.div>
            </div>

            {/* Средняя секция */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-end pt-[180px] lg:pt-0"
            >
              <HeroPoints />
            </motion.div>
            <HeroMobileButton onOpen={onOpen} label={t("button")} />
        </div>
      </Container>
    </div>
  );
}
