const moment = require('moment');

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getFullWeek = (date = moment()) => {
  date.startOf('week');
  const res = [];
  for (let i = 0; i < 7; i += 1) {
    res.push(date.toObject());
    date.add(1, 'day');
  }

  return res;
};

export { MONTHS, getFullWeek };
