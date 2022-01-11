import dayjs from "dayjs";

class DateUtils {
  displayStringOf(date: dayjs.Dayjs): String {
    const now: dayjs.Dayjs = dayjs();
    if (date.year() !== now.year()) {
      return date.format("DD.MM.YYYY, HH:mm");
    }
    if (date.date() !== now.date()) {
      return date.format("DD MMM, HH:mm");
    } else {
      return date.format("HH:mm");
    }
  }
}

const dateUtils = new DateUtils();
export default dateUtils;
