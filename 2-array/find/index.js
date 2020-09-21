export default function find00OldPerson(collection) {
  const max = 2020 - 2000;
  const min = 2020 - 2010;
  const result = collection.find(item => item.age >= min && item.age < max);
  return result.name;
}
