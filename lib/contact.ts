// Shared between the contact form (client) and the sendEnquiry server action.

export const serviceOptions = [
  'Website',
  'Ads & growth',
  'Business tool',
  'Custom software',
  'Automation / AI',
  'Not sure yet',
] as const;

export type ContactField = 'name' | 'email' | 'company' | 'service' | 'message';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  // Unique per submission, so the success panel can be dismissed and re-shown
  id?: string;
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  // Echoed back on error so React's post-action form reset keeps what was typed
  values?: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactState = { status: 'idle' };
