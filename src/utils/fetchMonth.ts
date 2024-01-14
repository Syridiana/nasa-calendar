export async function fetchMonth(dateReq: Date) {
  const month = dateReq.getMonth() + 1;
  const year = dateReq.getFullYear();
  const lastDayDate = new Date(year, month, 0);
  const lastDay = lastDayDate.getDate();

  // Fetch data from external API
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=STCWRHa2nM2InefjBHsHBfBG54gQG28VpObUqp0M&start_date=${year}-${month}-01&end_date=${year}-${month}-${lastDay}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}
