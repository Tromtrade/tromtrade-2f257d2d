-- Drop the overly permissive INSERT policy
DROP POLICY "Anyone can submit a lead" ON public.leads;

-- Create a tighter INSERT policy that enforces status='new' and consent=true
CREATE POLICY "Anyone can submit a lead"
ON public.leads
FOR INSERT
TO public
WITH CHECK (status = 'new' AND consent = true);
