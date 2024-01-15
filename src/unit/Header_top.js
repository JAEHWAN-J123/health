import React from 'react'
import Link from 'next/link';

export default function Header_top(){
  
  const ir_pm = {
 
	"text-indent":"-999em",
	"white-space": "nowrap",
	"overflow":"hidden"
  }

  return(
      <div className="header_top">
        <div className="login">
          <div>로그인</div>
          <div>회원가입</div>
        </div>
        <div className="logo">
          <h1>
            <Link href="/" style={ir_pm}>logo</Link>
            </h1>
          </div>
        <div>
          <input className="search" title="검색어" type="text" placeholder="검색어를 입력하세요"/>
          <input style={ir_pm} className="btn" type="submit" value="검색"/>
        </div>
      </div>
  )
}