/* Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
 */


function to12(time) {
   let hour = parseInt(time.slice(0, 2), 10)
  let minute = time.slice(2); 
 let period = 'AM';

  if (hour === 0) {
    hour = 12; // 00:xx → 12:xx AM
  } else if (hour === 12) {
    period = 'PM'; // 12:xx → 12:xx PM
  } else if (hour > 12) {
    hour -= 12;
    period = 'PM';
  }


  return `${hour}:${minute} ${period}`;
}