/*
  # Fix Contact Submissions RLS Policy

  1. Changes
    - Drop existing INSERT policies
    - Create new simplified INSERT policy that allows anyone to submit
    - This enables both anonymous and authenticated users to submit the contact form

  2. Security
    - Policy still restricts to INSERT only
    - SELECT remains restricted to authenticated users viewing their own submissions
*/

-- Drop existing INSERT policies
DROP POLICY IF EXISTS "Anonymous users can create submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can create submissions" ON contact_submissions;

-- Create a single permissive INSERT policy for all users
CREATE POLICY "Anyone can create submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
