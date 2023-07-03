/* eslint-disable array-callback-return */
const hasValuesFromArray = (set, list) => {
  let verdict = true;
  list.map((x) => {
    if (!set.has(x)) {
      verdict = false;
    }
  });

  return verdict;
}

export default hasValuesFromArray;
