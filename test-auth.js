const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lizurfomyjlgtkccepew.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpenVyZm9teWpsZ3RrY2NlcGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MjkzMTUsImV4cCI6MjA5NzAwNTMxNX0.QBb53mpizZm83EXl2GRvoAKT-FaEK6F5OAWIEdOOb00';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testLogin() {
  console.log("Attempting to login...");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'admin@gmail.com',
    password: 'Test@1234',
  });

  if (error) {
    console.error("Login Error:", error.message);
  } else {
    console.log("Login Success! User ID:", data.user.id);
  }
}

testLogin();
