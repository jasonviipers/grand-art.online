'use client';

import {useEffect, useRef, useState} from 'react';

export default function BackgroundVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playbackRate, _setPlaybackRate] = useState(0.5);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackRate;
		}
	}, [playbackRate]);

	return (
		<div className="absolute top-0 left-0 w-full h-full bg-black/50">
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
			>
				<source src="/video.webm" type="video/webm" />
			</video>
		</div>
	);
}
