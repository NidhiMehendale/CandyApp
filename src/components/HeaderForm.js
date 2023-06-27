import React ,{useState}from "react";


const HeaderForm = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
 
      const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
      };

      const formSubmitHandler = event => {
        event.preventDefault();
        
       props.onAddGoal(enteredValue);
      };

    return (
        <form onSubmit={formSubmitHandler}>
            <div>   
            <label>Candy Name</label>
                <input    
                    type="Text"     
                    onChange={goalInputChangeHandler}     
                />
            </div>
            <div>
            <label>Description</label>
                <input  
                   type="text"      
                   onChange={goalInputChangeHandler}               
                />
            </div>
            <div>
            <label>Price</label>
                <input
                   type="number"
                   onChange={goalInputChangeHandler}     
                />
            </div>
            <div>
                <button type="submit">
                    Add 
                </button>
            </div>
        </form>

    );
}

export default HeaderForm;