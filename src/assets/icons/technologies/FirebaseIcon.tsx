import { useTheme } from '@/contexts/ThemeContext';

const FirebaseIcon = () => {
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
			<path
				d="M10 46L46 14L50 50L30 58L10 46ZM10 46L30 10L38 22M10 46L14 2L26 14"
				stroke={themeStyles.icon}
				strokeWidth="3.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default FirebaseIcon;
