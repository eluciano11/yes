import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Plans from "@yes/components/Plans";

async function getPlans() {
  // Get the user from supabase.
  const supabase = createServerComponentClient({ cookies });
  const user = await supabase.auth.getUser();

  if (user.error) return { error: true };

  // Update the user's plan in supabase.
  const { data: plans, error } = await supabase
    .from("plans")
    .select()
    .eq("user_id", user.data.user.id);

  if (error) {
    return { error: true };
  }

  return { plans: plans ?? [] };
}

export default async function PlansPage() {
  const { plans } = await getPlans();

  return <Plans plans={plans} />;
}
