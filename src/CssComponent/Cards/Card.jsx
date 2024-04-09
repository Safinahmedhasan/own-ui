import Demo from "../../Demo";
import CardEight from "./CardEight";
import CardFive from "./CardFive";
import CardFour from "./CardFour";
import CardOne from "./CardOne";
import CardSeven from "./CardSeven";
import CardSix from "./CardSix";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";

const Card = () => {
  return (
    <div>
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
      <CardSeven />
      <CardEight />

      <Demo />
    </div>
  );
};

export default Card;
