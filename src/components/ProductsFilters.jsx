import { useState, useEffect, use } from 'react';

export default function ProductFilters({ initial, onApply, onReset }) {
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setFilters(initial || [])
    }, [initial]);

    const c = (e, i) => {
        setFilters([
            ...filters.slice(0, i),
            { ...filters[i], value: e.target.value || "" },
            ...filters.slice(i + 1)
        ]);
    }

    const apply = () => {
        const patch = filters.reduce((acc, filter) => {
            acc[filter.name] = filter.value || '';
            return acc;
        }, {});
        onApply(patch)
    }

    const onPresKey = (e) => {
        if (e.key === 'Enter') apply();
    };

    return (
        <div style={{ display:'grid', gap:8, gridTemplateColumns:'1fr 1fr 1fr auto auto' }}>
            { filters.map((filter, index) => (
                <label key= {index} style={{ display:'flex', flexDirection:'column' }}> {filter.name}
                    <input
                        key={index}
                        type= {filter.type || 'text'}
                        placeholder={filter.placeholder || ''}
                        value={filter.value || ''}
                        onChange={ e => c(e, index)}
                        onKeyUp= {e => {onPresKey(e)}}
                    ></input>
                </label>
            ))}
            <button type='submit' onClick={apply}>Filtrar</button>
            <button type="button" onClick={onReset}>Limpiar</button>
        </div>
    );
}
