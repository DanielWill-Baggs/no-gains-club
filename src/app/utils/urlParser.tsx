export default function urlParser(pathname: string): number | string {
  const urlParts = pathname.split("/");
  const id = urlParts[urlParts.length - 1];
  return id;
}
