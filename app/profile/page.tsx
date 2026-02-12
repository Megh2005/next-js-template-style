import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackgroundPattern from "@/components/BackgroundPattern";
import Image from "next/image";
import SignOutButton from "@/components/SignOutButton";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  // @ts-ignore
  const { user } = session;

  if (!user) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <BackgroundPattern />
      <Card className="w-full max-w-md border-2 border-slate-900 shadow-md rounded-xl bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-slate-900">
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-900">
            {user.image || user.avatar ? (
              <Image
                src={
                  user.image ||
                  user.avatar ||
                  "https://robohash.org/placeholder"
                }
                alt="Avatar"
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-3xl">
                {user.name?.[0]?.toUpperCase()}
              </div>
            )}
          </div>

          <div className="w-full space-y-4 text-center">
            <div>
              <p className="text-sm font-medium text-slate-500">Name</p>
              <p className="text-lg font-bold text-slate-900">{user.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Email</p>
              <p className="text-lg font-bold text-slate-900">{user.email}</p>
            </div>
          </div>

          <SignOutButton />
        </CardContent>
      </Card>
    </div>
  );
}
