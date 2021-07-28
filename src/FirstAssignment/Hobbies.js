import classes from './Hobbies.module.css';

const Hobbies = () => {
    return (
        <div className={classes.green}>My hobbies are: 
            <ul>
                <li className={classes.green}>Cooking</li>
                <li className={classes.green}>Singing</li>
                <li className={classes.green}>Dancing.. Although I'm not so good, I'm a better chairDancer!!! &#128540;</li>
                <li className={classes.green}>Coding</li>
                <li className={classes.green}>Glowing &#128521; and helping people around me look good.</li>
            </ul>
        </div>
    );
};

export default Hobbies;