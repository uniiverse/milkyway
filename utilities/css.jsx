export function classNames(...classes) {
  return classes.filter(className => Boolean(className)).join(' ');
}
