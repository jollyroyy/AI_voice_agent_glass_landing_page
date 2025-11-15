/*
  # Create contact_submissions table for storing contact form data

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `user_id` (uuid, nullable) - Reference to authenticated user if logged in
      - `full_name` (text) - Submitter's full name
      - `email` (text) - Submitter's email address
      - `company` (text, nullable) - Company or organization name
      - `message` (text) - User's message or inquiry
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of submission (new, contacted, resolved)
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to view their own submissions
    - Add policy for authenticated users to create new submissions
    - Add policy for anonymous users to create new submissions (contact form access)
    
  3. Important Notes
    - Contact forms can be submitted by both authenticated and anonymous users
    - User ID is optional to support anonymous submissions
    - Default status is 'new' for all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create submissions"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anonymous users can create submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (user_id IS NULL);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_user_id ON contact_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);