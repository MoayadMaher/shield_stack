import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

export default async function Page() {
  const prisma = new PrismaClient();

  const session = (await getServerSession()) || null;
  const userInfo = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? undefined,
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          Account Page
        </h1>
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <table className="min-w-full leading-normal">
            <tbody>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <img
                    className="mx-auto h-20 w-20 rounded-full"
                    src={userInfo?.image || "/user.png"}
                    alt="User profile"
                  />
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-lg">
                  <p className="whitespace-no-wrap text-center text-gray-900">
                    {userInfo?.name}
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-lg">
                  <p className="whitespace-no-wrap text-center text-gray-900">
                    {userInfo?.email}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
