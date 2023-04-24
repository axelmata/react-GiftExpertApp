import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategoria = (onNewCategory) => {
        // const categorianew = "valorant";
        if (categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories])
    }

    return (
        <>
            {/* Titulo de la app */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={(valor) => onAddCategoria(valor)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }



        </>
    )

} 