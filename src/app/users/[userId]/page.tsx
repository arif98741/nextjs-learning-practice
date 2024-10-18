export default function UserDetails({params}:{
    params: {
        userId: string
    }
})
{
    return (
        <>
            <h1>user details for {params.userId}</h1>
        </>
    )
}