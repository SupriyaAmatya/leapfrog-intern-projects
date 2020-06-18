import design_1 from '../../assets/images/tollens.png';
import design_2 from '../../assets/images/design-2.png';
import design_final from '../../assets/images/design-final.png';
import design_final_2 from '../../assets/images/design-final-2.png';

const initState = {
  bgGrey: true,
  mainTitle: 'web design projects',
  projects: [
    {
      id: 1,
      title: 'Tollens: About Us',
      body: 'An About Us static page of a sample website, named Tollens, which is designed using HTML and CSS from a PSD file provied by the company.',
      imgSrc: design_1,
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/design-assignment-1/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/design-assignment-1',
      selected: false
    },
    {
      id: 2,
      title: 'Tollens: Features',
      body: 'A responsive Features page of a sample website, named Tollens, which is designed using HTML and CSS from a PSD file provied by the company.',
      imgSrc: design_2,
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/design-assignment-2/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/design-assignment-2',
      selected: false
    },
    {
      id: 3,
      title: 'Digital Market (Static Page)',
      imgSrc: design_final,
      body: 'It is a final static view project of web design session which is designed using HTML and CSS',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/design-final-project-static/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/design-final-project-static',
      selected: false
    },
    {
      id: 4,
      title: 'Digital Market (Responsive)',
      imgSrc: design_final_2,
      body:'This is a final responsive website of Digital Market designed using HTML and CSS from a PSD file. Also the add to cart properties is added using javascript and a modal view of login form is also designed along with client side validation.',
      demoLink: 'https://supriyaamatya.github.io/Leapfrog/design-final-project-responsive/',
      codeLink: 'https://github.com/SupriyaAmatya/Leapfrog/tree/master/design-final-project-responsive',
      selected: false
    }
  ]
}

const designReducer = (state = initState, action) => {
  console.log(state);
  return state
}

export default designReducer