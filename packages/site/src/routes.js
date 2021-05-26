import Index from './routes/Index.svelte';
import Error from './routes/404.svelte';

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '*',
    component: Error
  }
];
