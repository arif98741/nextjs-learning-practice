export default function ReviewDetails({ params}:{
    reviews:{productId: string,reviewId: string}
})
{
    return (
        <>
            <h1>product {params.productId}, review {params.reviewId}</h1>
        </>
    )
}