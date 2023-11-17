function getDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const dayOfWeek = newDate.getDay();

  return { year, month, date, dayOfWeek };
}

export default getDate;
