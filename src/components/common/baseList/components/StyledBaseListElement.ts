import styled from 'styled-components';
import GlassBox from '../../glassBox/GlassBox';

export const Container = styled(GlassBox)`
	margin-bottom: 10px;
`;

export const Footer = styled.div`
	margin-top: 20px;
	padding-top: 20px;
	border-top: ${({ theme }) => theme.glassBox.footer.borderTop};
`;
