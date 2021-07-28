import classes from './Picture.module.css'

const Picture = () => {
    return(
        <p className={classes.yellow}>Here is a picture of me. 
            <img src="/patience.jpeg" alt="Pat" className={classes.size}/>
        </p>
    )
}

export default Picture;