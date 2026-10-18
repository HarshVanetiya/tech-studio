// Single source of truth for brand details. The brand name is still a working
// placeholder — change it here and it updates across the navbar, footer and metadata.
export const site = {
    name: 'IT STUDIO',
    email: 'hello@example.com',
    tagline:
        'Websites, growth and custom software for businesses that want it done right.',
    year: 2026,
};

// Home page sections, in page order. `id` must match the section's id attribute.
export const sections = [
    { id: 'services', name: 'Services' },
    { id: 'approach', name: 'Approach' },
    { id: 'process', name: 'Process' },
    { id: 'work', name: 'Work' },
] as const;

export const contactId = 'contact';
