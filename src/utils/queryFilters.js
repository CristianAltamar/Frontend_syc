// src/utils/queryFilters.js
export function parseQuery(searchParams, schema) {
    // schema: { nombre:'string', precio_max:'number', stock_min:'number', tags:'array' }
    const obj = {};
    for (const key in schema) {
        const type = schema[key];
        const v = searchParams.get(key);

        if (v == null || v === '') continue;
        if (type === 'number') obj[key] = Number(v);
        else obj[key] = v;
        
    }
    return obj;
}

export function buildSearchParams(filters) {
    const sp = new URLSearchParams();
    for (const key in filters) {
        const val = filters[key];
        if (val == null || val === '') continue;
        else {
            sp.set(key, String(val));
        }
    }
    return sp;
}
