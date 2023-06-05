export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      brand_types: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      communication_types: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      objectives: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      plans: {
        Row: {
          answer_1: string | null
          answer_2: string | null
          answer_3: string | null
          brand_type_id: number | null
          communication_type_id: number | null
          created_at: string | null
          id: number
          mission: string | null
          name: string | null
          objective_ids: number[] | null
          projection_ids: number[] | null
          story: string | null
          user_id: string | null
          value_ids: number[] | null
          vision: string | null
        }
        Insert: {
          answer_1?: string | null
          answer_2?: string | null
          answer_3?: string | null
          brand_type_id?: number | null
          communication_type_id?: number | null
          created_at?: string | null
          id?: number
          mission?: string | null
          name?: string | null
          objective_ids?: number[] | null
          projection_ids?: number[] | null
          story?: string | null
          user_id?: string | null
          value_ids?: number[] | null
          vision?: string | null
        }
        Update: {
          answer_1?: string | null
          answer_2?: string | null
          answer_3?: string | null
          brand_type_id?: number | null
          communication_type_id?: number | null
          created_at?: string | null
          id?: number
          mission?: string | null
          name?: string | null
          objective_ids?: number[] | null
          projection_ids?: number[] | null
          story?: string | null
          user_id?: string | null
          value_ids?: number[] | null
          vision?: string | null
        }
      }
      value_categories: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      values: {
        Row: {
          categories: number[] | null
          id: number
          name: string | null
        }
        Insert: {
          categories?: number[] | null
          id?: number
          name?: string | null
        }
        Update: {
          categories?: number[] | null
          id?: number
          name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
