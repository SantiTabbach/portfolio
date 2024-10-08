import { useTheme } from '@/contexts/ThemeContext';

const MediumIcon = () => {
	const { themeStyles } = useTheme();

	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={themeStyles.icon}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13 12a5 5 0 1 1-10.001-.001A5 5 0 0 1 13 12Zm3.107-4.811c-1.402 0-2.538 2.155-2.538 4.811s1.137 4.811 2.538 4.811 2.538-2.154 2.538-4.811-1.137-4.811-2.538-4.811Zm4 .501c-.493 0-.893 1.931-.893 4.311s.4 4.311.893 4.311.893-1.93.893-4.311-.399-4.311-.893-4.311Z"
				fill={themeStyles.icon}
			></path>
		</svg>
	);
};

export default MediumIcon;
