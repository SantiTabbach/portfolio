import { useTheme } from '@/contexts/ThemeContext';

const TypescriptIcon = () => {
	const { themeStyles } = useTheme();

	return (
		<svg
			className="technology-icon"
			width="60"
			height="60"
			viewBox="0 0 60 60"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_110_124)">
				<path
					d="M50 32V31.3333C50 28.3878 47.612 26 44.6668 26H40C36.6863 26 34 28.6863 34 32C34 35.3137 36.6863 38 40 38H44C47.3136 38 50 40.6864 50 44C50 47.3136 47.3136 50 44 50H40C36.6863 50 34 47.3136 34 44M32 26H12M22 26V52M2 2H58V58H2V2Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_110_124">
					<rect width="60" height="60" fill={themeStyles.icon} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default TypescriptIcon;
