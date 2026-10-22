// Contact details come from the environment so the real values can be supplied
// without editing components. A value that has not been configured is
// `undefined`, and every surface that shows contact details omits that row
// instead of rendering a placeholder.
//
// Values are read on the server and passed to client components as plain
// props. Public pages are statically prerendered, so the values are captured
// at build time — rebuild after changing them.
function read(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export type Contact = {
  email: string | undefined;
  phone: string | undefined;
  serviceArea: string | undefined;
  bookingUrl: string | undefined;
};

export const contact: Contact = {
  email: read("NEXT_PUBLIC_CONTACT_EMAIL"),
  phone: read("NEXT_PUBLIC_CONTACT_PHONE"),
  serviceArea: read("NEXT_PUBLIC_SERVICE_AREA"),
  bookingUrl: read("NEXT_PUBLIC_BOOKING_URL"),
};

export function mailtoHref(email: string) {
  return `mailto:${email}`;
}

// `tel:` links must not contain spaces or formatting characters.
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
