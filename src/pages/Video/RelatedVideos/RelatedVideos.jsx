import { useGetRelatedVideosQuery } from '../../../features/api/apiSlice';
import PlayerLoader from '../../../shared/loaders/PlayerLoader';
import Video from '../Video/Video';

export default function RelatedVideos({ id, title }) {
	// ! Required variables
	const {
		data: videos,
		isLoading,
		isError,
		error,
	} = useGetRelatedVideosQuery({ id, title });

	// decide what to render
	let content = null;
	if (isLoading) {
		content = <PlayerLoader />;
	} else if (!isLoading && !isError && videos.length > 0) {
		content = videos.map((video) => (
			<Video key={video.id} details={video} />
		));
	}

	return (
		<div className='col-span-full lg:col-auto overflow-y-auto'>
			{content}
		</div>
	);
}
