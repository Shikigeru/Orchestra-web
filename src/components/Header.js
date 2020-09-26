import React from "react";
import "../styles/Header.sass";

const Header = (props) => {
  const { lang } = props;
  const contentText = {
    headerText:
      lang === "us"
        ? "military band of the 8th chernihiv learning center"
        : "військовий оркестр 8-го навчального чернігівського центру",
    subheadText:
      lang === "us"
        ? "head orchestra - conductor colonel nikolay smal"
        : "начальник оркестру - військовий диригент полковник микола смаль",
  };
  return (
    <header>
      <h1 className="logo-text">{contentText.headerText.toUpperCase()}</h1>
      <h3 className="logo-subtext">{contentText.subheadText.toUpperCase()}</h3>
    </header>
  );
};

export default Header;
