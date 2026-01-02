import Language from "./Language";
import { data } from "../data/data";

const Card = () => {
  console.log(data);
  return (
    <div className="card">
      <h1>Language</h1>
      <div className="langWrapper">
        {data.map((lang, index) => (
          <Language key={index} {...lang} />
        ))}
      </div>
    </div>
  );
};

export default Card;
