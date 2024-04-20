import { Typography } from "../../common";
import Avatar from "../../../assets/avatars/avatar.png";
import "./Header.css";

const { Title } = Typography;

const Header = () => {
  return (
    <div className="header-container">
      <div className="santi-tabbach">
        <img className="avatar" src={Avatar} />
        <div className="name">
          <Title fontWeight="100">SANTI </Title>
          <Title>TABBACH</Title>
        </div>
      </div>
    </div>
  );
};

export default Header;
