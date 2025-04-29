"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@heroui/react";
import SuccessModal from "./SuccessModal";
import { sendMessage } from "@/utils/sendMessage";
import { useTranslations } from "next-intl";

export default function ContactModal({ isOpen, onClose }) {
  const t = useTranslations("ContactModal");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      setStatus("Введите сообщение!");
      return;
    }

    try {
      const result = await sendMessage(`Сообщение: ${inputValue}`);
      if (result.success) {
        setIsModalOpen(true);
        onClose();
        setInputValue("");
      } else {
        setStatus(`Ошибка: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Ошибка отправки: ${error.message}`);
    }
  };

  return (
    <>
      <Modal className="mx-[25px] py-[48px] px-[18px] md:py-[57px] md:px-[43px] lg:py-[65px] lg:px-[68px] rounded-lg bg-[url(/image/contact-form-bg.svg)]" isOpen={isOpen} onClose={onClose} placement="center" size="lg" hideCloseButton={true}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-[18px] mb-8 md:mb-9 lg:mb-10">
            <h2 className="text-[24px]/[122%] md:text-[28px]/[122%] lg:text-[32px]/[122%] text-[#091129] font-actay uppercase text-center">{t("title")}</h2>
            <p className="text-[12px]/[122%] md:text-[13px]/[122%] lg:text-[14px]/[122%] text-[#091129] text-center font-light">{t("description")}</p>
          </ModalHeader>
          <ModalBody className="px-0">
            <input type="text" placeholder={t("placeholder_1")} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-[12px]/[20px] md:text-[13px]/[20px] lg:text-sm text-[#091129] px-[24px] py-[13px] rounded-3xl border-[#091129] border-[2px] bg-transparent placeholder-[#091129]"/>
            <input type="text" placeholder={t("placeholder_2")} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-sm text-[#091129] px-[24px] py-[13px] rounded-3xl border-[#091129] border-[2px] bg-transparent placeholder-[#091129]"/>
            {/* {status && <p className="text-red-500 text-sm mt-2">{status}</p>} */}
          </ModalBody>
          <ModalFooter className="px-0">
            <button className="w-full py-[13.5px] font-[12px] md:font-[13px] lg:font-[14px] text-white rounded-[24px] bg-gradient-to-r from-[#080218] to-[#2462FF]" onClick={handleSendMessage}>
              {t("button")}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
