// parse date to format DD/MM/YYYY
export const parseData = (dateValue: string): string => {
  const date = new Date(dateValue);
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.');
};

// get from date (30 days before) for request
export const getFromDate = (): string => {
  const fromDate = new Date();
  fromDate.setMonth(fromDate.getMonth() - 1);

  return fromDate.toISOString();
};