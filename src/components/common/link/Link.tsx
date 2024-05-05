import { StyledLink } from "./StyledLink";

interface ILink {
  children: React.ReactNode;
  href: string;
  style?: object;
}

const Link: React.FC<ILink> = ({ children, href, style }) => {
  return (
    <StyledLink target="_blank" href={href} style={style}>
      {children}
      <span className="arrow">&rarr;</span>
    </StyledLink>
  );
};

export default Link;
