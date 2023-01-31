import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from '@chakra-ui/react'
import { BsClockHistory, BsChatRightText } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";

const Profile = () => {

	const user = {
		name: 'Christian Nwamba',
		userName: 'StanWuKong'
	};

	return ( 
		<Box>
			<WrapItem>
				<Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
			</WrapItem>
			<Text>{user.name} ({user.userName})</Text>
			<ButtonGroup>
				<Button leftIcon={<BsClockHistory/>}>Recent Searches</Button>
				<Button leftIcon={<AiOutlineHeart/>}>Save items</Button>
				<Button leftIcon={<BsChatRightText/>}>Send feedback</Button>
				<Button leftIcon={<VscSignOut/>}>Sign Out</Button>


			</ButtonGroup>
		</Box>
	 );
}
 
export default Profile;