import { useMemo, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { parseQuery, buildSearchParams } from '../utils/queryFilters';

export default function useQueryFilters({ schema, resetPageKey = 'page' }) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Lee filtros actuales desde la URL, con defaults
    const filters = useMemo(() => {
        const parsed = parseQuery(searchParams, schema);
        return { ...parsed };
    }, [searchParams, schema]);

    // Reemplaza/mezcla filtros y actualiza URL
    const setFilters = useCallback((patch, { replace = false, resetPage = true } = {}) => {
        const next = { ...filters, ...patch };
        if (resetPage) next[resetPageKey] = 1;

        const sp = buildSearchParams(next, schema);
        const url = `?${sp.toString()}`;
        navigate({ search: url }, { replace });
        }, [filters, schema, navigate, resetPageKey]);
    return { filters, setFilters };
}
