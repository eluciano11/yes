import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // Get the user from supabase
  const supabase = createRouteHandlerClient({ cookies });
  const user = await supabase.auth.getUser();

  if (user.error)
    return NextResponse.json({ error: user.error }, { status: 500 });

  // Create a new plan in supabase if the user doesn't have one.
  const plan = await supabase
    .from("plans")
    .select()
    .eq("user_id", user.data.user.id)
    .single();

  if (plan.data != null) return NextResponse.json({ plan: plan.data });

  const newPlan = await supabase
    .from("plans")
    .insert({ user_id: user.data.user.id });

  if (newPlan.error)
    return NextResponse.json({ error: newPlan.error }, { status: 500 });

  return NextResponse.json(newPlan.data);
}
