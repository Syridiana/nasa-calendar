export async function fetchDatePhoto(dateReq: string) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=STCWRHa2nM2InefjBHsHBfBG54gQG28VpObUqp0M&date=${dateReq}`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Pass data to the page via props
  return data;
}
