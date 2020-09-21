export default function collectCarNumberCount(collection) {
  const result = collection.filter(item => item.startsWith('粤A'));
  return result.length;
}
