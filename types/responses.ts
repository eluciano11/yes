import { Database } from "./database";

export interface ValuesResponse {
  values: Database["public"]["Tables"]["values"]["Row"][];
  valueCategories: Database["public"]["Tables"]["value_categories"]["Row"][];
}

export interface VoicesResponse {
  brandTypes: Database["public"]["Tables"]["brand_types"]["Row"][];
  communicationTypes: Database["public"]["Tables"]["communication_types"]["Row"][];
  objectives: Database["public"]["Tables"]["objectives"]["Row"][];
}
