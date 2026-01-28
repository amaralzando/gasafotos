import { ViewerScreen } from "./_components/viewer-screen";

export default async function FotoViewerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ViewerScreen id={id} />;
}
