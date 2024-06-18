import { ContactsItem } from "@/app/components/ContactsItem/ContactsItem";

export const PriceOffer = () => {
  return (
    <div className={"ideasContainer"}>
      <div className={"ideasContent"}>
        <div className={"ideasHeader"}>
          <img
            className={"shortcutImage"}
            src={"/rouble.png"}
            alt={"рубль"}
          ></img>
          <h1 style={{ color: "#272B40", textAlign: "center" }}>
            {" "}
            Подберем лучшую цену
          </h1>
        </div>
        <div className={"contactsContainer"}>
          <ContactsItem
            upperText={"8 800 500 35-05"}
            lowerText={"Перезвоним сразу"}
            buttonText={"Закажите Звонок"}
            onClick={() => {
              console.log("click");
            }}
          />
          <ContactsItem
            upperText={"@grandhouse_robot"}
            lowerText={"Менеджер онлайн"}
            buttonText={"Чат в телеграме"}
            onClick={() => {
              console.log("click");
            }}
          />
          <ContactsItem
            upperText={"8 926 100-00-00"}
            lowerText={"И здесь тоже"}
            buttonText={"Чат в WhatsApp"}
            onClick={() => {
              console.log("click");
            }}
          />
        </div>
      </div>
    </div>
  );
};
