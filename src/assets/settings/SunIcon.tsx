import { useTheme } from "styled-components";

const SunIcon = () => {
  const theme = useTheme();

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_351_233)">
        <path
          d="M128 188C161.137 188 188 161.137 188 128C188 94.8629 161.137 68 128 68C94.8629 68 68 94.8629 68 128C68 161.137 94.8629 188 128 188Z"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M128 36V16"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62.9001 62.9001L48.8 48.8"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36 128H16"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62.9001 193.1L48.8 207.2"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M128 220V240"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M193.1 193.1L207.2 207.2"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M220 128H240"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M193.1 62.9001L207.2 48.8"
          stroke={theme.text}
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_351_233">
          <rect width="256" height="256" fill={theme.text} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SunIcon;
