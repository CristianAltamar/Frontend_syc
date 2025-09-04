import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const SearchExist = ({ name, v, onSelect, f, p }) => {
    const [suggestions, setSuggestions] = useState([])
    
    useEffect( () => {
        if (!v) setSuggestions([])
        else {
            const n = Number(v) ||  null;
            if (n) {
                f({[p.slice(0,1)]: String(n)})
                    .then(res => setSuggestions(res.data.data || []))
                    .catch(e => console.log(e)) 
            } else {
                f({[p.slice(1)]: v || ""})
                .then(res => {
                    setSuggestions(res.data.data || [])
                })
                .catch(e => console.log(e)) 
            }
            }
            
    }, [v])

    return (
        <div>
            <ul>
                {suggestions.length > 0 &&  
                suggestions.map((s, i) => (
                    <li key={i} onClick={() => onSelect(s.name, name)}>
                        <span >{s.nit || ""}</span>
                        <span>{s.name || ""}</span>
                    </li>
                ))}
            </ul>
            {suggestions.length === 0 && v !== "" && v !== undefined &&
                <p>No hay resultado</p>
            }
            {v !== "" && v !== undefined && <Link>Crear</Link>}
        </div>
    )
}