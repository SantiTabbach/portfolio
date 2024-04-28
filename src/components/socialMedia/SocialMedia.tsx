import { GlassBox } from "../common";
import {
  MediumIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "../../assets/icons/socialMedia";
import {
  StyledMediaBtn,
  StyledSocialMediaContainer,
  StyledSocialMediaContent,
} from "./StyledSocialMedia";

type TMediaButton = {
  icon: JSX.Element;
  url: string;
  title: string;
};

const MEDIA_BUTTONS: TMediaButton[] = [
  {
    icon: <LinkedinIcon />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/santiago-tabbach/",
  },
  {
    icon: <GithubIcon />,
    title: "GitHub",
    url: "https://github.com/SantiTabbach",
  },
  {
    icon: <MediumIcon />,
    title: "Medium",
    url: "https://medium.com/@ymmhydfct",
  },
  {
    icon: <MailIcon />,
    title: "Mail",
    url: "mailto:tabbach97@gmail.com",
  },
];

const SocialMedia = () => {
  return (
    <StyledSocialMediaContainer>
      <GlassBox active>
        <StyledSocialMediaContent>
          {MEDIA_BUTTONS.map(({ icon, url, title }) => (
            <StyledMediaBtn
              target="_blank"
              className="media-btn"
              key={url}
              href={url}
              title={title}
            >
              {icon}
            </StyledMediaBtn>
          ))}
        </StyledSocialMediaContent>
      </GlassBox>
    </StyledSocialMediaContainer>
  );
};

export default SocialMedia;
