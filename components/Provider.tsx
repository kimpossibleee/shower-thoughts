'use client';
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
type Props = {
  children: ReactNode;
  session: any;
};
const Provider = ({ children, session }: Props) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;
