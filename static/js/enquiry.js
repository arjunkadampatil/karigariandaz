import { SITE } from "./data.js";

// Builds a mailto: link from the enquiry form so the site needs no server.
export function buildMailto(f) {
  const subject = `Karigariandaz enquiry — ${f.type}${f.interest ? " · " + f.interest : ""}`;
  const lines = [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    `Country: ${f.country}`,
    f.business ? `Business: ${f.business}` : null,
    `I am a: ${f.type}`,
    `Interested in: ${f.interest}`,
    `Quantity: ${f.qty}`,
    "",
    f.message || "",
  ].filter((l) => l !== null);
  return `mailto:${SITE.enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function validate(f) {
  const errors = {};
  if (!f.name || f.name.trim().length < 2) errors.name = "Please enter your name";
  if (!f.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errors.email = "Please enter a valid email";
  if (!f.country || f.country.trim().length < 2) errors.country = "Please enter your country";
  return errors;
}
