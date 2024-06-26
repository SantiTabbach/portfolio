import { MoonIcon, SunIcon } from "../../assets/icons/settings";
import { Theme } from "../../models";
// import { Typography } from "../common";
import { StyledSettingsBox, StyledButton } from "./StyledSettings";

interface ISettings {
  theme: Theme;
  themeToggler: () => void;
}

// const { Paragraph } = Typography;

const Settings: React.FC<ISettings> = ({ theme, themeToggler }) => {
  return (
    <StyledSettingsBox>
      <StyledButton onClick={themeToggler} aria-label="theme switch">
        {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
      </StyledButton>
      {/* <StyledButton disabled>
        {theme === Theme.LIGHT ? (
          <Paragraph>AR</Paragraph>
        ) : (
          <Paragraph>EN</Paragraph>
        )}
      </StyledButton> */}
    </StyledSettingsBox>
  );
};

export default Settings;
