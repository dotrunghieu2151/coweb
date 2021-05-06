export default function hasResult({ next, context }) {
  if (context.store && !context.store.getters['testResult/hasTestResult']) {
    return next({ name: 'tests' });
  }
  return next();
}