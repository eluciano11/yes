import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

interface NavigateProps {
  to: string;
}

export default function Navigate({ to }: NavigateProps) {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push(to);
  }, []);

  return null;
}
