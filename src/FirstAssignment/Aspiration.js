import classes from './Aspiration.module.css';

const Aspiration = () => {
    return (
        <div className={classes.blue}>My aspirations are:
            <ol>
                <li className={classes.blue}>Be a baddest Software Engineer.</li>
                <li className={classes.blue}>Start my own business.</li>
            </ol>
        </div>
    );
};

export default Aspiration;