// Header_bottom.js
import React from 'react';
import Link from 'next/link';

export default function Header_bottom() {
  return (
    <div className="header_bottom">
      <ul className="lnb">
        <li>
          <Link href="/Weight_History">
            웨이트 트레이닝 역사
          </Link>
        </li>
        <li>
          <Link href="/Traning">
            부위별 운동방법
          </Link>
        </li>
        <li>
          <Link href="/Weight01/equipment">
            미정
          </Link>
        </li>
        <li>
          <Link href="/Weight01/supplements">
            미정 
          </Link>
        </li>
      </ul>
    </div>
  );
}
