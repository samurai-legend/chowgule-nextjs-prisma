"use client";

import { useSession } from "next-auth/react";

const User: React.FC = () => {
  const { data: session } = useSession();
  console.log("Client Session", session);
  return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
