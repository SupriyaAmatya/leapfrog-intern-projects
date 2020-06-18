import image_slider from '../../assets/images/image-slider.png';
import ant_smasher from '../../assets/images/ant-smasher.png';
import car_game from '../../assets/images/car-game.png';
import flappy_bird from '../../assets/images/flappy-bird.png';
import helix from '../../assets/images/helix.png';

const initState = {
  bgGrey: false,
  mainTitle: 'javascript projects',
  projects: [
    {
      id: 1,
      title: 'Image Slider',
      imgSrc: image_slider,
      body:'An image carousel developed using plain javascript.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-projects/ast1/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-projects/ast1',
      selected: false
    },
    {
      id: 2,
      title: 'Image Slider with hold itmes',
      imgSrc: image_slider,
      body:'An image carousel along with hold items developed using plain javascript.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-projects/ast2/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-projects/ast2',
      selected: false
    },
    {
      id: 3,
      title: 'Ant Smasher',
      imgSrc: ant_smasher,
      body:'Ant smasher ia a simple javascript game developed using 2D collision detection algorithm.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-projects/ast3/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-projects/ast3',
      selected: false
    },
    {
      id: 4,
      title: 'Car Lane Game with Bullet',
      imgSrc: car_game,
      body:'This is a 2D car lane game which has 3 lanes. Also by pressing SPACE bar player can shoot a bullet to destroy enemies car.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-projects/ast4/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-projects/ast4',
      selected: false
    },
    {
      id: 5,
      title: 'Flappy Bird',
      imgSrc: flappy_bird,
      body:'This is replica of flappy bird game which is developed using html canvas and es6 javascript. For the design of this game, sprite images are used.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-projects/ast5/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-projects/ast5',
      selected: false
    },
    {
      id: 6,
      title: 'Helix Animation',
      imgSrc: helix,
      body:'A simple animation developed using plain javascript.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/js-projects/ast6(new)/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/js-projects/ast6(new)',
      selected: false
    }
  ]
}

const javascriptReducer = (state = initState, action) => {
  return state
}

export default javascriptReducer