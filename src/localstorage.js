export function saveMonthDayEntryExistList(year, month, day) {
  const monthDayEntryList = getMonthDayEntryExistList(year, month);
  console.log("imhere");
  console.log(year);
  console.log(month);
  console.log(monthDayEntryList);
  if (monthDayEntryList == [])
    localStorage.setItem(`${year}-${month}`, JSON.stringify([day]));
  else {
    if (monthDayEntryList.includes(day)) return;
    monthDayEntryList.push(day);
    localStorage.setItem(`${year}-${month}`, JSON.stringify(monthDayEntryList));
  }
  return;
}

export function getMonthDayEntryExistList(year, month) {
  const monthDayEntryList =
    JSON.parse(localStorage.getItem(`${year}-${month}`)) || [];
  return monthDayEntryList;
}

export function saveEntry() {}

export function getEntry() {}
