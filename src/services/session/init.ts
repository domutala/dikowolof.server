import _add from "../../data/session/add";
/**
 * initaliser un nouvelle session.
 *
 * @author domutala
 * @param publicKey - clé public du client
 *
 */
export default async ({ clientPublicKey }: { clientPublicKey: string }) => {
  const session = await _add({ publicKey: clientPublicKey });

  return session;
};
