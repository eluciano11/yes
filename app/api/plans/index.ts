import getSupabaseInstance from "@yes/libs/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  // Get the user from supabase
  const supabase = getSupabaseInstance();
  const user = await supabase.auth.getUser();

  if (user.error)
    return NextResponse.json({ error: user.error }, { status: 500 });

  // Create a new plan in supabase if the user doesn't have one.
  const plan = await supabase
    .from("plans")
    .select()
    .eq("user_id", user.data.user.id);

  if (plan.error) {
    const newPlan = await supabase
      .from("plans")
      .insert({ user_id: user.data.user.id });

    if (newPlan.error)
      return NextResponse.json({ error: newPlan.error }, { status: 500 });

    return NextResponse.json({ plan: newPlan.data[0] });
  }

  // Return a 204 response if the user already has a plan.
  return NextResponse.json({ plan: plan.data[0] }, { status: 204 });
}

export async function PATCH(req: NextRequest, res: NextResponse) {
  // Get the user from supabase.
  const supabase = getSupabaseInstance();

  // Get the user's plan from supabase.

  // Update the user's plan in supabase.

  const values = await supabase.from("values").select();
  const valueCategories = await supabase.from("value_categories").select();

  if (values.error) {
    return NextResponse.json(
      {
        body: values.error,
      },
      { status: 500 }
    );
  }

  if (valueCategories.error) {
    return NextResponse.json(
      { error: valueCategories.error },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({
    values: values.data,
    valueCategories: valueCategories.data,
  });
}
