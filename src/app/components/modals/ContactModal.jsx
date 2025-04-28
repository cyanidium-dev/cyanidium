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

export default function ContactModal({ isOpen, onClose }) {
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
      <Modal className="py-[65px] px-[68px] md:py-[45px] md:px-[48px] lg:py-[25px] lg:px-[28px] rounded-lg bg-[url(/image/contact-form-bg.svg)]" isOpen={isOpen} onClose={onClose} placement="center" size="lg">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-[18px] mb-[40px]">
            <h2 className="text-[32px]/[122%] text-[#091129] font-actay uppercase text-center">Залиште свої контакти</h2>
            <p className="text-[14px]/[122%] text-[#091129] text-center font-light">Заповніть свої дані і ми зв’яжемося з вами, щоб обговорити вашу проблему!</p>
          </ModalHeader>
          <ModalBody>
            <input type="text" placeholder="Ім'я" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-sm text-[#091129] px-[24px] py-[13px] rounded-3xl border-[#091129] border-[2px] bg-transparent placeholder-[#091129]"/>
            <input type="text" placeholder="Номер телефону" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="text-sm text-[#091129] px-[24px] py-[13px] rounded-3xl border-[#091129] border-[2px] bg-transparent placeholder-[#091129]"/>
            {/* {status && <p className="text-red-500 text-sm mt-2">{status}</p>} */}
          </ModalBody>
          <ModalFooter>
            <button className="w-full py-[13.5px] text-white rounded-[24px] bg-gradient-to-r from-[#080218] to-[#2462FF]" onClick={handleSendMessage}>
              Надіслати
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
