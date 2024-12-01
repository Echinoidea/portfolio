import './style.css';
import main from './main.html?raw';
import imgmod from './imgmod.html?raw';
import research1 from './research1.html?raw';
import research2 from './research2.html?raw';
import coach from './coach.html?raw'
import ags from './ags.html?raw'
import timesheet from './timesheet.html?raw'

const routes = {
  '/': main,
  '/imgmod.html': imgmod,
  '/research1.html': research1,
  '/research2.html': research2,
  '/coach.html': coach,
  '/ags.html': ags,
  '/timesheet.html': timesheet
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


const app = document.querySelector<HTMLDivElement>('#app')!;
const render = () => {
  const path = window.location.pathname;
  console.log(path)
  app.innerHTML = routes[path as keyof typeof routes] || '<h1>Page Not Found</h1>';

  if (path === '/imgmod.html') {
    populateImages();
  }
};

render();

window.addEventListener('popstate', render);
