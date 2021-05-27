import "./header.scss";
import YoTixx from "../../../images/ReusableImages/YoTixx.svg";

const HomeHeader = ({searchValue, onchange, submit}) => {
  return (
    <header className="Main-header">
      <div className="Main-header__logo">
        <img src={YoTixx} alt="Yotixx logo" />
      </div>
      <div className="Main-header__form">
          <form onSubmit={submit}>
              <input
              className="Main-header__input"
              title="Search for Artist, teams, venue"
              aria-label="Enter your search for Artist, teams, venue"
              type="search"
              value={searchValue}
              placeholder={"Search for Artist, teams, venue"}
              onChange={onchange}
              />
          </form>
      </div>
    </header>
  );
};

export default HomeHeader;
