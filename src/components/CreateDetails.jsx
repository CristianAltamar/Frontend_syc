import { useState } from 'react';
import { SearchExist } from '../components/SearchExist.jsx';

export const CreateDetails = ({ schema, get, param }) => {
    const [isSelected, setIsSelected] = useState({})
    const [searchValue, setSearchValue] = useState({})

    const onChangeValue = (e, name) => {
        const newValue = e.target.value || "";
        setSearchValue({
            ...searchValue,
            [name]: newValue
        })
    }

    const onSelect = (s, name) => {
        setSearchValue({
            ...searchValue,
            [name]: s
        })
        setIsSelected({
            ...isSelected,
            [name]: true
        })
    }
    
    return (
        <>
            {schema.map((field, index) => (
                <div key={index}>
                    {field.create && 
                        <label>
                            {field.alias}:
                            <div>
                                <input
                                    type={field.type || 'text'}
                                    name={field.name}
                                    placeholder={field.example ||""}
                                    required={field.required || false}
                                    onChange={e => onChangeValue(e, field.name)}
                                    value={searchValue[field.name] || ""}
                                    disabled={isSelected[field.name] || false}
                                />
                                {isSelected[field.name] && <button onClick={() => clear(field.name)}>x</button>}
                            </div>
                        </label>}
                        {field?.link && !isSelected[field.name] &&
                            <SearchExist
                                key={field.name}
                                name={field.name}
                                v={searchValue[field.name]}
                                onSelect={onSelect}
                                f={get[field.name]}
                                p={param}
                            />
                        }
                </div>
            ))}
        </>
)}