export default function numberMapToWord(collection) {
  return collection.map(item => String.fromCharCode(item + 96));
}
