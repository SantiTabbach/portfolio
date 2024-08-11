import { useTranslation } from 'react-i18next';
import { THEME } from '@/enums';
import { Typography } from '@/components';
import AvatarDark from '@/assets/avatars/avatar.png';
import AvatarLight from '@/assets/avatars/avatar-light.png';
import { Avatar, NameContainer, Container } from './StyledSanti';
import { useTheme } from '@/theme/hooks/useTheme';

const { Title } = Typography;

const avatar = {
	[THEME.LIGHT]: AvatarLight,
	[THEME.DARK]: AvatarDark,
};

const Santi: React.FC = () => {
	const { t } = useTranslation();

	const { theme } = useTheme();

	return (
		<Container>
			<Avatar alt="santi memoji" src={avatar[theme]} />
			<NameContainer>
				<Title fontWeight="100">{t('firstname')}</Title>
				<Title>{t('lastname')}</Title>
			</NameContainer>
		</Container>
	);
};

export default Santi;
