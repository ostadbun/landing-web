import type { PageLoad } from './$types';


export const load: PageLoad = ({ params }) => {

	return {
		slug: params.professorID,
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
		segmentTitle:'سیاوش شهشهانی'
	};



};