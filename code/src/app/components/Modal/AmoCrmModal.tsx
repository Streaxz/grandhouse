"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/Button/Button";
import axios from "axios";
import Image from "next/image";

export interface IModalProps {
  closeModal?: () => void;
  isModal?: boolean;
}
export const AmoCrmModal = ({ closeModal, isModal }: IModalProps) => {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const getIp = async (): Promise<string | null> => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error(error);
      return null; // Handle the error gracefully
    }
  };

  const getRegion = async (ip: string) => {
    try {
      const response = await fetch(`http://ipwho.is/${ip}`);
      const data = await response.json();
      return data.region;
    } catch (error) {
      console.error(error);
      return null; // Handle the error gracefully
    }
  };
  const handleSubmit = async () => {
    const ip = await getIp();
    let region = null;
    if (ip) {
      region = await getRegion(ip);
    }

    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/crm/`, {
      name,
      phone,
      region,
    });
  };
  return (
    <div className={"modalContainer"}>
      <div className={"modalCloseButton"}>
        {isModal && (
          <button onClick={closeModal} className={"clickable"}>
            <img className={"closeIcon"} src={"/closeIcon.svg"} alt={"close"} />
          </button>
        )}
      </div>
      <div className={"ideasHeader"}>
        <h1>👋 </h1>
        <h1 style={{ color: "#272B40", textAlign: "center" }}> Мы на связи</h1>
      </div>
      <div className={"inputGroup"}>
        <p className={"inputP"}>Ваше имя</p>
        <div style={{ display: "flex", width: "100%" }}>
          <input
            id="nameInput"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{ color: "#272B40" }}
            placeholder="Иванов Иван"
          />
        </div>
      </div>
      <div className={"inputGroup"}>
        <p className={"inputP"}>Ваш номер</p>
        <div style={{ display: "flex", width: "100%" }}>
          <input
            id="phoneInput"
            type="tel"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            style={{ color: "#272B40" }}
            placeholder="+7(999)999-99-99"
          />
        </div>
      </div>
      <div className={"modalButton"}>
        <div className={"inputGroup"}>
          <p className={"inputButton"}>Перезвоним</p>
          <Button onClick={handleSubmit} buttonText={"Заказать звонок"} />
        </div>
        <div className={"modalSocial"}>
          <p className={"inputButton"}>Чаты: </p>
          <div className={"modalSocialIconContainer"}>
            <a>
              <div className={"modalSocialIcon"}>
                <Image src={"/socialWhatsApp.png"} alt={"WhatsApp"} fill />
              </div>
            </a>
            <a>
              <div className={"modalSocialIcon"}>
                <Image src={"/socialTelegram.png"} alt={"Telegram"} fill />
              </div>
            </a>
            <a>
              <div className={"modalSocialIcon"}>
                <Image src={"/socialVk.png"} alt={"VK"} fill />
              </div>
            </a>
          </div>
        </div>
      </div>
      <h5 style={{ color: "#62698C" }}>
        Нажимая кнопку «Заказать звонок», вы подтверждаете свое согласие на
        обработку персональных данных
      </h5>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#FFF",
        }}
      />
      <div className={"modalFooter"}>
        <h2 style={{ color: "rgba(39, 43, 64, 1)", textAlign: "center" }}>
          8 800 500-35-05
        </h2>
        <h2 style={{ color: "rgba(39, 43, 64, 1)", textAlign: "center" }}>
          dom@spk-gh.ru
        </h2>
      </div>
      <h5 style={{ color: "rgba(39, 43, 64, 1)", textAlign: "center" }}>
        Будем рады увидиться с вами вживую! Наши офисы в Москве, Нижнем
        Новгороде и Кирове работают с понедельника по пятницу с 9 утра до 19
        вечера. Адреса
      </h5>
      <div className={"modalEllipse"} />
    </div>
  );
};
