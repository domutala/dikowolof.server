export default function <T>(object?: T) {
  if (!object) return undefined;

  object = { ...(object as any) };

  (object as any).id = (object as any).id.toString();
  return object;
}
