import { test } from "node:test";
import assert from "node:assert/strict";
// @ts-ignore -- Node's native TypeScript runner requires the file extension.
import { emptyContact, validateContact } from "../lib/contact.ts";
const valid = {
  ...emptyContact,
  name: "Alex Example",
  organization: "Example Agency",
  email: "alex@example.org",
  location: "Springfield, IL",
  service: "Grounds maintenance and mowing",
  message: "Please discuss a seasonal maintenance scope.",
};
test("accepts a complete inquiry with optional phone omitted", () =>
  assert.deepEqual(validateContact(valid), {}));
test("requires all six mandatory fields", () =>
  assert.equal(Object.keys(validateContact(emptyContact)).length, 6));
test("rejects invalid email and unlisted services", () => {
  const errors = validateContact({
    ...valid,
    email: "invalid@",
    service: "invented",
  });
  assert.ok(errors.email);
  assert.ok(errors.service);
});
test("rejects oversized messages and invalid phone", () => {
  const errors = validateContact({
    ...valid,
    message: "x".repeat(5001),
    phone: "letters",
  });
  assert.ok(errors.message);
  assert.ok(errors.phone);
});
