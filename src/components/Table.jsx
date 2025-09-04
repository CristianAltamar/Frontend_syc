import { useState } from 'react';
import { Edit } from "./Edit.jsx"

export default function ProductTable({data, columns, update, load, onDelete}) {
    const [edit, setEdit] = useState({isUpdating:false, data: null});

    const onDeleteData = async id => {
        const confirmation = confirm(`¿Está seguro de continuar con esta acción?`);
        
        if (confirmation) {
            await onDelete(id)
                .then(res =>{
                    load()
                    alert(res.data.message)})
                    .catch(e => alert(e.response.data.error))
        }
    }

    const onEdit = (p) => {
        setEdit({isUpdating: true, data: p});
    }

    return (
        <>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        {columns.map(c => (
                            <th key={c.name} style={{ border: '1px solid #ddd', padding: '8px', display: c.tableView ? "" : "none" }}>
                                {c.alias}
                            </th>
                        ))}
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.UniqueID}>
                            {Object.keys(d).map((key, index) => (
                                <td key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {d[key]}
                                </td>
                            ))}
                            <td>
                                <button onClick={() => onEdit(d)}>Editar</button>
                                <button onClick={() => onDeleteData(d.UniqueID)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {edit.isUpdating && 
            <Edit data={edit.data} columns={columns} update={update} load={load} />}
            {data.length === 0 && <p>No hay productos disponibles.</p>}
        </>
)};