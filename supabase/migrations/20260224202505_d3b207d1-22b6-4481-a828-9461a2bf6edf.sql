
-- Leads table for all form submissions (public, no auth required)
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL, -- 'quote', 'callback', 'contact', 'repair', 'maintenance'
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  city TEXT,
  address TEXT,
  service_type TEXT,
  property_type TEXT,
  area_sqm NUMERIC,
  heating_type TEXT,
  brand_preference TEXT,
  timeframe TEXT,
  notes TEXT,
  message TEXT,
  callback_time TEXT,
  device_brand TEXT,
  device_model TEXT,
  error_code TEXT,
  symptoms TEXT[],
  issue_started TEXT,
  last_maintenance TEXT,
  device_count INTEGER,
  preferred_dates TEXT,
  access_notes TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  page_url TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form submissions, no auth needed)
CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- No select/update/delete for anonymous users (admin only via service role)
