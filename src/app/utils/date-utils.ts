export function getRelativeDate(datetime: string): string {
  const date = new Date(datetime);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays > 1 && diffInDays <= 5) {
    return `${diffInDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
}
