import { useTheme } from '@/contexts/ThemeContext';

const DownloadFileIcon = ({ size }: { size: number }) => {
	const { themeStyles } = useTheme();

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="#25314C"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m20.53 8.47-6-6a.747.747 0 0 0-.53-.22H8A3.383 3.383 0 0 0 4.25 6v12A3.383 3.383 0 0 0 8 21.75h9A3.383 3.383 0 0 0 20.75 18V9a.747.747 0 0 0-.22-.53Zm-5.78-3.659 3.439 3.439H17c-1.577 0-2.25-.673-2.25-2.25ZM17 20.25H8c-1.577 0-2.25-.673-2.25-2.25V6c0-1.577.673-2.25 2.25-2.25h5.25V6A3.383 3.383 0 0 0 17 9.75h2.25V18c0 1.577-.673 2.25-2.25 2.25Zm-3.47-5.78a.749.749 0 0 1 0 1.06l-2 2a.751.751 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.719V12a.75.75 0 0 1 1.5 0v3.189l.72-.719a.749.749 0 0 1 1.06 0Z"
				fill={themeStyles.icon}
			></path>
		</svg>
	);
};

export default DownloadFileIcon;
