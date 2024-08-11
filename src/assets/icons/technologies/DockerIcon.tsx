import { useTheme } from '@/contexts/ThemeContext';

const DockerIcon = () => {
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
			<g clipPath="url(#clip0_289_78)">
				<path
					d="M12.6001 41.25C13.2905 41.25 13.8501 40.6904 13.8501 40C13.8501 39.3096 13.2905 38.75 12.6001 38.75C11.9097 38.75 11.3501 39.3096 11.3501 40C11.3501 40.6904 11.9097 41.25 12.6001 41.25Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.25 23.75H3.75V31.25H11.25V23.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.75 23.75H11.25V31.25H18.75V23.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M26.25 23.75H18.75V31.25H26.25V23.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M33.75 23.75H26.25V31.25H33.75V23.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.75 16.25H11.25V23.75H18.75V16.25Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M26.25 16.25H18.75V23.75H26.25V16.25Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M33.75 16.25H26.25V23.75H33.75V16.25Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M33.75 8.75H26.25V16.25H33.75V8.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M41.25 23.75H33.75V31.25H41.25V23.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M58.75 28.75C58.75 28.75 54.375 25.95 51.25 27.5C51.1191 26.2476 50.7155 25.0392 50.0676 23.9594C49.4198 22.8797 48.5434 21.9549 47.5 21.25C46.7713 22.2835 46.266 23.4575 46.0164 24.6972C45.7667 25.9369 45.7782 27.215 46.05 28.45C46.0926 28.8026 46.0596 29.1602 45.9532 29.4991C45.8468 29.8379 45.6695 30.1502 45.4329 30.4151C45.1964 30.68 44.9061 30.8915 44.5814 31.0355C44.2568 31.1794 43.9051 31.2526 43.55 31.25H1.25C1.25 46.875 10.825 51.25 20 51.25C26.1288 51.2834 32.1552 49.6787 37.4559 46.602C42.7566 43.5253 47.1391 39.0883 50.15 33.75C51.8628 33.5997 53.5214 33.0737 55.0079 32.2095C56.4943 31.3453 57.772 30.1641 58.75 28.75Z"
					stroke={themeStyles.icon}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_289_78">
					<rect width="60" height="60" fill={themeStyles.icon} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default DockerIcon;
