import { useParams } from 'react-router-dom';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import { useGetVideoQuery } from '../../features/api/apiSlice';
import PlayerLoader from '../../shared/loaders/PlayerLoader';
import Error from '../../shared/Error/Error';

export default function Video() {
	// ! Required hooks and variables
	const { id } = useParams();
	const { data: video, isLoading, isError, error } = useGetVideoQuery(id);

	// decide what to render
	let content = null;
	if (isLoading) {
		content = <PlayerLoader />;
	} else if (!isLoading && isError) {
		content = <Error error={error} />;
	} else if (!isLoading && !isError && !video.title) {
		content = <h3 className='text-xl font-semibold'>No data found!</h3>;
	} else if (!isLoading && !isError && video.title) {
		content = (
			<div className='grid grid-cols-3 gap-2 lg:gap-8'>
				<VideoPlayer video={video} />

				<RelatedVideos />
			</div>
		);
	}

	return (
		<section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)]'>
			<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
				{content}
			</div>
		</section>
	);
}
