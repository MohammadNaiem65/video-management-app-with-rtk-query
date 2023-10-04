import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000',
	}),
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => '/videos',
		}),
		getVideo: builder.query({
			query: (id) => `/videos/${id}`,
			keepUnusedDataFor: 300,
		}),
		getRelatedVideos: builder.query({
			query: ({ id, title }) => {
				const string = title
					.split(' ')
					.map((word) => `title_like=${word}`)
					.join('&');

				const queryString = `/videos/?${string}&id_ne=${id}`;

				return queryString;
			},
			keepUnusedDataFor: 300,
		}),
		addVideo: builder.mutation({
			query: (data) => ({
				url: '/videos',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation } =
	apiSlice;
