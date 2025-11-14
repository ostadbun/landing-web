import type { PageLoad } from './$types';


export const load: PageLoad = ({ params }) => {

	return {
		slug: params.lessonID,
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};



};