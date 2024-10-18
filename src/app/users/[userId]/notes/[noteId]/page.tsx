export default function NoteDetails({params}:{
    params: {
        userId: string,
        noteId: string,
    }
})
{
    return (
        <>
            <h1>show note id {params.noteId} for user {params.userId}</h1>
        </>
    )
}