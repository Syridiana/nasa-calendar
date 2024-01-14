export async function fetchDatePhoto(dateReq: string) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${dateReq}`
  );
  const data = await res.json();
  console.log(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${dateReq}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Pass data to the page via props
  return data;
}
