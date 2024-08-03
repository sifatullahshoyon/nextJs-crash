import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav className="my-6">
        <ul className="flex gap-7">
          <li>
            <Link href="/about2/mission">mission</Link>
          </li>
          <li>
            <Link href="/about2/vision">vision</Link>
          </li>
          <li>
            <Link href="/about2">moto</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {children}
      <hr />
    </div>
  );
};

export default layout;
