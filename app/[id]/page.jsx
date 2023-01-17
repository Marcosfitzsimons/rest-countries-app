import Link from "next/link";
import Image from "next/image";
import { TbArrowNarrowLeft } from "react-icons/tb";

const getCountryData = async (id) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const data = res.json();
  return data;
};

const CountryDetails = async ({ params }) => {
  const data = await getCountryData(params.id);
  const country = data[0];
  return (
    <section>
      <div className="w-10/12 mx-auto my-10 flex flex-col gap-16">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 p-1 px-3 w-28 shadow-lg rounded-sm bg-light-orange-500 dark:bg-dark-gray-500 hover:bg-light-orange-300 hover:dark:bg-dark-gray-400"
        >
          <TbArrowNarrowLeft className="text-xl" />
          Back
        </Link>
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
          <div className="relative w-full h-60 max-w-[400px] lg:h-96 lg:w-[40%] lg:max-w-none">
            <Image
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              fill
              className="object-cover lg:object-fill"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
            />
          </div>
          <div className="flex flex-col gap-9 lg:w-[50%]">
            <h4 className="text-2xl font-extrabold xl:text-4xl">
              {country.name.common}
            </h4>
            <div className="flex flex-col gap-9 lg:flex-row xl:gap-[10rem]">
              <div className="flex flex-col gap-3">
                <p className="font-semibold xl:text-lg">
                  Native Name:{" "}
                  <span className="font-extralight">
                    {country.name.official}
                  </span>
                </p>
                <p className="font-semibold xl:text-lg">
                  Population:{" "}
                  <span className="font-extralight">
                    {country.population
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </p>
                <p className="font-semibold xl:text-lg">
                  Region:{" "}
                  <span className="font-extralight">{country.region}</span>
                </p>
                <p className="font-semibold xl:text-lg">
                  Sub Region:{" "}
                  <span className="font-extralight">{country.subregion}</span>
                </p>
                <p className="font-semibold xl:text-lg">
                  Capital:{" "}
                  <span className="font-extralight">{country.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold xl:text-lg">
                  Top Level Domain:{" "}
                  <span className="font-extralight">{country.tld}</span>
                </p>
                <p className="font-semibold xl:text-lg">
                  Currencies:{" "}
                  <span className="font-extralight">
                    {Object.values(country.currencies).map((currencie, i) => {
                      return i === Object.values(country.currencies).length - 1
                        ? `${currencie.name}`
                        : `${currencie.name}, `;
                    })}
                  </span>
                </p>
                <p className="font-semibold xl:text-lg">
                  Languages:{" "}
                  <span className="font-extralight">
                    {Object.values(country.languages).map((language, i) => {
                      return i === Object.values(country.languages).length - 1
                        ? `${language}`
                        : `${language}, `;
                    })}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {country.borders !== undefined && (
                <h5 className="font-semibold text-lg xl:text-xl">
                  Border Countries:
                </h5>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                {country.borders !== undefined
                  ? country.borders.map((borderCountry) => (
                      <Link
                        href={borderCountry}
                        key={borderCountry}
                        className="px-8 py-1 rounded-sm flex items-center justify-center w-24 shadow-lg bg-light-orange-500 dark:bg-dark-gray-500 hover:bg-light-orange-300 hover:dark:bg-dark-gray-400"
                      >
                        {borderCountry}
                      </Link>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
