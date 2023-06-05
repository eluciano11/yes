import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  // Get the user from supabase.
  const supabase = createServerComponentClient({ cookies });
  const user = await supabase.auth.getUser();

  if (user.error)
    return NextResponse.json({ error: user.error }, { status: 500 });

  // Update the user's plan in supabase.
  const { data: plans, error } = await supabase
    .from("plans")
    .select()
    .eq("user_id", user.data.user.id);

  if (error) {
    return NextResponse.json(
      { error },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({ plans });
}
