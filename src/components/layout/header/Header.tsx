import { Typography } from '../../common';
import Avatar from '../../../assets/avatars/avatar.png';
import AvatarLight from '../../../assets/avatars/avatar-light.png';
import Settings from '../../settings/Settings';
import { Theme } from '../../../models';
import {
	StyledAvatar,
	StyledNameContainer,
	StyledSantiContainer,
} from './StyledHeader';
import useTranslation from '../../../hooks/useTranslation';
import { Fragment } from 'react/jsx-runtime';

const { Title } = Typography;

interface IHeader {
	theme: Theme;
	themeToggler: () => void;
}

const Header: React.FC<IHeader> = ({ theme, themeToggler }) => {
	const { t } = useTranslation();

	return (
		<Fragment>
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
		</Fragment>
	);
};

export default Header;
