export default function Exercises(props){

  const img_name = props.img
  const imgUrl = "/images/" + img_name+".png"
  const img_style={
    "width":"100%",
    "height":"100%",
    "padding":"10px"
  }

  const Ex_style={
    "width":"270px",
    "height":"410px",
    "border-radius":"20px",
    "background-color":"#fff",
    "margin":"10px"
  }

  return(
    <div className="Ex_list" style={Ex_style}>
          <div className="img_mask">
            <img src={imgUrl} style={img_style}/>
          </div>
          <div className="Ex_info">
            <a>
              <span className="title">{props.tit}</span>
              <span className="sub_title">{props.subtit}</span>
              <p className="info">{props.info}</p>
            </a>
          </div>
    </div>
  )
}


