// Date Class
// Get Current Year
// Get Current Month
// Get Current Date

interface IDate {
  getDate(): number;
  getMonth(): number;
  getYear(): number;
}

class MyDate implements IDate {
  date: number;
  month: number;
  year: number;
  constructor(date: number, month: number, year: number) {
    this.date = date;
    this.month = month;
    this.year = year;
  }

  getDate(): number {
    return this.date;
  }

  getMonth(): number {
    return this.month;
  }

  getYear(): number {
    return this.year;
  }
}

function getCurrentDate(date: IDate) {
  return date.getDate();
}

function getCurrentMonth(date: IDate) {
  return date.getMonth();
}

function getCurrentYear(date: IDate) {
  return date.getYear();
}

// User interaction

const myDate: MyDate = new MyDate(17, 11, 1991);

console.log({
  date: getCurrentDate(myDate),
  month: getCurrentMonth(myDate),
  year: getCurrentYear(myDate),
});
