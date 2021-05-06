import home from './home'
import test from './test'
import theory from './theory'
import flashcards from './flashcards'
import _404 from '@/views/_404';

export default [
  home,
  ...theory,
  flashcards,
  ...test,
  {
    path: '/404',
    name: '404',
    component: _404,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
]

