import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables not set, please check .env.local file')
  console.warn('Required: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Email collection function
export async function addEmailToWaitlist(email: string) {
  // Check if Supabase client is initialized
  if (!supabase) {
    return { 
      success: false, 
      error: 'Supabase not configured. Please set environment variables and restart the dev server.' 
    }
  }

  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {

      // Handle duplicate email error (PostgreSQL unique constraint violation)
      if (error.code === '23505' || error.message.includes('duplicate key value')) {
        return { success: false, error: 'This email is already on our waitlist!' }
      }
      
      // Handle other potential errors
      if (error.code === 'PGRST116') {
        return { success: false, error: 'The waitlist table does not exist. Please create it first.' }
      }
      
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: 'An error occurred while adding your email. Please try again.' }
  }
} 