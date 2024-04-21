import { Typography } from "../../common";
import Avatar from "../../../assets/avatars/avatar.png";
import AvatarLight from "../../../assets/avatars/avatar-light.png";

import "./Header.css";
import { useTheme } from "styled-components";

const { Title } = Typography;

const Header = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <div className="header-container">
      <div className="santi-tabbach">
        <img
          className="avatar"
          src={theme.key === "light" ? AvatarLight : Avatar}
        />
        <div className="name">
          <Title fontWeight="100">SANTI </Title>
          <Title>TABBACH</Title>
        </div>
      </div>
    </div>
  );
};

export default Header;
