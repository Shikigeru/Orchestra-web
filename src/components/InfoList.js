import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/InfoList.sass";

class InfoList extends React.Component {
  render() {
    const { lang } = this.props;
    return (
      <div className="info-list">
        <div className="row">
          <div className="col-md-4 card-container">
            {/* <NavLink to='/compositions'> */}
            <NavLink to="/" className="info-card">
              <h2>{lang === "us" ? "Repertoire" : "Репертуар"}</h2>
              <div className="item">
                <div className="img-container">
                  <img src="/images/info-list/repertoire.png" alt="sax" />
                </div>
                <div className="item-text">
                  <h6>
                    {lang === "us"
                      ? "List of songs and musical works performed by orchestra"
                      : "Список композицій та музикальних творів які виконує оркестр"}
                  </h6>
                  <p>
                    {lang === "us"
                      ? "From classic to contemporary"
                      : "Від класики до сучасності"}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-4 card-container">
            <NavLink to="/blog" className="info-card">
              <h2>{lang === "us" ? "News" : "Новини"}</h2>
              <div className="item">
                <div className="img-container">
                  <img src="/images/info-list/news.png" alt="clock" />
                </div>
                <div className="item-text">
                  <h6>
                    {lang === "us"
                      ? "What Chernihiv live orchestra SSTS"
                      : "Чим живе Чернігівський оркестр ДССТ"}
                  </h6>
                  <p>
                    {lang === "us"
                      ? "Things to travel, enchanting tour and more"
                      : "Визначні поїздки, феєричні турне та багато іншого"}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-4 card-container">
            <NavLink to="/contacts" className="info-card">
              <h2>{lang === "us" ? "Questions?" : "Запитання?"}</h2>
              <div className="item">
                <div className="img-container">
                  <img src="/images/info-list/question.png" alt="ask" />
                </div>
                <div className="item-text">
                  <h6>
                    {lang === "us"
                      ? "If you do not find the information contact us"
                      : "Якщо ви не знайшли потрібну Вам інформацію звертайтесь до нас"}
                  </h6>
                  <p>e-mail: orkestr_dsst@i.ua</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoList;
