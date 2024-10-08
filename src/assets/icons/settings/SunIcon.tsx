import { useTheme } from '@/contexts/ThemeContext';

const SunIcon = () => {
	const { themeStyles } = useTheme();

	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 256 256"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_351_233)">
				<path
					d="M128 188C161.137 188 188 161.137 188 128C188 94.8629 161.137 68 128 68C94.8629 68 68 94.8629 68 128C68 161.137 94.8629 188 128 188Z"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M128 36V16"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M62.9001 62.9001L48.8 48.8"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M36 128H16"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M62.9001 193.1L48.8 207.2"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M128 220V240"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M193.1 193.1L207.2 207.2"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M220 128H240"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M193.1 62.9001L207.2 48.8"
					stroke={themeStyles.text}
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_351_233">
					<rect width="256" height="256" fill={themeStyles.text} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default SunIcon;
