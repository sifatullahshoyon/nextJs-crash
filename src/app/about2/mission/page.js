import React from "react";
// import andolon from "../../../../public/andolon.jpg"
import Image from "next/image";
import andolon from "@/public/images/andolon.jpg";

const page = () => {
  // throw new error('Throw a new error on  mission page');
  return (
    <div className="my-10">
      <h1>This is mission page</h1>
      <div>
        <h1 className="mt-10 mb-5 text-2xl text-green-500">
          Mission Full Stack Developer
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni
          mollitia nam explicabo hic. Iusto repudiandae ad hic odio inventore
          velit, dolores accusantium iure eaque dolore. Fugiat non omnis quam
          modi amet repellat iste ut. Ut iure architecto incidunt laudantium
          dolores aliquid unde consequuntur? Totam sed voluptates ipsum illo.
          Commodi!
        </p>
        <Image src={andolon} alt="andolon" />
      </div>
    </div>
  );
};

export default page;
