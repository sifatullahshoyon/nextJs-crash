import React from "react";

const loading = () => {
  return (
    <>
      <div className="animate-[spin_1.8s_linear_infinite]">
        <div className="w-14 h-14 border rounded-lg  z-30 bg-sky-500 animate-[ping_1.4s_linear_infinite]">
          <div className="w-[58px] h-[58px] relative -top-[1.4px] -left-[2px]   rounded-full  bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default loading;
