import getSupabaseInstance from "@yes/libs/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = getSupabaseInstance();

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
