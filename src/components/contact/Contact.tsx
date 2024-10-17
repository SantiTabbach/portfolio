import Whatsapp from '@/assets/icons/socialMedia/WhatsappIcon';
import { Button } from '../common/button/StyledButton';
import { Typography } from '../common';

const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
const message = 'Hello Santi! I’d like to get in touch.';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
	message
)}`;

const ContactButton = () => {
	const handleClick = () => {
		window.open(whatsappUrl, '_blank');
	};

	return (
		<Button onClick={handleClick}>
			<Typography.Subtitle fontSize="16">WhatsApp</Typography.Subtitle>
			<Whatsapp size={20} />
		</Button>
	);
};

export default ContactButton;
