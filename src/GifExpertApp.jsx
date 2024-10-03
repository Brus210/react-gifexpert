import { useState } from 'react'

import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  //cambiar informacion en html
  //crear hoojs

  const [categories, setCategories] = useState(['One Punch']);
  const lowercaseCategories = categories.map( category => category.toLowerCase());
  const onAddCategory =(newCategory) =>{
    const lowercaseNewCategory = newCategory.toLowerCase();

    if(lowercaseCategories.includes(lowercaseNewCategory)) return;
    //console.log(newCategory);
    setCategories([newCategory, ...categories]);
  }
  //console.log(categories);


  return (
    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT*/}

        <AddCategory 
        // setCategories={setCategories} 
        onNewCategory = {(event) => onAddCategory(event)}
        />


        {/* <button onClick={onAddCategory}>Agregar</button> */}
            {            
              categories.map(( category) =>
              (
                <GifGrid key={category} category={category}/>

              ))            

            }

    </>
  )
}
