import { use, useEffect } from "react";

export const Edit = ({data, columns, update, load}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());
        await update(data.UniqueID, updatedData);
        load();
    };
    return (
        <form onSubmit={e => handleSubmit(e)}>
            {columns.map(c => (
                <div key={c.name}>
                    { c.tableView &&
                    <label>
                        {c.alias}:
                        <input
                            disabled={!c.edit}
                            type={c.type}
                            name={c.name}
                            defaultValue={data[c.name]}
                        />
                    </label>}
                </div>
            ))}
            <button type="submit">Guardar</button>
        </form>
    );
}