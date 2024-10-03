import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const inputV = inputValue.trim();
        if(inputV.length <= 1) return;
        //setCategories( cats => [inputValue, ...cats]);
        onNewCategory(inputV);
        setInputValue('');
    }


  return (
    <form onSubmit={(event) => onSubmit(event)} action="">
        <input type="text" 
            name="" 
            id="" 
            placeholder="Buscar Gifs" 
            value={inputValue} 
            onChange={ (event) => onInputChange(event)} />
   </form>

  )
}
