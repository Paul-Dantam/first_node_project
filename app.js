const chalk = require("chalk");
var moment = require("moment");

let now = moment();
let b = moment().startOf("day");
let daylightSavingsTime = moment().isDST();
let leapYear = moment().isLeapYear();

console.log(
  " It is " + now.format("dddd, MMMM Do YYYY, h:mm:ss a"),
  "\n",
  "It is the " + now.format("DDDo") + " day of the year",
  "\n",
  "It is " + now.diff(b, "seconds") + " seconds into the day.",
  "\n",
  "It " +
    (daylightSavingsTime ? "is " : "is not ") +
    "during Daylight Savings Time",
  "\n",
  "It " + (leapYear ? "is " : "is not ") + "a leap year."
);
