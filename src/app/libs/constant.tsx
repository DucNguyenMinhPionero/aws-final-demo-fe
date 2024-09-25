import CandidateSvg from "./svg/candidate-svg";
import EmailSvg from "./svg/email-svg";
import PostSvg from "./svg/post-svg";
import UserSvg from "./svg/user-svg";

type SideBarProps = {
	name: string;
	icon: JSX.Element;
	href: string;
};

export const SIDE_BAR_ITEMS: SideBarProps[] = [
	{
		name: "Users",
		icon: <UserSvg />,
		href: "/",
	},
	{
		name: "Candidates",
		icon: <CandidateSvg />,
		href: "/candidates",
	},
	{
		name: "Posts",
		icon: <PostSvg />,
		href: "/posts",
	},
	{
		name: "Email & Crawling",
		icon: <EmailSvg />,
		href: "/email",
	},
];

export const MOCK_USER = [
	{
		username: "user-name",
		email: "user-name@gmail.com",
	},
];

export const MOCK_POST = [
	{
		id: "post-id",
		postUrl: "post-url",
		content: "post-content",
		candidateId: "candidate-id",
	},
];
