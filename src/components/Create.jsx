import { useState } from "react";
import { SearchExist } from "./SearchExist.jsx";

export const Create = ({ fields, create, load, get, param }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [value, setValue] = useState("");
    const [isSelected, setIsSelected] = useState(false)

    const onChangeValue = e => {
        const newValue = e.target.value || "";
        setValue(newValue)
    }

    const handleClick = () => {
        setIsCreating(prev => !prev)
    }

    const onClickPress = (e) => {
        if (e.key === 'Enter') handleSubmit(e);
    };

    const onSelect = (s) => {
        setValue(s)
        setIsSelected(true)
    }

    const clear = () => {
        setValue("")
        setIsSelected(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Data = new FormData(e.target);
        const newData = Object.fromEntries(Data.entries());
        await create(newData);
        load();
        e.target.reset(); // Reset the form after submission
        handleClick();
    };

    return (
        <>
            { isCreating ? ( 
                <form onSubmit={handleSubmit} onKeyUp={onClickPress}>
                    {fields.map((field, index) => (
                        <div key={index}>
                            {field.create && 
                                <label>
                                    {field.alias}:
                                    {field?.link ?
                                    <div>
                                        <input
                                            type={field.type || 'text'}
                                            name={field.name}
                                            placeholder={field.example ||""}
                                            required={field.required || false}
                                            onChange={e => onChangeValue(e)}
                                            value={value}
                                            disabled={isSelected}
                                        />
                                        {isSelected && <button onClick={() => clear()}>x</button>}
                                    </div>:
                                    <input
                                        type={field.type || 'text'}
                                        name={field.name}
                                        placeholder={field.example ||""}
                                        required={field.required || false}
                                    />}
                                </label>
                                }
                                {field?.link && !isSelected &&
                                    <SearchExist 
                                        v={value}
                                        onSelect={onSelect}
                                        f={get}
                                        p={param}
                                    />
                                }
                        </div>
                    ))}
                    <button type="submit">Crear</button>
                    <button onClick={handleClick}>Cancelar</button>
                </form>
            ):(
                <button onClick={handleClick}>Crear</button>
            )
            }
            
        </>
    )
}