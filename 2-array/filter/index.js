function chooseMultiplesOfThree(collection) {
  return collection.filter(item => item % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return [...new Set(collection)];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
