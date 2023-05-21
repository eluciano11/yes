import ValuesTable from "@yes/components/ValuesForm";
import { ValuesResponse } from "@yes/types/responses";

interface Response {
  data?: ValuesResponse;
  error?: { message: string };
}

async function getValues(): Promise<Response> {
  const res = await fetch("http://localhost:3000/api/values");

  if (!res.ok) {
    return { error: { message: "Error fetching values" } };
  }

  const data: ValuesResponse = await res.json();

  return { data };
}

export default async function Values() {
  const { data, error } = await getValues();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <ValuesTable
        values={data.values}
        valueCategories={data.valueCategories}
      />
    );
  }

  return null;
}
