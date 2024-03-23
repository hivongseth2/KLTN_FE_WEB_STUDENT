import { format } from 'date-fns';

// Hàm parse và định dạng ngày
export function parseDate(date) {
  // Định dạng ngày
  const formattedDate = format(date, 'h:mm a dd/MM/yyyy');
  return formattedDate;
}
