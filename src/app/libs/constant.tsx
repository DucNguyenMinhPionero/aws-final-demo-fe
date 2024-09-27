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

export const PER_PAGE_LIMIT = 10;
