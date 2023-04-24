import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (({ target }) => {
        setInputValue(target.value)
    })

    const formSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
       // setCategories( categories => [ inputValue,...categories ]);

        setInputValue('');
        onNewCategory( inputValue.trim())
    }

    return (
        <form onSubmit={ formSubmit }>
                <input
                    type="text"
                    placeholder="buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
        </form>

    )
}


