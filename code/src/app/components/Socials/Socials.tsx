import Link from "next/link";

export const Socials = () => {
  return (
    <div className={"socials"}>
      <Link href={"https://t.me/grandhouse_spk"} target={"_blank"}>
        <img
          src={"/socialTelegram.png"}
          alt={"telegram"}
          className={"socialItem"}
        />
      </Link>
      <Link href={"https://vk.com/grandhouse_spk"} target={"_blank"}>
        <img src={"/socialVk.png"} alt={"vk"} className={"socialItem"} />
      </Link>
      <Link target={"_blank"} href={"https://youtube.com/@grandhouse_spk"}>
        <img src={"/youtube.png"} alt={"youtube"} className={"socialItem"} />
      </Link>
      <Link target={"_blank"} href={"https://dzen.ru/grandhouse_spk"}>
        <img src={"/socialDzen.png"} alt={"dzen"} className={"socialItem"} />
      </Link>
    </div>
  );
};
