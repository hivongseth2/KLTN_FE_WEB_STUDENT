import { format } from 'date-fns';

export function parseDate(date) {
  const formattedDate = format(date, 'h:mm a dd/MM/yyyy');
  return formattedDate;
}
