export default function Docs({params}:{
    params: {
        slug: string
    }
}){
    console.log(`length is ${params.slug?.length}`)
    console.log(params)
    
    if(params.slug?.length === 3 )
    {
        return (
            <>
                <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]} along with example {params.slug[2]}</h1>
            </>
        )
    }else if(params.slug?.length === 2 )
    {
        return (
            <>
                <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
            </>
        )
    }else if(params.slug?.length === 1 )
    {
        return (
            <>
                <h1>Viewing docs for feature {params.slug[0]} </h1>
            </>
        )
    }else{
        return (
            <>
               <h1>Viewing Docs Home page</h1>
            </>
        )
    }
}