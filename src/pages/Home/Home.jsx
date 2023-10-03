import { useGetVideosQuery } from '../../features/api/apiSlice';
import Error from '../../shared/Error/Error';
import VideoLoader from '../../shared/loaders/VideoLoader';
import Video from './Video/Video';

export default function Home() {
	// ! Required hooks and variables
	const { data: videos, isLoading, isError, error } = useGetVideosQuery();

	// decide what to render
	let content = null;
	if (!isLoading && isError) content = <Error error={error} />;
	else if (isLoading) {
		content = (
			<>
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
			</>
		);
	} else if (!isLoading && !isError && videos.length === 0) {
		content = <h3 className='text-xl font-semibold'>No data found.</h3>;
	} else if (!isLoading && !isError && videos.length > 0) {
		content = videos.map((video) => (
			<Video key={video.id} details={video} />
		));
	}
	return (
		<section className='pt-6 px-4 pb-20 min-h-[calc(100vh_-_157px)]'>
			<div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
				{content}
			</div>
		</section>
	);
}
