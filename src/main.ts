import './style.css';
import mainPage from './pages/main';
import imgfxPage from './pages/imgfx';
import research1Page from './pages/research1';
import research2Page from './pages/research2';
import coachPage from './pages/coach';
import agsPage from './pages/ags';
import vidfxPage from './pages/vidfx';

const routes = {
  '/': mainPage,
  '/imgfx': imgfxPage,
  '/research1': research1Page,
  '/research2': research2Page,
  '/coach': coachPage,
  '/ags': agsPage,
  '/vidfx': vidfxPage,
};

const app = document.querySelector<HTMLDivElement>('#app')!;

// Function to render the page content based on the current path
const render = () => {
  const path = window.location.pathname;
  app.innerHTML = routes[path as keyof typeof routes] || '<h1>Page Not Found</h1>';

  if (path === '/imgfx') {
    populateImages();
  }
};

// Function to handle SPA navigation
const navigate = (event: MouseEvent, path: string) => {
  event.preventDefault();
  history.pushState(null, '', path); // Update URL without reloading
  render(); // Render the content for the new route
};

// Expose the navigate function globally for use in `onclick`
(window as any).navigate = navigate;

// List of images for the `/imgmod.html` page
const images = [
  'ultrakill.png', 'ultrakill-out.png',
  'vash.jpg', 'vash-out.jpg',
  'gasha-sm.gif', 'gasha-sm-out.png',
];

// Function to populate the image showcase on the `/imgmod.html` page
const populateImages = () => {
  const showcase = document.querySelector<HTMLDivElement>('#imgfx-showcase');
  if (showcase) {
    showcase.innerHTML = images
      .map(
        (image) => `
          <img class="gridItem" src="/imgfx/${image}" alt="${image}" style="margin: 10px;" />
        `
      )
      .join('');
  }
};

// Initial render and listener for browser navigation events
render();
window.addEventListener('popstate', render);
