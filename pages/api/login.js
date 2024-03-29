import { setAuthCookies } from "next-firebase-auth";
import initAuth from "../../utils/firebase/auth/initAuth";

initAuth();

const handler = async (req, res) => {
  try {
    console.log('req', req)
    await setAuthCookies(req, res);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Unexpected error." });
  }
  return res.status(200).json({ success: true });
};

export default handler;
