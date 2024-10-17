import { useTheme } from '@/contexts/ThemeContext';

const WhatsappIcon = ({ size = 24 }: { size?: number }) => {
	const { themeStyles } = useTheme();

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={themeStyles.icon}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75 0 1.637.415 3.25 1.202 4.687l-1.544 5.405 5.404-1.544A9.753 9.753 0 0 0 12 21.75c5.376 0 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm0 18a8.249 8.249 0 0 1-4.207-1.155l-.278-.165-3.423.978.978-3.423-.164-.278a8.255 8.255 0 0 1-1.155-4.208C3.75 7.451 7.451 3.75 12 3.75s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25Zm4.965-5.986c.06.101.06.605-.14 1.179-.21.585-1.212 1.129-1.662 1.179-.451.051-.872.212-2.955-.614-2.504-.998-4.086-3.578-4.206-3.739C7.882 12.108 7 10.929 7 9.71s.631-1.814.861-2.066a.91.91 0 0 1 .661-.312c.17 0 .33 0 .481.01.17 0 .371.01.551.423.22.494.691 1.713.751 1.824.06.12.1.272.02.433-.091.161-.13.272-.25.413-.12.141-.261.323-.371.433-.13.121-.25.252-.11.504.151.242.641 1.058 1.372 1.713.942.847 1.733 1.109 1.983 1.229.24.121.39.101.531-.06.15-.161.621-.715.781-.967.16-.242.321-.202.551-.121.231.081 1.432.685 1.683.806.24.131.411.191.471.292Z"
				fill={themeStyles.icon}
			></path>
		</svg>
	);
};

export default WhatsappIcon;
