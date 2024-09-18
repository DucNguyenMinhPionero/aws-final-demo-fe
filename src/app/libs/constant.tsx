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

export const MOCK_CANDIDATE = [
	{
		id: "candidate-id",
		name: "candidate-name",
		email: "candidate@gmail.com",
		profileUrl: "candidate-url",
		postId: "post-id",
	},
];
