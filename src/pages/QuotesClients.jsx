import { useEffect, useState, useCallback, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pagination from '../components/Pagination.jsx';
import Filters from '../components/Filters.jsx';
import useQueryFilters from '../hooks/useQueryFilters';
import { getQuotesClients, getQuotesClientById, createQuotesClient, updateQuotesClient, deleteQuotesClient } from '../api/QuotesClients.js';
import { getClients } from '../api/clients.js';
import Table from '../components/Table.jsx';
import { CreatePage } from "./Create.jsx"
import { schemaQuotesClients as schema, d } from '../data/data.js';
import { CreateContext } from '../context/createContext.jsx';



export default function QuotesClients() {
    const { filters, setFilters } = useQueryFilters({ schema, d });
    const [data, setData] = useState({ QuotesClients: [], total: 0, page: 1, totalPages: 1 });
    const [loading, setLoading] = useState(false);
    const {setFunctions} = useContext(CreateContext)
    

    const load = useCallback(async () => {
        setLoading(true);
        try {
            await getQuotesClients(filters)
                .then(response => {
                    const d = response.data
                    setData({
                        QuotesClients: d.data || [],
                        total: d.total || 0,
                        page: filters.page || 1,
                        totalPages: Math.ceil((d.total || 0) / (filters.limit || 10))
                    });
                });
        } finally {
            setLoading(false);
        }
    }, [filters]);

    useEffect(() => { load(); }, [load]);

    const onApplyFilters = (patch) => setFilters(patch, { replace: false, resetPage: true });
    const onChangeLimit = (limit) => setFilters({ limit }, { replace: false, resetPage: true });
    const onPageChange = (p) => setFilters({ page: p }, { replace: false, resetPage: false });

    return (
        <div style={{ display:'grid', gap:16 }}>
            <h1>Proveedores</h1>

            <Link to="/create/QuotesClients">Crear</Link>
            
            <Filters
                initial={filters}
                schema={schema}
                onApply={onApplyFilters}
                onReset={() => setFilters({}, { replace: false, resetFilters: true })}
            />

            {loading ? <p>Cargando…</p> : (
                <>
                    <Table
                        data={data.QuotesClients}
                        columns={schema}
                        update={updateQuotesClient}
                        load={load}
                        onDelete={deleteQuotesClient}
                    />
                    <Pagination
                        page={data.page}
                        totalPages={data.totalPages}
                        limit={filters.limit}
                        onChange={onPageChange}
                        onChangeLimit={onChangeLimit}
                    />
                </>
            )}
        </div>
    );
}
