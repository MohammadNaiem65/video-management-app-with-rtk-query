import RelatedVideos from './RelatedVideos/RelatedVideos';
import VideoPlayer from './VideoPlayer/VideoPlayer';

export default function Video() {
	return (
		<section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)]'>
			<div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
				<div className='grid grid-cols-3 gap-2 lg:gap-8'>
					<VideoPlayer />

					{/* <!-- related videos --> */}
					<RelatedVideos />
				</div>
			</div>
		</section>
	);
}
