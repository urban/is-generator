/* @flow */
export default function isGenerator (fn: any): boolean {
  return !!fn &&
    fn.constructor &&
    fn.constructor.name === 'GeneratorFunction'
}
