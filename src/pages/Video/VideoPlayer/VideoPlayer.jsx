import editImg from '../../../assets/edit.svg';
import deleteImg from '../../../assets/delete.svg';

export default function VideoPlayer() {
	return (
		<div className='col-span-full w-full space-y-8 lg:col-span-2'>
			{/* <!-- video player --> */}
			<iframe
				width='100%'
				className='aspect-video'
				src='https://www.youtube-nocookie.com/embed/6O4s7v28nlw'
				title='Some video title'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe>

			{/* <!-- video description --> */}
			<div className=''>
				<div className='pb-4 flex items-center justify-between border-b'>
					<div className='text-start'>
						<h1 className='text-lg font-semibold tracking-tight text-slate-800'>
							Some video title
						</h1>
						<h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>
							Uploaded on 23 Nov 2022
						</h2>
					</div>

					{/* <!-- delete/edit --> */}
					<div className='flex gap-10 w-48'>
						<div className='flex gap-1'>
							<div className='shrink-0'>
								<img
									className='w-5 block'
									src={editImg}
									alt='Edit'
								/>
							</div>
							<a
								href='add-video.html'
								className='text-sm leading-[1.7142857] text-slate-600'>
								Edit
							</a>
						</div>
						<div className='flex gap-1'>
							<div className='shrink-0'>
								<img
									className='w-5 block'
									src={deleteImg}
									alt='Delete'
								/>
							</div>
							<div className='text-sm leading-[1.7142857] text-slate-600 cursor-pointer'>
								Delete
							</div>
						</div>
					</div>
				</div>

				<div className='mt-4 text-sm text-[#334155] text-start dark:text-slate-400'>
					Some video description here
				</div>
			</div>
		</div>
	);
}