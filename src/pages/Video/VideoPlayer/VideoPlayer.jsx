import authorImg from '../../../assets/author.png';
import editImg from '../../../assets/edit.svg';
import deleteImg from '../../../assets/delete.svg';
import { Link } from 'react-router-dom';

export default function VideoPlayer({ video }) {
	// ! Required variables
	const { id, title, description, link, date } = video;

	return (
		<div className='col-span-full w-full space-y-8 lg:col-span-2'>
			{/* <!-- video player --> */}
			<iframe
				width='100%'
				className='aspect-video'
				src={link}
				title={title}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe>

			{/* <!-- video description --> */}
			<div className=''>
				<div className='pb-4 flex items-center justify-between border-b'>
					<div className='flex items-center'>
						<img src={authorImg} alt={title} className='w-14 h-14 mr-2' />
						<div className='text-start'>
							<h1 className='text-lg font-semibold tracking-tight text-slate-800'>
								{title}
							</h1>
							<h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>
								Uploaded on {date}
							</h2>
						</div>
					</div>

					{/* <!-- delete/edit --> */}
					<div className='flex gap-10 w-48'>
						<div className='flex gap-1'>
							<Link to={`/editVideo/${id}`} className='shrink-0'>
								<img
									className='w-5 block'
									src={editImg}
									alt='Edit'
								/>
							</Link>
							<Link
								to={`/editVideo/${id}`}
								className='text-sm leading-[1.7142857] text-slate-600'>
								Edit
							</Link>
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
					{description}
				</div>
			</div>
		</div>
	);
}
