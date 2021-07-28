import { getFullNameInitials} from "./functions";
import classes from './FunctionColor.module.css';
const FullNamesInitials = () => {
    const names = getFullNameInitials("Patience Uka");
    return (
        <>
        <h1 className={classes.violet}>Hello, here is a function that returns the initials of a full name:{names}</h1> 
        </>   
    )

};

export default FullNamesInitials;




