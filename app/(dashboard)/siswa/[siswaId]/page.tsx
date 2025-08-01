export default async function SiswaDetails({
    params,
}: {
    params: Promise<{ siswaId: string }>;
}) {
    const siswaId = (await params).siswaId;
    return <h1>Details id siswa {siswaId}</h1>;
}
