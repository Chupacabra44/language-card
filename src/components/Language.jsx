import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [show, setShow] = useState(true);

  return (
    <div onClick={() => setShow(!show)} className="cardWrapper">
      {show ? (
        <div className="cardBottom">
          <img src={img} alt="lang" />
          <h3>{name}</h3>
        </div>
      ) : (
        <ul>
          {options.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
