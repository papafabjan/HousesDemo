"use client";

import Spinner from "../app/components/Spinner";
import HouseCard from "./components/HouseCard";
import { useEffect, useState } from "react";

import localFont from "next/font/local";
const verdana = localFont({
  src: "../../public/fonts/verdana.ttf",
  variable: "--font-verdana",
});

interface DataItem {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: { id: string; firstName: string; lastName: string }[];
  traits: { id: string; name: string }[];
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<DataItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://2b3d-62-74-3-90.ngrok-free.app//houses",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: searchTerm }),
          }
        );

        const responseData = await response.json();
        if (response.ok) {
          setData(responseData);
        } else {
          console.error("Failed to fetch houses:", responseData.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const timeoutId = setTimeout(fetchData, 300);

    return () => clearTimeout(timeoutId); 
  }, [searchTerm]);

  console.log("Current data state:", data);
  console.log("isloading:", isLoading);


  return (
    <>
      {isLoading ? <Spinner /> : null}
      <main className={`${verdana.variable} font-sans`}>
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
          <h1 className="text-4xl font-bold mb-8">Houses Test</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 mb-8 text-black"
          />
          <div className="grid gap-4 max-w-[70ch] mx-auto m-auto mb-20">
            {data ? (
              data.map((item, index) => (
                <HouseCard
                  key={index}
                  name={item.name}
                  animal={item.animal}
                  founder={item.founder}
                  houseColours={item.houseColours}
                />
              ))
            ) : (
              <h5 className="text-center text-3xl font-bold text-balance m-auto">
                No houses found
              </h5>
            )}
          </div>

          <p className={`max-w-[30ch] text-sm opacity-50 text-balance m-auto`}>
            Created by Fabian Papa
          </p>
        </main>
      </main>
    </>
  );
}
