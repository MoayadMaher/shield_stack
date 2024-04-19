// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const { url } = req.query;
//   try {
//     const apiResponse = await fetch(
//       `https://humble-headers-analyzer-production.up.railway.app/?url=${url}`,
//     );
//     const data = await apiResponse.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to fetch data", error: error.message });
//   }
// }

export default async function handler(req: any, res: any) {
  return res.status(200).json({ message: "Hello World" });
}
