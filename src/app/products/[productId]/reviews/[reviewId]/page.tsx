export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <>
      <h1 id={params.productId}>
        product {params.productId}, review {params.reviewId}
      </h1>
    </>
  );
}
