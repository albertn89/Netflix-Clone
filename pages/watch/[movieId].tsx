import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useMovie from "@/hooks/useMovie";

const Watch = () => {
	const router = useRouter();
	const { movieId } = router.query;

	const { data } = useMovie(movieId as string);

	return (
		<div className="h-screen w-screen bg-black">
			<nav
				className="
					fixed
					w-full
					p-
					z-10
					flex
					flex-wor
					items-center
					gap-8
					bg-black
					bg-opacity-70
				"
			>
				<AiOutlineArrowLeft
					onClick={() => router.push("/")}
					className="text-white text-3xl cursor-pointer"
					size={40}
				/>
				<p className="text-white text-1xl md:text-3x; font-bold">
					<span className="font-light">Watching: </span>
					{data?.title}
				</p>
			</nav>
			<video autoPlay controls className="h-full w-ull" src={data?.videoUrl}></video>
		</div>
	);
};

export default Watch;
