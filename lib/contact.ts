export const serviceOptions = [
  "Grounds maintenance and mowing",
  "Landscaping and groundskeeping",
  "Seasonal site care",
  "Facility site support",
  "IT support and help desk",
  "Systems and network support",
  "Software and systems development",
  "Janitorial / custodial",
  "Facilities support coordination",
  "Multiple services / other",
] as const;
export type ContactData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  website: string;
};
export type ContactErrors = Partial<Record<keyof ContactData, string>>;
export const emptyContact: ContactData = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  message: "",
  website: "",
};
export function validateContact(data: ContactData): ContactErrors {
  const errors: ContactErrors = {};
  for (const key of [
    "name",
    "organization",
    "email",
    "location",
    "service",
    "message",
  ] as const)
    if (!data[key].trim()) errors[key] = "Please complete this field.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Enter a valid email address.";
  if (data.phone.trim() && !/^[+\d\s().-]{7,30}$/.test(data.phone.trim()))
    errors.phone = "Enter a valid phone number, or leave this blank.";
  if (
    data.service &&
    !serviceOptions.includes(data.service as (typeof serviceOptions)[number])
  )
    errors.service = "Choose a service from the list.";
  for (const key of Object.keys(data) as (keyof ContactData)[]) {
    const limit = key === "message" ? 5000 : 200;
    if (data[key].length > limit)
      errors[key] = `Use ${limit} characters or fewer.`;
  }
  return errors;
}
