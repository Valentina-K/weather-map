export const ConvertFromUnixTimestamp = (timeSpan) => {
  const origin = new Date(timeSpan * 1000);
  return origin;
};
