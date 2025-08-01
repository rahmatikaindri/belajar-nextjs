export default async function MapelDetails({
    params,
}: {
    params: Promise<{ mapelId: string }>;
}) {
    const mapelId = (await params).mapelId;
    return <h1>Details about Mapel {mapelId}</h1>;
}
