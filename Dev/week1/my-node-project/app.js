const { format, addDays } = require('date-fns');
    //req. is the thing that catches the export (module.exports...) 

const currentDate = new Date();
//get current date

const formattedDate = format(currentDate, 'MMMM dd, yyyy');
//format the current date
console.log('Formatted date:', formattedDate);

//add 7 days to the current date:
const futureDate = addDays(currentDate, 7);
console.log('Future date:', format(futureDate, 'MMMM dd, yyyy'));

