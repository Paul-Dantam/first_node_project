var moment = require("moment");
const chalk = require("chalk");

let now = moment();
let b = moment().startOf("day");
let daylightSavingsTime = moment().isDST();
let leapYear = moment().isLeapYear();

console.log(
  " It is " + chalk.blue(now.format("dddd, MMMM Do YYYY, h:mm:ss a")),
  "\n",
  "It is the " + chalk.magenta(now.format("DDDo")) + " day of the year",
  "\n",
  "It is " + chalk.cyan(now.diff(b, "seconds")) + " seconds into the day.",
  "\n",
  "It " +
    chalk.yellow(daylightSavingsTime ? "is " : "is not ") +
    "during Daylight Savings Time",
  "\n",
  "It " + chalk.red(leapYear ? "is " : "is not ") + "a leap year."
);
