import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Get the user from supabase.
  const supabase = createRouteHandlerClient({ cookies });

  const data = await req.json();
  const planId = params.id;

  // Update the user's plan in supabase.
  const { data: planData, error } = await supabase
    .from("plans")
    .update(data)
    .eq("id", planId)
    .single();

  if (error) {
    return NextResponse.json(
      { error },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json(planData);
}
