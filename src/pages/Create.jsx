import { useEffect, useState, useId } from 'react';
import { useParams } from 'react-router-dom';
import * as data from "../data/data.js"
import * as f from "../data/funtionCreate.js"
import { CreateDetails } from '../components/CreateDetails.jsx';

export const CreatePage = () => {
    const { "*": resource } = useParams();
    const [schema, setSchema] = useState([])
    const [details, setDetails] = useState([])
    const [additionalDetails, setAdditionalDetails] = useState([])
    const { create, get, param } = f[resource]

    useEffect(() => {
        const r = "schema"+resource
        setSchema(data[r])
        setDetails(data[r+"Details"])
    }, [resource])

    const onClickPress = (e) => {
        if (e.key === 'Enter') handleSubmit(e);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Data = new FormData(e.target);
        const newData = Object.fromEntries(Data.entries());
        await create(newData);
        load();
        e.target.reset(); // Reset the form after submission
    };

    // Generador de ID base para los componentes adicionales
    const idPrefix = useId();
    
    const addCreateDetails = () => {
        // Usar el prefijo de useId combinado con el índice actual para crear un ID único
        const newId = `${idPrefix}-${additionalDetails.length}`;
        setAdditionalDetails([...additionalDetails, { id: newId }]);
    };

    const removeCreateDetails = (id) => {
        setAdditionalDetails(additionalDetails.filter(detail => detail.id !== id));
    };

    return (
        <div>
            <h1>Crear Proveedor</h1>
            <form onSubmit={handleSubmit} onKeyUp={onClickPress}>
                <CreateDetails schema={schema} get={get} param={param} />
                
                {additionalDetails.map((detail) => (
                    <div key={detail.id} style={{ position: 'relative', marginTop: '20px', padding: '15px', border: '1px dashed #ccc', borderRadius: '5px' }}>
                        <button 
                            type="button" 
                            onClick={() => removeCreateDetails(detail.id)}
                            style={{ position: 'absolute', top: '5px', right: '5px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '25px', height: '25px', cursor: 'pointer' }}
                        >
                            ×
                        </button>
                        <CreateDetails schema={details} get={get} param={param} />
                    </div>
                ))}
                
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                    <button 
                        type="button" 
                        onClick={addCreateDetails}
                        style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Agregar Detalles
                    </button>
                </div>
                
                <button type="submit" style={{ marginRight: '10px', background: '#007bff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Crear</button>
                <button type="button" onClick={() => window.history.back()} style={{ background: '#f0f0f0', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Cancelar</button>
            </form>
        </div>
    )
}