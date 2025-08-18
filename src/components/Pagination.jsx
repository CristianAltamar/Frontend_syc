import { useState } from 'react';

export default function Pagination({ page, totalPages, limit, onChange, onChangeLimit }) {

    return (
        <div style={{ display:'flex', gap:8 }}>
            <button disabled={page<=1} onClick={() => onChange(page-1)}>Anterior</button>
            <span>Página {page} de {totalPages}</span>
            <button disabled={page>=totalPages} onClick={() => onChange(page+1)}>Siguiente</button>
            <select value={limit} onChange={e => onChangeLimit(Number(e.target.value))}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    );
}
