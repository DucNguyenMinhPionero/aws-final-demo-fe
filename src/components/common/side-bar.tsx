"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SIDE_BAR_ITEMS } from "@/app/libs/constant";
import CloseSvg from "@/app/libs/svg/close-svg";

export default function SideBar() {
	const [isCloseBeta, setCloseBeta] = useState(false);

	const path = usePathname();

	return (
		<aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					{SIDE_BAR_ITEMS.map((item, index) => (
						<li key={`${index}-${item.name}`}>
							<Link
								href={item.href}
								className={clsx(
									"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
									path === item.href ? "bg-gray-700" : "",
								)}
							>
								{item.icon}
								<span className="ms-3">{item.name}</span>
							</Link>
						</li>
					))}
				</ul>
				<div
					id="dropdown-cta"
					className={clsx(
						"p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900",
						isCloseBeta ? "hidden" : "",
					)}
					role="alert"
				>
					<div className="flex items-center mb-3">
						<span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
							Beta
						</span>
						<button
							type="button"
							className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
							data-dismiss-target="#dropdown-cta"
							aria-label="Close"
							onClick={() => setCloseBeta(true)}
						>
							<span className="sr-only">Close</span>
							<CloseSvg />
						</button>
					</div>
					<p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
						Preview the new Crawling Application!
					</p>
				</div>
			</div>
		</aside>
	);
}
