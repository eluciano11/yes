"use client";

import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Navigate from "@yes/components/Navigate";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@yes/types/database";

export default function Login() {
  const supabase = createClientComponentClient<Database>();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!session) {
    return (
      <Grid container justifyContent="center" mt={8}>
        <Grid item xs={4}>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
            redirectTo={window.location.origin}
          />
        </Grid>
      </Grid>
    );
  }

  if (session) {
    return <Navigate to="/plans/1/business-idea" />;
  }

  return null;
}
