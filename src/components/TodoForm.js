import {useState} from "react";
import shortid from "shortid";
    const TodoForm = (props)=>{
    const [text,setText] = useState("");
    const handleSubmit = (e)=>{
      e.preventDefault();
      props.onSubmit({
        id :shortid.generate(),
        text:text,
        complete:false
      });
      setText("");
    };
    const handleChange = (e)=>{
        setText(e.target.value);
    };
      
    return(
    <form onSubmit={handleSubmit}>
    <input className="input-field" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    <button className="btn" onClick={handleSubmit} >Add Todo</button>
    </form>
    )
}













export default TodoForm;