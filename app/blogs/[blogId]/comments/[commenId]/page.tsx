export default async function BlogComments({
    params,
}: {
    params : Promise<{blogId: string, commenId: string}>
}) {
    const {blogId, commenId} = await params
    return (
        <h1>Coment {commenId} for Blog {blogId}</h1>
    )
}
