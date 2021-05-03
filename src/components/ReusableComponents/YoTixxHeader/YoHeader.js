import YoHeader from "../../../images/ReusableImages/YoTixx.svg";
import "./YoHeader.scss";

const YoTixxHeader = () => {
  return (
    <div>
      <img src={YoHeader} className="header-image" alt="YoTixx Logo" />
    </div>
  );
};

export default YoTixxHeader;
