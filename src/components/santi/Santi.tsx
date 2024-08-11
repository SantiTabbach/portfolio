import { useTranslation } from 'react-i18next';
import { THEME } from '@/enums';
import { Typography } from '@/components';
import AvatarDark from '@/assets/avatars/avatar.png';
import AvatarLight from '@/assets/avatars/avatar-light.png';
import { Avatar, NameContainer, Container } from './StyledSanti';

const { Title } = Typography;

const avatar = {
	[THEME.LIGHT]: AvatarLight,
	[THEME.DARK]: AvatarDark,
};

interface ISanti {
	theme: THEME;
}

const Santi: React.FC<ISanti> = ({ theme }) => {
	const { t } = useTranslation();

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
