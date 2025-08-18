import { useEffect, useState, useCallback } from 'react';
import Pagination from '../components/Pagination.jsx';
import ProductFilters from '../components/ProductsFilters.jsx';
import useQueryFilters from '../hooks/useQueryFilters';
import { getProducts } from '../api/products.js';
import ProductTable from '../components/products/ProductTable.jsx';

const schema = {
    name: 'string',
    page: 'number',
    limit: 'number'
};

const defaults = { page: 1, limit: 10 };

export default function Products() {
    const { filters, setFilters } = useQueryFilters({ schema });
    const [data, setData] = useState({ productos: [], total: 0, page: 1, totalPages: 1 });
    const [loading, setLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            await getProducts(filters)
                .then(response => {
                    const d = response.data
                    setData({
                        productos: d.data || [],
                        total: d.total || 0,
                        page: filters.page || 1,
                        totalPages: Math.ceil((d.total || 0) / (filters.limit || 10))
                    });
                });
        } finally {
            setLoading(false);
        }
    }, [filters]);

    const f = [{
                name: 'name',
                type: 'text',
                placeholder: 'Buscar por nombre',
                value: filters.name || ''
                }
            ]

    useEffect(() => { load(); }, [load]);

    const onApplyFilters = (patch) => setFilters(patch, { replace: false, resetPage: true });
    const onChangeLimit = (limit) => setFilters({ limit }, { replace: false, resetPage: true });
    const onPageChange = (p) => setFilters({ page: p }, { replace: false, resetPage: false });

    return (
        <div style={{ display:'grid', gap:16 }}>
            <h1>Productos</h1>

            <ProductFilters
                initial={f}
                onApply={onApplyFilters}
                onReset={() => setFilters({name:"", page:1}, { replace: false })}
            />

            {loading ? <p>Cargando…</p> : (
                <>
                    <ProductTable
                        products={data.productos}
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
