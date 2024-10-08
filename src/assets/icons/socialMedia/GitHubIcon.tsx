import { useTheme } from '@/contexts/ThemeContext';

const GitHubIcon = () => {
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
				d="M21 12c0 3.988-2.596 7.365-6.189 8.546l-.001-.006c-.43.07-.58-.2-.58-.43 0-.3.01-1.27.01-2.47 0-.84-.29-1.39-.61-1.67 2-.22 4.11-.98 4.11-4.44 0-.98-.35-1.78-.93-2.41.1-.23.41-1.15-.08-2.39 0 0-.76-.24-2.48.93-.72-.2-1.49-.3-2.25-.31-.77.01-1.54.11-2.25.31-1.72-1.17-2.48-.93-2.48-.93-.49 1.24-.18 2.16-.09 2.39-.57.63-.92 1.43-.92 2.41 0 3.45 2.1 4.22 4.1 4.45-.26.22-.49.62-.57 1.2-.52.23-1.82.63-2.62-.75 0 0-.48-.86-1.38-.92 0 0-.88-.01-.06.54 0 0 .59.28 1 1.32 0 0 .52 1.61 3.03 1.06 0 .75.01 1.46.01 1.68 0 .23-.16.5-.58.43 0 .003.002.005.003.008C5.598 19.368 3 15.99 3 12c0-4.971 4.029-9 9-9s9 4.029 9 9Z"
				fill={themeStyles.icon}
			></path>
		</svg>
	);
};

export default GitHubIcon;
