export const Sberbank = () => {
  return (
    <div className={"sberbank"}>
      <h3>На все дома есть ипотека от</h3>
      <div className={"sberImageContainer"}>
        <img
          src={"DomRf.png"}
          style={{
            width: "10%",
            flexShrink: 0,
          }}
          alt={"domrf"}
        />
        <img
          src={"Sber.png"}
          style={{
            width: "80%",
            flexShrink: 0,
          }}
          alt={"sber"}
        />
      </div>
    </div>
  );
};
