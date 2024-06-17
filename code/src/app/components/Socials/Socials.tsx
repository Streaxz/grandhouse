import Link from "next/link";

export const Socials = () => {
  return (
    <div className={"socials"}>
      <Link href={"https://t.me/"}>
        <img
          src={"/socialTelegram.png"}
          alt={"telegram"}
          className={"socialItem"}
        />
      </Link>
      <Link href={"https://vk.com/"}>
        <img src={"/socialVk.png"} alt={"vk"} className={"socialItem"} />
      </Link>
      <a>
        <img src={"/youtube.png"} alt={"youtube"} className={"socialItem"} />
      </a>
      <a>
        <img src={"/socialDzen.png"} alt={"dzen"} className={"socialItem"} />
      </a>
    </div>
  );
};
