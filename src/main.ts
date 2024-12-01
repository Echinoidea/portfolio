import './style.css';
import mainPage from './pages/main';
import imgmodPage from './pages/imgmod';
import research1Page from './pages/research1';
import research2Page from './pages/research2';
import coachPage from './pages/coach';
import agsPage from './pages/ags';
import timesheetPage from './pages/timesheet';

const routes = {
  '/': mainPage,
  '/imgmod': imgmodPage,
  '/research1.html': research1Page,
  '/research2.html': research2Page,
  '/coach.html': coachPage,
  '/ags.html': agsPage,
  '/timesheet.html': timesheetPage,
};

const app = document.querySelector<HTMLDivElement>('#app')!;
const render = () => {
  const path = window.location.pathname;
  app.innerHTML = routes[path as keyof typeof routes] || '<h1>Page Not Found</h1>';

  if (path === '/imgmod') {
    populateImages();
  }
};

const images = [
  'ultrakill.png', 'ultrakill-out.png',
  'vash.jpg', 'vash-out.jpg',
  'gasha-sm.gif', 'gasha-sm-out.png',
];

const populateImages = () => {
  const showcase = document.querySelector<HTMLDivElement>('#imgmod-showcase');
  if (showcase) {
    showcase.innerHTML = images
      .map(
        (image) => `
          <img class="gridItem" src="/imgmod/${image}" alt="${image}" style="margin: 10px;" />
        `
      )
      .join('');
  }
};

render();
window.addEventListener('popstate', render);
