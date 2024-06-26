"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const FooterContacts = () => {
  const router = useRouter();
  return (
    <div className={"footerContacts"}>
      <div
        style={{ color: "#62698C", display: "flex", flexDirection: "column" }}
      >
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/philosophy");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Философия
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/catalog");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Каталог проектов
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/offers");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Услуги
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/forest");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Лес
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/reviews");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Работы и отзывы
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/company");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Компания
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Вакансии
          </p>
        </a>
        <a
          style={{
            cursor: "pointer",
            color: "#62698C",
          }}
          onClick={() => {
            router.push("/magazine");
          }}
        >
          <p
            style={{
              color: "#62698C",
            }}
          >
            Журнал
          </p>
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
          Мы на связи 24/7. Звонок бесплатный
          <br />
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
