import { StyledLink } from "./StyledLink";

interface ILink {
  children: React.ReactNode;
  href: string;
  style?: object;
}

const Link: React.FC<ILink> = ({ children, href, style }) => {
  return (
    <StyledLink target="_blank" href={href} style={style}>
      <span style={{ display: "inline-block" }}>
        {children}
        <span className="arrow">&rarr;</span>
      </span>
    </StyledLink>
  );
};

export default Link;
