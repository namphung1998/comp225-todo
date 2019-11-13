import moment from 'moment';

export const MONTHS = [
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

export const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const getFullWeek = (date = moment()) => {
  const clonedDate = moment(date);
  clonedDate.startOf('week');
  const res = [];
  for (let i = 0; i < 7; i += 1) {
    res.push(clonedDate.toObject());
    clonedDate.add(1, 'day');
  }

  return res;
};

