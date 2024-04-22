import { MoonIcon, SunIcon } from "../../assets/settings";
import { Theme } from "../../theme/models/types";
import { Typography } from "../common";
import { SettingsBox, Button } from "./styled/Settings";

interface ISettings {
  theme: Theme;
  themeToggler: () => void;
}

const { Paragraph } = Typography;

const Settings: React.FC<ISettings> = ({ theme, themeToggler }) => {
  return (
    <SettingsBox>
      <Button onClick={themeToggler}>
        {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Button disabled>
        {/* {theme === Theme.LIGHT ? (
          <Paragraph>AR</Paragraph>
        ) : (
          <Paragraph>EN</Paragraph>
        )} */}
        <Paragraph color={theme === Theme.LIGHT ? "#D4D4D4" : "#31363F"}>
          EN
        </Paragraph>
      </Button>
    </SettingsBox>
  );
};

export default Settings;
