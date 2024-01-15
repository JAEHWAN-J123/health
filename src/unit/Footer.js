export default function Footer(props){
  const foo_lnb = {
    display:"flex",
    width:"450px",
    height:"100px",
    "line-height":"100px",
    "text-align":"center",
    "margin":"0 auto"
  }

  const foo_style={
    display:"flex",
    'width':"100%",
    'height':'100px',
    'background-color':"#eee",
    "justify-content":"space-around",
    "font-size":"18px",
    "line-height":"100px",
    "border-top":"1px solid #ddd"
  }

  const foo_li ={
    width:"150px",
    height:"100px"
  }
  return(
    <footer style={foo_style}> 
    <div>
        <span>Weight Training HomePage</span>
    </div>
        <div>
          <ul style={foo_lnb}>
            <li style={foo_li}><a href="#">이용약관</a></li>
            <li style={foo_li}><a href="#">개인정보 취급방침</a></li>
            <li style={foo_li}><a href="#">&copy;copyright&nbsp;</a></li>
          </ul>
        </div>
    </footer>
  )
}