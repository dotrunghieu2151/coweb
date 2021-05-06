import hasResult from '../middlewares/has-result';
import store from '@/store';
import { createTest } from '@/services/test.service';

export default [
  {
    path: '/tests',
    name: 'tests',
    component: () => import('@/views/Test'),
    meta: {
      // HACK: In order to share data between the `beforeResolve` hook
      // and the `props` function, we must create an object for temporary
      // data only used during route resolution.
      tmp: {},
      beforeResolve(routeTo, routeFrom, next) {
        routeTo.meta.tmp.test = createTest();
        next();
      },
    },
    props: (router) => ({ test: router.meta.tmp.test }),
  },
  {
    path: '/test-result',
    name: 'testResult',
    component: () => import('@/views/TestResult'),
    meta: {
      middleware: hasResult,
      // HACK: In order to share data between the `beforeResolve` hook
      // and the `props` function, we must create an object for temporary
      // data only used during route resolution.
      tmp: {},
      beforeResolve(routeTo, routeFrom, next) {
        routeTo.meta.tmp.testResult = store.getters['testResult/testResult'];
        next();
      },
    },
    props: (router) => ({ testResult: router.meta.tmp.testResult }),
  }
]