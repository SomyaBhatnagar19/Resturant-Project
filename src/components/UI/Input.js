// making a generalised input for any component that requires it
import classes from './Input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
        {/* {...props.input} -> this helps in deciding the id and the type of the input tag used */}
    </div>
};

export default Input;