"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const FooterContacts = () => {
  const router = useRouter();
  return (
    <div className={"footerContacts"}>
      <div style={{ color: "#62698C" }} className={"footerNavigation"}>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/philosophy");
          }}
        >
          Философия
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/catalog");
          }}
        >
          Каталог проектов
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/offers");
          }}
        >
          Услуги
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/forest");
          }}
        >
          Лес
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/reviews");
          }}
        >
          Работы и отзывы
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/company");
          }}
        >
          Компания
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
        >
          Вакансии
        </a>
        <br />
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/magazine");
          }}
        >
          Журнал
        </a>
      </div>
      <div className={"footerPhone"}>
        <h1 style={{ color: "#62698C" }}>
          <a
            style={{
              cursor: "pointer",
              color: "#62698C",
              textDecoration: "none",
            }}
            href="tel:+7 800 500-35-05"
          >
            8 800 500-35-05
          </a>
        </h1>
        <h5 style={{ color: "#62698C" }}>
          Звонок бесплатный
          <br />
          <br />
        </h5>
        <div className={"footerTextGap"}>
          <h5 style={{ color: "#62698C" }}>
            Менеджер в Телеграме:{" "}
            <a
              style={{
                cursor: "pointer",
                color: "#62698C",
                textDecoration: "none",
              }}
              href="https://t.me/grandhouse_robot"
            >
              @grandhouse_robot
            </a>
          </h5>
          <h5 style={{ color: "#62698C" }}>
            <a
              style={{
                cursor: "pointer",
                color: "#62698C",
                textDecoration: "none",
              }}
              href={process.env.NEXT_PUBLIC_WHATSAPP}
            >
              WhatsApp: +7 926 500-35-05
            </a>
          </h5>
          <h5 style={{ color: "#62698C" }}>
            Почта по всем вопросам:{" "}
            <a
              style={{
                cursor: "pointer",
                color: "#62698C",
                textDecoration: "none",
              }}
              href="mailto:dom@spk-gh.ru"
            >
              dom@spk-gh.ru
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
