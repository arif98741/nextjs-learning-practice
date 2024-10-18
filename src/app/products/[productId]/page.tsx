export default function ProductDetails({ params }: {
    params: {productId: string}
})
{
    return (
        <>
            product details {params.productId}
        </>
    )
}