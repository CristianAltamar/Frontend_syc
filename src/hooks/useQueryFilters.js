import { useMemo, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { parseQuery, buildSearchParams } from '../utils/queryFilters';

export default function useQueryFilters({ schema, d }) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Lee filtros actuales desde la URL, con defaults
    const filters = useMemo(() => {
        const parsed = parseQuery(searchParams, schema, d);
        return { ...parsed };
    }, [searchParams, schema]);

    // Reemplaza/mezcla filtros y actualiza URL
    const setFilters = useCallback((patch, { replace = false, resetPage = false, resetFilters = false } = {}) => {
        let next = { ...filters, ...patch };
        if (resetPage) next["page"] = 1;
        if (resetFilters) next = {};
        
        const sp = buildSearchParams(next, schema);
        const url = `?${sp.toString()}`;
        navigate({ search: url }, { replace });
        }, [filters, schema, navigate]);
    return { filters, setFilters };
}
