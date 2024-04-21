import { useTheme } from "styled-components";

const NodeIcon = () => {
  const theme = useTheme();

  return (
    <svg
      className="technology-icon"
      width="53"
      height="60"
      viewBox="0 0 53 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_289_74)">
        <path
          d="M26.25 59.5313C25.4648 59.5313 24.668 59.3203 23.9766 58.9219L16.7461 54.6445C15.668 54.0352 16.1953 53.8242 16.5469 53.707C17.9883 53.2031 18.2812 53.0977 19.8164 52.2188C19.9805 52.125 20.1914 52.1602 20.3555 52.2656L25.9102 55.5586C26.1094 55.6758 26.3906 55.6758 26.5781 55.5586L48.2227 43.0664C48.4219 42.9492 48.5508 42.7148 48.5508 42.4805V17.4961C48.5508 17.25 48.4219 17.0273 48.2109 16.8984L26.5781 4.41797C26.3789 4.30078 26.1094 4.30078 25.9102 4.41797L4.28906 16.9102C4.07812 17.0273 3.94922 17.2617 3.94922 17.5078V42.4805C3.94922 42.7148 4.07812 42.9492 4.28906 43.0547L10.2187 46.4766C13.4414 48.082 15.4102 46.1953 15.4102 44.2852V19.6289C15.4102 19.2773 15.6914 19.0078 16.043 19.0078H18.7852C19.125 19.0078 19.418 19.2773 19.418 19.6289V44.2969C19.418 48.5859 17.0742 51.0469 13.0078 51.0469C11.7539 51.0469 10.7695 51.0469 8.02734 49.6875L2.35547 46.418C0.949219 45.6094 0.0820312 44.0977 0.0820312 42.4688V17.4961C0.0820312 15.8789 0.949219 14.3555 2.35547 13.5469L23.9766 1.05469C25.3477 0.28125 27.1641 0.28125 28.5234 1.05469L50.168 13.5586C51.5742 14.3672 52.4414 15.8789 52.4414 17.5078V42.4805C52.4414 44.0977 51.5742 45.6094 50.168 46.4297L28.5234 58.9219C27.832 59.3203 27.0469 59.5313 26.25 59.5313ZM43.7227 34.9102C43.7227 30.2344 40.5586 28.9922 33.9141 28.1133C27.1875 27.2227 26.5078 26.7656 26.5078 25.1953C26.5078 23.8945 27.082 22.1602 32.0625 22.1602C36.5039 22.1602 38.1445 23.1211 38.8242 26.1211C38.8828 26.4023 39.1406 26.6133 39.4336 26.6133H42.2461C42.4219 26.6133 42.5859 26.543 42.7031 26.4141C42.8203 26.2852 42.8789 26.1094 42.8672 25.9336C42.4336 20.7656 39 18.3633 32.0625 18.3633C25.8867 18.3633 22.207 20.9648 22.207 25.3359C22.207 30.0703 25.875 31.3828 31.793 31.9688C38.8828 32.6602 39.4336 33.7031 39.4336 35.0977C39.4336 37.5117 37.4883 38.543 32.9297 38.543C27.1992 38.543 25.9453 37.1016 25.5234 34.2539C25.4766 33.9492 25.2187 33.7266 24.9023 33.7266H22.1016C21.75 33.7266 21.4805 34.0078 21.4805 34.3477C21.4805 37.9922 23.4609 42.3398 32.9414 42.3398C39.7852 42.3281 43.7227 39.6211 43.7227 34.9102Z"
          fill={theme.icon}
        />
      </g>
      <defs>
        <clipPath id="clip0_289_74">
          <rect width="52.5" height="60" fill={theme.icon} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NodeIcon;
