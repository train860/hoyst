# Supabase Email Collection Setup

## 1. Environment Variables Configuration

Create a `.env.local` file in your project root and add the following environment variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 2. Supabase Database Table Setup

In your Supabase project, create a table named `waitlist` with the following fields by running this SQL in the Supabase SQL Editor:

```sql
-- Create the waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for email field to improve query performance
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts for all users
CREATE POLICY "Enable insert for all users" ON waitlist FOR INSERT WITH CHECK (true);

-- Create policy to allow reading for all users (optional)
CREATE POLICY "Enable read for all users" ON waitlist FOR SELECT USING (true);
```

**Important:** The `UNIQUE` constraint on the email field prevents duplicate emails from being inserted.

## 3. Get Supabase Configuration Information

1. Login to [Supabase Dashboard](https://app.supabase.com/)
2. Select your project
3. Click "Settings" → "API" in the left sidebar
4. Copy the following information:
   - Project URL (use as `NEXT_PUBLIC_SUPABASE_URL`)
   - anon/public key (use as `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## 4. Features

- ✅ Email validation
- ✅ Duplicate email detection with proper error messages
- ✅ Loading states
- ✅ Success/error message display
- ✅ Form state management
- ✅ Responsive design
- ✅ Proper error handling for database constraints

## 5. How to Use

After completing the configuration, when users fill out and submit the email form, their email will be automatically saved to the `waitlist` table in your Supabase database.

If a user tries to submit the same email twice, they will see the message: "This email is already on our waitlist!"

To view collected emails, go to the Supabase Dashboard and check the `waitlist` table in the "Table Editor".

## 6. Testing the Duplicate Prevention

1. Complete the setup above
2. Submit an email through the form
3. Try submitting the same email again
4. You should see the error message about the email already being on the waitlist

## 7. Troubleshooting

- If you see "Supabase not configured" error: Check your `.env.local` file and restart the dev server
- If you see "The waitlist table does not exist": Run the SQL commands from step 2
- If duplicate emails are still allowed: Verify the UNIQUE constraint was applied correctly by checking the table structure in Supabase 