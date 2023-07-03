const getStudentsByLocation = (list, city) => {
  return list.filter((obj) => obj.location === city);
}

export default getStudentsByLocation;
