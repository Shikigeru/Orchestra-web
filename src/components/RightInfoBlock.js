import React from "react";

import "../styles/RightInfoBlock.sass";

const RightInfoBlock = (props) => {
  const { lang } = props;
  const contentText = {
    titleText: "Carnabands Show 2019",
    maintText:
      lang === "us"
        ? 'February 23, 24, 2019 the orchestra of the 8th Chernihiv Learning Center of the State Special Service of the Ministry of Defense of Ukraine participated in the 99th international festival "Carnaband\'s Show 2019" in the city of Chalon-sur-Seine, Republic of France.'
        : "23, 24 лютого 2019 року оркестр 8-го навчального Чернігівського центру державної спеціальної служби Міністерства оборони України приймав участь в 99 міжнародному фестивалі «Carnaband’s Show 2019» в місті Шалон Сюр-Сон республіки Франція.",
    buttonText: lang === "us" ? "READ MORE" : "Детальніше",
  };
  return (
    <div className="right-info">
      <a href="#/blog/5" className="main-link">
        <h2 className="medium-title">{contentText.titleText}</h2>
        <img src="/images/carnabands.jpg" alt="carnabands" />
      </a>
      <p>{contentText.maintText}</p>
      <a href="#/blog/5" className="main-link">
        {contentText.buttonText}
      </a>
    </div>
  );
};

export default RightInfoBlock;
