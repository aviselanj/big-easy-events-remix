'use client'

import Image from "next/image";
import axios from "axios";

export default function Home() {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  if (baseURL) {
    axios
      .get(baseURL + "/users")
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <main className=" text-slate bg-cover bg-center bg-fixed flex max-h-cover min-h-screen p-24 flex-col items-center  h-14  bg-[url('https://images.pexels.com/photos/21771321/pexels-photo-21771321/free-photo-of-people-walking-on-bourbon-street-in-new-orleans-usa.jpeg?auto=compress&cs=tinysrgb&w=800')]">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      
      </div>
    </main>
  );
}
