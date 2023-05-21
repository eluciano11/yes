import VoiceBuilder from "@yes/components/VoiceBuilder";
import { VoicesResponse } from "@yes/types/responses";

async function getVoices() {
  const res = await fetch("http://localhost:3000/api/voice");

  if (!res.ok) {
    return { error: { message: "Error fetching voices" } };
  }

  const data: VoicesResponse = await res.json();

  return { data };
}

export default async function Voice() {
  const { data, error } = await getVoices();

  if (error) {
    return <div>Errors</div>;
  }

  if (data) {
    return (
      <VoiceBuilder
        brandTypes={data.brandTypes}
        communicationTypes={data.communicationTypes}
        objectives={data.objectives}
      />
    );
  }

  return null;
}
