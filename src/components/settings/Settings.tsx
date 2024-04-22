import { MoonIcon, SunIcon } from "../../assets/settings";
import { Theme } from "../../models";
import { Typography } from "../common";
import { StyledSettingsBox, StyledButton } from "./StyledSettings";

interface ISettings {
  theme: Theme;
  themeToggler: () => void;
}

const { Paragraph } = Typography;

const Settings: React.FC<ISettings> = ({ theme, themeToggler }) => {
  return (
    <StyledSettingsBox>
      <StyledButton onClick={themeToggler}>
        {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
      </StyledButton>
      <StyledButton disabled>
        {/* {theme === Theme.LIGHT ? (
          <Paragraph>AR</Paragraph>
        ) : (
          <Paragraph>EN</Paragraph>
        )} */}
        <Paragraph color={theme === Theme.LIGHT ? "#D4D4D4" : "#31363F"}>
          EN
        </Paragraph>
      </StyledButton>
    </StyledSettingsBox>
  );
};

export default Settings;
