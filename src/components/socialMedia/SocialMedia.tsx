import { GlassBox } from "../common";
import {
  MediumIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "../../assets/socialMedia";
import "./SocialMedia.css";

type TMediaButton = {
  icon: string;
  url: string;
  title: string;
};

const MEDIA_BUTTONS: TMediaButton[] = [
  {
    icon: LinkedinIcon,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/santiago-tabbach/",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    url: "https://github.com/SantiTabbach",
  },
  {
    icon: MediumIcon,
    title: "Medium",
    url: "https://medium.com/@ymmhydfct",
  },
  {
    icon: MailIcon,
    title: "Mail",
    url: "mailto:tabbach97@gmail.com",
  },
];

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <GlassBox active>
        <div className="social-media-content">
          {MEDIA_BUTTONS.map(({ icon, url, title }) => (
            <a className="media-btn" key={icon} href={url} title={title}>
              <img className="media-icon" src={icon} />
            </a>
          ))}
        </div>
      </GlassBox>
    </div>
  );
};

export default SocialMedia;
