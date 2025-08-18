export default function ProductTable(data) {
    return (
        <>
            <h1>Product Management</h1>
            {
                data.products && data.products.length > 0 ? (
                <ul>
                    {data.products.map(product => (
                    <li key={product.UniqueID}>{product.name}</li>
                    ))}
                </ul>
                ) : (
                <p>No products available</p>
                )
            }
    </>
)};