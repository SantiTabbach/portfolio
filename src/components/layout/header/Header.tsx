import { Typography } from '../../common';
import Avatar from '../../../assets/avatars/avatar.png';
import AvatarLight from '../../../assets/avatars/avatar-light.png';
import Settings from '../../settings/Settings';
import { Theme } from '../../../models';
import {
	StyledAvatar,
	StyledHeaderContainer,
	StyledNameContainer,
	StyledSantiContainer,
} from './StyledHeader';
import useTranslation from '../../../hooks/useTranslation';

const { Title } = Typography;

interface IHeader {
	theme: Theme;
	themeToggler: () => void;
}

const Header: React.FC<IHeader> = ({ theme, themeToggler }) => {
	const { t } = useTranslation();

	return (
		<StyledHeaderContainer>
			<StyledSantiContainer>
				<StyledAvatar
					alt="santi memoji"
					className="avatar"
					src={theme === Theme.LIGHT ? AvatarLight : Avatar}
				/>
				<StyledNameContainer>
					<Title fontWeight="100">{t('firstname')}</Title>
					<Title>{t('lastname')}</Title>
				</StyledNameContainer>
			</StyledSantiContainer>
			<div className="settings-container">
				<Settings theme={theme} themeToggler={themeToggler} />
			</div>
		</StyledHeaderContainer>
	);
};

export default Header;
