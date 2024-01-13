export async function getServerSideProps(dateReq: string) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateReq}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
