
import { firstNames, secondNames } from "../constants/const";
import randomInteger from "../utils/randomInteger";


export default function generateName() {
    return (
      "_" +
      `${firstNames[randomInteger(0, firstNames.length - 1)]} ${
        secondNames[randomInteger(0, secondNames.length - 1)]
      }` +
      "_"
    );
  };
 