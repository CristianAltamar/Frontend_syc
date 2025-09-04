import { useState, useEffect, use } from 'react';

export default function Filters({ initial, schema, onApply, onReset }) {
    const [filters, setFilters] = useState(initial || {});

    const c = (e, n) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [n]: e.target.value
        }));
    }

    const apply = () => {
        onApply(filters)
    }

    const onPresKey = (e) => {
        if (e.key === 'Enter') apply();
    };

    const onResetFilters = () => {
        setFilters({})
        onReset()
    }

    return (
        <div style={{ display:'grid', gap:8, gridTemplateColumns:'1fr 1fr 1fr auto auto' }}>
            { schema.map((field, index) => (
                <div key= {index}>
                { field.filter &&
                        <label key= {index} style={{ display:'flex', flexDirection:'column' }}> {field.alias}
                            <input
                                key={index}
                                type= {field.type || 'text'}
                                placeholder={`Buscar por ${field.alias}`}
                                value={ filters[field.name] || ''}
                                onChange={ e => c(e, field.name)}
                                onKeyUp= {e => {onPresKey(e)}}
                            ></input>
                        </label>
                }
                </div>
            ))}
            <button type='submit' onClick={apply}>Filtrar</button>
            <button type="button" onClick={onResetFilters}>Limpiar</button>
        </div>
    );
}
