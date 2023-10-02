export default function AddVideo() {
	return (
		<section className='pt-6 pb-20 min-h-[calc(100vh_-_157px)] text-start'>
			<div className='max-w-7xl mx-auto px-5 lg:px-0'>
				<div className='w-full'>
					<div className='px-4 sm:px-0 pb-4'>
						<h3 className='text-lg font-medium leading-6 text-gray-900'>
							Add new video
						</h3>
						<p className='mt-1 text-sm text-gray-600'>
							Please fillup the form to add new video
						</p>
					</div>
					<div className='mt-5 md:mt-0 md:col-span-2'>
						<form action='#' method='POST'>
							<div className='shadow overflow-hidden sm:rounded-md'>
								<div className='px-4 py-5 bg-white sm:p-6'>
									<div className='grid grid-cols-6 gap-6'>
										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='video-title'
												className='block text-sm font-medium text-gray-700'>
												Video Title
											</label>
											<input
												type='text'
												name='title'
												id='video-title'
												className='px-3 py-1 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3'>
											<label
												htmlFor='author-name'
												className='block text-sm font-medium text-gray-700'>
												Author
											</label>
											<input
												type='text'
												name='name'
												id='author-name'
												className='px-3 py-1 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='description'
												className='block text-sm font-medium text-gray-700'>
												Description
											</label>
											<div className='mt-1'>
												<textarea
													id='description'
													name='description'
													rows='3'
													className='p-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'></textarea>
											</div>
											<p className='mt-2 text-sm text-gray-500'>
												Brief description for your video
											</p>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='video'
												className='block text-sm font-medium text-gray-700'>
												YouTube Video Link
											</label>
											<input
												type='text'
												name='video'
												id='video'
												className='px-3 py-1 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6'>
											<label
												htmlFor='thumbnail'
												className='block text-sm font-medium text-gray-700'>
												Thumbnail link
											</label>
											<input
												type='text'
												name='thumbnail'
												id='thumbnail'
												className='px-3 py-1 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6 sm:col-span-6 lg:col-span-2'>
											<label
												htmlFor='date'
												className='block text-sm font-medium text-gray-700'>
												Date
											</label>
											<input
												type='text'
												name='date'
												id='date'
												className='px-3 py-1 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='duration'
												className='block text-sm font-medium text-gray-700'>
												Duration
											</label>
											<input
												type='text'
												name='duration'
												id='duration'
												className='px-3 py-1 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>

										<div className='col-span-6 sm:col-span-3 lg:col-span-2'>
											<label
												htmlFor='views'
												className='block text-sm font-medium text-gray-700'>
												Views
											</label>
											<input
												type='text'
												name='views'
												id='views'
												className='px-3 py-1 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
											/>
										</div>
									</div>
								</div>
								<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
									<button
										type='submit'
										className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500'>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
