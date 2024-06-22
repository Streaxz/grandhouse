import Link from "next/link";
import Image from "next/image";

export const Socials = () => {
  return (
    <div className={"socials"}>
      <Link href={"https://t.me/grandhouse_spk"} target={"_blank"}>
        <div className={"socialItem"}>
          <Image src={"/socialTelegram.png"} alt={"telegram"} fill />
        </div>
      </Link>
      <Link href={"https://vk.com/grandhouse_spk"} target={"_blank"}>
        <div className={"socialItem"}>
          <Image src={"/socialVk.png"} alt={"vk"} fill />
        </div>
      </Link>
      <Link target={"_blank"} href={"https://youtube.com/@grandhouse_spk"}>
        <div className={"socialItem"}>
          <Image src={"/youtube.png"} alt={"youtube"} fill />
        </div>
      </Link>
      <Link target={"_blank"} href={"https://dzen.ru/grandhouse_spk"}>
        <div className={"socialItem"}>
          <Image src={"/socialDzen.png"} alt={"dzen"} fill />
        </div>
      </Link>
    </div>
  );
};
