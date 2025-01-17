import { useTheme } from '@/contexts/ThemeContext';

const NextJsIcon = () => {
	const { themeStyles } = useTheme();

	return (
		<svg
			className="technology-icon"
			width="120"
			height="120"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M36 36L39.2427 33.658C38.2269 32.2515 36.4202 31.6602 34.7694 32.194C33.1185 32.7278 32 34.265 32 36H36ZM60 112C31.2812 112 8 88.7192 8 60H0C0 93.1368 26.8629 120 60 120V112ZM112 60C112 88.7192 88.7192 112 60 112V120C93.1368 120 120 93.1368 120 60H112ZM60 8C88.7192 8 112 31.2812 112 60H120C120 26.8629 93.1368 0 60 0V8ZM60 0C26.8629 0 0 26.8629 0 60H8C8 31.2812 31.2812 8 60 8V0ZM40 96V36H32V96H40ZM32.7573 38.342L84.7576 110.342L91.2424 105.658L39.2427 33.658L32.7573 38.342ZM80 32V80H88V32H80Z"
				fill={themeStyles.icon}
			/>
		</svg>
	);
};

export default NextJsIcon;
