import { useEffect, useState, useCallback } from 'react';
import Pagination from '../components/Pagination.jsx';
import Filters from '../components/Filters.jsx';
import useQueryFilters from '../hooks/useQueryFilters';
import { getClients, createClient, updateClient, deleteClient } from '../api/clients.js';
import Table from '../components/Table.jsx';
import { Create } from '../components/Create.jsx';
import { schemaThird as schema, d } from '../data/data.js';


export default function Clients() {
    const { filters, setFilters } = useQueryFilters({ schema, d });
    const [data, setData] = useState({ clients: [], total: 0, page: 1, totalPages: 1 });
    const [loading, setLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            await getClients(filters)
                .then(response => {
                    const d = response.data
                    setData({
                        clients: d.data || [],
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
            <h1>Clientes</h1>

            <Create
                fields={schema}
                create={createClient}
                load={load}/>
            <Filters
                initial={filters}
                schema={schema}
                onApply={onApplyFilters}
                onReset={() => setFilters({}, { replace: false, resetFilters: true })}
            />

            {loading ? <p>Cargando…</p> : (
                <>
                    <Table
                        data={data.clients}
                        columns={schema}
                        update={updateClient}
                        load={load}
                        onDelete={deleteClient}
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
