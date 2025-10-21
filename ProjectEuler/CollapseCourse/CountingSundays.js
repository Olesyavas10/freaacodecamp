function isLeap(y){
  return (y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0);
}

function countingSundays(firstYear, secondYear)
{
  let dayOfWeek=0; //0-Monday, 6-Sunday

  const daysInMonth = (y, m) => {
    if (m === 1) return isLeap(y) ? 29 : 28; // February
    if ([3, 5, 8, 10].includes(m)) return 30; // Apr, Jun, Sep, Nov
    return 31;
  };

for (let year = 1900; year < firstYear; year++) {
    for (let month = 0; month < 12; month++) {
      dayOfWeek = (dayOfWeek + daysInMonth(year, month)) % 7;
    }
  }

  let count=0;
  for (let year=firstYear; year<=secondYear; year++)
  {
    for (let month=0; month<12; month++)
    {
      if (dayOfWeek===6) count++
      dayOfWeek=(dayOfWeek+daysInMonth(year,month))%7 
    }
  }
  return count
}