import bumpsheep from '../../assets/images/bumpsheep.png';

const initState = {
	bgGrey: true,
	mainTitle: 'final project',
	projects: [
		{
			id: 1,
			title: 'Bump Sheep',
			body: 'A herd of black sheep and a herd of white sheep wander and graze in the Great Plains. In order to eat the best grass in the grassland, they start a contest to determine which herd will win. Bump Sheep has a unique mix of good strategy and quick reflex. You play the seep for battle.',
			imgSrc: bumpsheep,
			demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-final-project/bump-sheep/',
			codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-final-project/bump-sheep',
			selected: false
		}
	]
}

const designReducer = (state = initState, action) => {
	return state
}

export default designReducer