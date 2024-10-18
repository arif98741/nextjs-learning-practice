export default function Docs({ params: { slug } }) {
    console.log(`length is ${slug?.length}`);
    console.log(slug);

    const renderContent = () => {
        if (!slug?.length) return <h1>Viewing Docs Home page</h1>;

        const feature = <h1>Viewing docs for feature {slug[0]}</h1>;
        const concept = slug[1] ? ` and concept ${slug[1]}` : "";
        const example = slug[2] ? ` along with example ${slug[2]}` : "";

        return (
            <h1>
                {feature}
                {concept}
                {example}
            </h1>
        );
    };

    return <>{renderContent()}</>;
}
