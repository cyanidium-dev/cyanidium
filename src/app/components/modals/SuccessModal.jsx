"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useTranslations } from "next-intl";

export default function SuccessModal({ isOpen, onClose }) {
    const t = useTranslations("SuccessModal");
  return (
    <Modal className="mx-[25px] py-[48px] px-[18px] md:py-[57px] md:px-[43px] lg:py-[65px] lg:px-[68px] rounded-lg bg-[url(/image/contact-form-bg.svg)]" isOpen={isOpen} onClose={onClose} placement="center" size="lg" hideCloseButton={true}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-[18px] mb-8 py-0">
          <h2 className="text-[24px]/[122%] md:text-[28px]/[122%] lg:text-[32px]/[122%] text-[#091129] font-actay uppercase text-center">{t("title")}</h2>
          <p className="text-[12px]/[122%] md:text-[13px]/[122%] lg:text-[14px]/[122%] text-[#091129] text-center font-light">{t("description")}</p>
        </ModalHeader>
          <ModalFooter className="px-0">
            <button className="w-full relative py-[13.5px] font-[12px] md:font-[13px] lg:font-[14px] text-white rounded-[24px] bg-gradient-to-r from-[#080218] to-[#2462FF]" onClick={onClose}>
              {t("button")}
              <img className="absolute max-370:hidden right-2 top-1/2 -translate-y-1/2" src="/icons/tg-in-button.svg" alt="Tg icon" />
            </button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
