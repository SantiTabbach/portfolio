import { useTranslation } from 'react-i18next';
import { Theme } from '@/models';
import { Typography } from '@/components/common';
import AvatarDark from '@/assets/avatars/avatar.png';
import AvatarLight from '@/assets/avatars/avatar-light.png';
import { Avatar, NameContainer, Container } from './StyledHeader';

const { Title } = Typography;

const avatar = {
	[Theme.LIGHT]: AvatarLight,
	[Theme.DARK]: AvatarDark,
};

interface IHeader {
	theme: Theme;
}

const Header: React.FC<IHeader> = ({ theme }) => {
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

export default Header;
