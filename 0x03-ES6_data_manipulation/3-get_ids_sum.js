const getStudentIdsSum = (list) => {
  return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}

export default getStudentIdsSum;
