import getSupabaseInstance from "@yes/libs/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = getSupabaseInstance();

  const brandTypes = await supabase.from("brand_types").select("id, name");
  const communicationTypes = await supabase
    .from("communication_types")
    .select("id, name");
  const objectives = await supabase.from("objectives").select("id, name");

  if (brandTypes.error) {
    return NextResponse.json(
      {
        body: brandTypes.error,
      },
      { status: 500 }
    );
  }

  if (communicationTypes.error) {
    return NextResponse.json(
      { error: communicationTypes.error },
      {
        status: 500,
      }
    );
  }

  if (objectives.error) {
    return NextResponse.json(
      { error: objectives.error },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({
    brandTypes: brandTypes.data,
    communicationTypes: communicationTypes.data,
    objectives: objectives.data,
  });
}
