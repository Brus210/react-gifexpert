//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    //custom hook
    const {images, isLoading} = useFetchGifs(category);


   


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargnaado...</h2>) 
            }



            <div className="card-grid">
                {
                    // images.map((img) =>(
                    //     <li key={img.id}>
                    //         {img.title}
                    //     </li>

                    // ))
                    images.map((image) =>(
                        <GifGridItem key={image.id} {...image} />
                        
                    ))
                }
            </div>
        </>
  )
}
