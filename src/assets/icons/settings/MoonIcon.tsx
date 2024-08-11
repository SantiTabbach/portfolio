import { useTheme } from '@/contexts/ThemeContext';

const MoonIcon = () => {
	const { themeStyles } = useTheme();

	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 256 256"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_351_244)">
				<path
					d="M96 4.44789C97.5618 6.34569 98.5186 8.66824 98.7468 11.1155C98.975 13.5627 98.464 16.0221 97.28 18.1759C88.0297 35.1595 83.1989 54.1966 83.232 73.5359C83.232 137.872 135.68 189.968 200.32 189.968C208.752 189.968 216.96 189.088 224.848 187.408C227.266 186.884 229.785 187.085 232.09 187.984C234.394 188.883 236.383 190.441 237.808 192.464C239.312 194.567 240.079 197.108 239.989 199.692C239.899 202.276 238.958 204.758 237.312 206.752C224.763 222.167 208.932 234.587 190.973 243.107C173.015 251.627 153.381 256.031 133.504 256C59.744 256 0 196.576 0 123.36C0 68.2559 33.824 20.9919 81.984 0.959893C84.383 -0.0539972 87.0462 -0.262094 89.5736 0.366864C92.101 0.995821 94.356 2.42787 96 4.44789ZM77.728 20.9759C59.2097 30.9092 43.7286 45.6742 32.9301 63.7017C22.1316 81.7292 16.4192 102.346 16.4 123.36C16.4 187.68 68.864 239.776 133.504 239.776C148.983 239.803 164.314 236.759 178.609 230.821C192.904 224.884 205.879 216.17 216.784 205.184C211.392 205.856 205.904 206.192 200.32 206.192C126.56 206.192 66.832 146.768 66.832 73.5519C66.832 54.8799 70.704 37.1039 77.728 20.9759Z"
					fill={themeStyles.text}
				/>
				<path
					d="M172.704 50.368C172.933 49.6751 173.375 49.0721 173.967 48.6448C174.559 48.2174 175.27 47.9874 176 47.9874C176.73 47.9874 177.441 48.2174 178.033 48.6448C178.625 49.0721 179.066 49.6751 179.296 50.368L185.488 68.96C188.256 77.248 194.752 83.744 203.04 86.512L221.632 92.704C222.325 92.9334 222.928 93.3754 223.355 93.9671C223.782 94.5588 224.012 95.2701 224.012 96C224.012 96.7299 223.782 97.4412 223.355 98.0329C222.928 98.6246 222.325 99.0665 221.632 99.296L203.04 105.488C198.952 106.85 195.238 109.145 192.191 112.192C189.145 115.238 186.85 118.952 185.488 123.04L179.296 141.632C179.066 142.325 178.625 142.928 178.033 143.355C177.441 143.783 176.73 144.013 176 144.013C175.27 144.013 174.559 143.783 173.967 143.355C173.375 142.928 172.933 142.325 172.704 141.632L166.512 123.04C165.15 118.952 162.855 115.238 159.808 112.192C156.762 109.145 153.048 106.85 148.96 105.488L130.368 99.296C129.675 99.0665 129.072 98.6246 128.645 98.0329C128.217 97.4412 127.987 96.7299 127.987 96C127.987 95.2701 128.217 94.5588 128.645 93.9671C129.072 93.3754 129.675 92.9334 130.368 92.704L148.96 86.512C153.048 85.1501 156.762 82.8549 159.808 79.8084C162.855 76.7618 165.15 73.0476 166.512 68.96L172.704 50.368ZM221.808 1.58397C221.966 1.12839 222.262 0.733343 222.655 0.453754C223.048 0.174164 223.518 0.0239258 224 0.0239258C224.482 0.0239258 224.952 0.174164 225.345 0.453754C225.738 0.733343 226.034 1.12839 226.192 1.58397L230.32 13.968C232.16 19.504 236.496 23.84 242.032 25.68L254.416 29.808C254.871 29.9659 255.267 30.2619 255.546 30.6547C255.826 31.0476 255.976 31.5178 255.976 32C255.976 32.4821 255.826 32.9524 255.546 33.3452C255.267 33.738 254.871 34.034 254.416 34.192L242.032 38.32C239.304 39.2275 236.825 40.7586 234.792 42.7917C232.759 44.8248 231.227 47.3038 230.32 50.032L226.192 62.416C226.034 62.8715 225.738 63.2666 225.345 63.5462C224.952 63.8258 224.482 63.976 224 63.976C223.518 63.976 223.048 63.8258 222.655 63.5462C222.262 63.2666 221.966 62.8715 221.808 62.416L217.68 50.032C216.772 47.3038 215.241 44.8248 213.208 42.7917C211.175 40.7586 208.696 39.2275 205.968 38.32L193.584 34.192C193.128 34.034 192.733 33.738 192.454 33.3452C192.174 32.9524 192.024 32.4821 192.024 32C192.024 31.5178 192.174 31.0476 192.454 30.6547C192.733 30.2619 193.128 29.9659 193.584 29.808L205.968 25.68C211.504 23.84 215.84 19.504 217.68 13.968L221.808 1.59997V1.58397Z"
					fill={themeStyles.text}
				/>
			</g>
			<defs>
				<clipPath id="clip0_351_244">
					<rect width="256" height="256" fill={themeStyles.text} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default MoonIcon;
