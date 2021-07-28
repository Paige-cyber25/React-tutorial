import { getRandomNumBetweenMinAndMax } from "./functions";
import classes from './FunctionColor.module.css';

const GetRandomNumbers = () => {
    const randomNum = getRandomNumBetweenMinAndMax(1,200);
    return(
        <h2 className={classes.peach}>Here is a function that returns a random number between minimum and maximum number:{randomNum}</h2>
    );
}

export default GetRandomNumbers;