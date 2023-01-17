import Wrapper from "./components/Wrapper";

const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const countries = res.json();
  return countries;
};

export default async function Home() {
  const data = await getCountries();
  return (
    <main className="w-11/12 mx-auto lg:w-10/12">
      <Wrapper data={data} />
    </main>
  );
}
