export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      admin_activity: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string
          entity: string
          entity_id: string
          id: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string
          entity: string
          entity_id: string
          id?: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string
          entity?: string
          entity_id?: string
          id?: string
        }
        Relationships: []
      }
      admin_ownership: {
        Row: {
          developer_revoked: boolean
          developer_user_id: string | null
          owner_user_id: string | null
          singleton: boolean
          transferred_at: string | null
        }
        Insert: {
          developer_revoked?: boolean
          developer_user_id?: string | null
          owner_user_id?: string | null
          singleton?: boolean
          transferred_at?: string | null
        }
        Update: {
          developer_revoked?: boolean
          developer_user_id?: string | null
          owner_user_id?: string | null
          singleton?: boolean
          transferred_at?: string | null
        }
        Relationships: []
      }
      enquiries: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string
          service: string
          source: string
          status: string
          updated_at: string
          zip: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone: string
          service: string
          source?: string
          status?: string
          updated_at?: string
          zip: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string
          service?: string
          source?: string
          status?: string
          updated_at?: string
          zip?: string
        }
        Relationships: []
      }
      enquiry_notes: {
        Row: {
          author_id: string
          body: string
          created_at: string
          enquiry_id: string
          id: string
        }
        Insert: {
          author_id: string
          body: string
          created_at?: string
          enquiry_id: string
          id?: string
        }
        Update: {
          author_id?: string
          body?: string
          created_at?: string
          enquiry_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "enquiry_notes_enquiry_id_fkey"
            columns: ["enquiry_id"]
            isOneToOne: false
            referencedRelation: "enquiries"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          display_name: string
          id: string
          timezone: string
          updated_at: string
        }
        Insert: {
          display_name?: string
          id: string
          timezone?: string
          updated_at?: string
        }
        Update: {
          display_name?: string
          id?: string
          timezone?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          created_at: string
          description: string
          display_order: number
          enabled: boolean
          id: string
          image_alt: string
          image_url: string
          slug: string
          summary: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          display_order?: number
          enabled?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          slug: string
          summary?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          enabled?: boolean
          id?: string
          image_alt?: string
          image_url?: string
          slug?: string
          summary?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      website_content: {
        Row: {
          draft: Json
          label: string
          published: Json
          published_at: string | null
          section_key: string
          updated_at: string
        }
        Insert: {
          draft?: Json
          label: string
          published?: Json
          published_at?: string | null
          section_key: string
          updated_at?: string
        }
        Update: {
          draft?: Json
          label?: string
          published?: Json
          published_at?: string | null
          section_key?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_media_unused: { Args: { p_path: string }; Returns: boolean }
      admin_overview: { Args: never; Returns: Json }
      admin_save_comparisons: {
        Args: { p_draft: Json; p_published?: Json }
        Returns: undefined
      }
      admin_save_content: {
        Args: {
          p_fields: Json
          p_key: string
          p_label: string
          p_publish: boolean
        }
        Returns: undefined
      }
      admin_setup_open: { Args: never; Returns: boolean }
      claim_initial_admin: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      public_website_content: {
        Args: never
        Returns: {
          published: Json
          section_key: string
        }[]
      }
      published_media_paths: {
        Args: never
        Returns: {
          path: string
        }[]
      }
      revoke_temporary_admin: { Args: never; Returns: boolean }
      submit_website_enquiry: {
        Args: {
          p_email: string
          p_message: string
          p_name: string
          p_phone: string
          p_service: string
          p_source: string
          p_zip: string
        }
        Returns: string
      }
    }
    Enums: {
      app_role: "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin"],
    },
  },
} as const
