import { Typography } from "../../common";
import Avatar from "../../../assets/avatars/avatar.png";
import AvatarLight from "../../../assets/avatars/avatar-light.png";
import Settings from "../../settings/Settings";
import { Theme } from "../../../theme/models/types";
import "./Header.css";

const { Title } = Typography;

interface IHeader {
  theme: Theme;
  themeToggler: () => void;
}

const Header: React.FC<IHeader> = ({ theme, themeToggler }) => {
  return (
    <div className="header-container">
      <div className="santi-tabbach">
        <img
          className="avatar"
          src={theme === Theme.LIGHT ? AvatarLight : Avatar}
        />
        <div className="name">
          <Title fontWeight="100">SANTI </Title>
          <Title>TABBACH</Title>
        </div>
      </div>
      <div className="settings-container">
        <Settings theme={theme} themeToggler={themeToggler} />
      </div>
    </div>
  );
};

export default Header;
