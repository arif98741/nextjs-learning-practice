export default function Notes({params}:{
    params: {
        userId: string
    }
})
{
    return (
        <>
            <h1>user notes {params.userId}</h1>
        </>
    )
}