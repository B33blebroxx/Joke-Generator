// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domBuilder from '../utils/domBuilder';
import { jokeBtn } from '../components/buttons';
import domEvents from '../events/domEvent';

const init = () => {
  domBuilder();
  jokeBtn();
  domEvents();
};

init();
