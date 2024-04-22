import { Typography } from "../../common";
import Avatar from "../../../assets/avatars/avatar.png";
import AvatarLight from "../../../assets/avatars/avatar-light.png";
import Settings from "../../settings/Settings";
import { Theme } from "../../../models";
import {
  StyledAvatar,
  StyledHeaderContainer,
  StyledNameContainer,
  StyledSantiContainer,
} from "./StyledHeader";

const { Title } = Typography;

interface IHeader {
  theme: Theme;
  themeToggler: () => void;
}

const Header: React.FC<IHeader> = ({ theme, themeToggler }) => {
  return (
    <StyledHeaderContainer>
      <StyledSantiContainer>
        <StyledAvatar
          className="avatar"
          src={theme === Theme.LIGHT ? AvatarLight : Avatar}
        />
        <StyledNameContainer>
          <Title fontWeight="100">SANTI </Title>
          <Title>TABBACH</Title>
        </StyledNameContainer>
      </StyledSantiContainer>
      <div className="settings-container">
        <Settings theme={theme} themeToggler={themeToggler} />
      </div>
    </StyledHeaderContainer>
  );
};

export default Header;
