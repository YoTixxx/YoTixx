import "./header.scss";
import YoTixx from "../../../images/YoTixxLogo.svg";
import userProfile from "../../../images/user.svg";
import { Link } from "react-router-dom";

const HomeHeader = ({ searchValue, onchange, submit }) => {
  return (
    <header className="Main-header">
      <div className="Main-header__logo">
        <img src={YoTixx} className="header-image" alt="YoTixx Logo" />
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
      <div  className="Main-header__profileContainer">
      <Link to="">
        <img
          src={userProfile}
          alt="User-profile"
          className="Main-header__userProfile"
        />
      </Link>
      </div>
    </header>
  );
};

export default HomeHeader;
