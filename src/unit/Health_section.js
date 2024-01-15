import { useState } from "react";

export default function Health_unit(props) {
  const img_name = props.img;
  const img_name2 = props.img2;
  const imgUrl = "/images/" + img_name + ".jpeg";
  const imgUrl2 = "/images/" + img_name2 + ".jpeg";

  const unit_style = {
    marginTop: '50px',
    "position": "relative"
  };

  const imgBox_style = {
    width: '800px',
    height: '300px',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'space-around',
  };

  const img_style = {
    width: '300px',
    height: '300px',
    'border':"2px solid #ce4747"
  };

  const [isTextVisible1, setIsTextVisible] = useState(false);
  const [isTextVisible2, setIsTextVisible2] = useState(false);

  const text_style = {
    display: isTextVisible1 ? 'block' : 'none',
    "position":"absolute",
    "width":"550px",
    "left":"50%",
    "transform":"translate(-50%)",
    "top":"400px",
    "font-size":"20px",
    "line-height":"30px"
 };

  const text_style02 = {
    display: isTextVisible2 ? 'block' : 'none',
    "position":"absolute",
    "width":"550px",
    "left":"50%",
    "transform":"translate(-50%)",
    "top":"400px",
    "font-size":"20px",
    "line-height":"30px"
  };
const img_click = (section) => {
    if (section === 1) {
      setIsTextVisible(!isTextVisible1);
      setIsTextVisible2(false);
    } else {
      setIsTextVisible2(!isTextVisible2);
      setIsTextVisible(false);
    }
  };
  return (
    <div className="unit" style={unit_style}>
      <div style={imgBox_style}>
        <img onClick={()=> img_click(1)} style={img_style} src={imgUrl} alt={props.alt} />
        <img onClick={()=>img_click(2)} style={img_style} src={imgUrl2} alt={props.alt} />
      </div>

      <div id style={text_style}>
        <p>{props.text01}</p>
      </div>

      <div style={text_style02}>
        <p>{props.text02}</p>
      </div>
    </div>
  );
}
