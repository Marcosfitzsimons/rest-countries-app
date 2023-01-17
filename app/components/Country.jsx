"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const countryVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "backInOut",
    },
  },
};

const Country = ({ country }) => {
  return (
    <motion.div
      variants={countryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-9/12 rounded-lg max-w-[300px] shadow-lg border border-orange-600 bg-light-orange-500 dark:bg-dark-gray-500 dark:border-dark-gray-400/50 dark:hover:border-dark-gray-400 hover:border-orange-200 xl:w-full"
    >
      <Link href={`${country.cca3}`}>
        <div className="relative w-full h-44 xl:h-48">
          <Image
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            fill
            className="rounded-t-md"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
          />
        </div>
        <div className="flex flex-col gap-4 px-4 py-8 pb-12">
          <h3 className="font-extrabold text-xl">{country.name.common}</h3>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">
              Population:{" "}
              <span className="font-light">
                {country.population
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-light">{country.region}</span>
            </p>
            <p className="font-semibold">
              Capital: <span className="font-light">{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Country;
