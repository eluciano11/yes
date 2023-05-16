import { Database } from "./database";

export default interface ValuesResponse {
  values: Database["public"]["Tables"]["values"]["Row"][];
  valueCategories: Database["public"]["Tables"]["value_categories"]["Row"][];
}
