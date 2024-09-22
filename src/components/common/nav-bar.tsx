"use client";

import {
	withAuthenticator,
	WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar({ user }: WithAuthenticatorProps) {
	const [isDropdown, setDropdown] = useState(false);

	return (
		<div>
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						{/* Company Icon */}
						<div className="flex items-center justify-start rtl:justify-end">
							<Link href="/" className="flex ms-2 md:me-24">
								<Image
									src="/pionero.jpeg"
									width={40}
									height={40}
									className="h-8 me-3"
									alt="Pionero Logo"
								/>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									Pionero
								</span>
							</Link>
						</div>

						{/* User Icon */}
						<div className="flex items-center">
							<div className="flex items-center ms-3">
								<div>
									<button
										onClick={() => setDropdown(!isDropdown)}
										type="button"
										className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									>
										<span className="sr-only">Open user menu</span>
										<Image
											className="w-8 h-8 rounded-full"
											src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
											alt="user photo"
											width={40}
											height={40}
										/>
									</button>
								</div>

								{/* Drop down */}
								{isDropdown && (
									<div className="absolute right-0 top-10 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
										<div className="px-4 py-3" role="none">
											<p
												className="text-sm text-gray-900 dark:text-white"
												role="none"
											>
												{user?.username}
											</p>
											<p
												className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
												role="none"
											>
												{user?.signInDetails?.loginId}
											</p>
										</div>
										<ul className="py-1" role="none">
											{/* <li>
												<Link
													href="/"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem"
												>
													Settings
												</Link>
											</li> */}
											<li>
												<p
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
													onClick={() => signOut()}
												>
													Sign out
												</p>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default withAuthenticator(NavBar);
