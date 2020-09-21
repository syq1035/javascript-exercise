export default function countTypesNumber(source) {
  return Object.values(source).reduce((acc, cur) => acc + parseInt(cur, 10), 0);
}
