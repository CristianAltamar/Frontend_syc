// src/utils/queryFilters.js
export function parseQuery(searchParams, schema, d) {
    // schema: { nombre:'string', precio_max:'number', stock_min:'number', tags:'array' }
    schema = [...schema, ...d]
    const obj = {};
    for (const param of schema) {
        const type = param.type;
        const v = searchParams.get(param.name);

        if (v == null || v === '') continue;
        if (type === 'number') obj[param.name] = Number(v);
        else obj[param.name] = v;
        
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
