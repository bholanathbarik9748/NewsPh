import {
  differenceInMinutes,
  differenceInHours,
  formatDistanceToNow,
  parseISO,
} from 'date-fns';

export const PublishTimeHandler = publishedAt => {
  const minutesAgo = differenceInMinutes(new Date(), parseISO(publishedAt));
  const hoursAgo = differenceInHours(new Date(), parseISO(publishedAt));
  const timeAgo =
    minutesAgo < 60
      ? `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`
      : `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;

  return timeAgo;
};
