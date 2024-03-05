import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";

import { Actions } from "./_components/actions";

interface UserPageProps {
  params: { username: string };
}

const userPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div>
      <p>username: {user.username}</p>
      <p>user Id: {user.id}</p>
      <p>is Following: {`${isFollowing}`}</p>
      <Actions />
    </div>
  );
};

export default userPage;
