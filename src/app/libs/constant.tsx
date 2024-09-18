import CandidateSvg from "./svg/candidate-svg";
import PostSvg from "./svg/post-svg";
import UserSvg from "./svg/user-svg";

export const SIDE_BAR_ITEMS = [
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
];
