import fs from "node:fs";
import path from "node:path";
import admin from "firebase-admin";

const collectionName = process.argv[2];
const filePath = process.argv[3];
const write = process.argv.includes("--write");

if (!["destinations", "businesses"].includes(collectionName) || !filePath) {
  console.error("Usage: node import-catalog.mjs destinations ../data/destinations.json [--write]");
  process.exit(1);
}

const records = JSON.parse(
  fs.readFileSync(path.resolve(filePath), "utf8").replace(/^\uFEFF/, "")
);

if (!Array.isArray(records) || records.length === 0) {
  throw new Error("JSON must contain a non-empty array.");
}

const prepared = records.map((record, index) => {
  const { id, ...data } = record;
  const documentId = String(id ?? "").trim();

  if (!documentId || documentId.includes("/")) {
    throw new Error(`Invalid document ID at row ${index + 1}`);
  }

  if (!data.name || typeof data.name !== "string") {
    throw new Error(`Missing name at row ${index + 1}`);
  }

  if (collectionName === "destinations" && typeof data.published !== "boolean") {
    throw new Error(`Destination ${documentId} must have published: true or false`);
  }

  return { documentId, data };
});

const ids = prepared.map(item => item.documentId);

if (new Set(ids).size !== ids.length) {
  throw new Error("Duplicate document IDs found.");
}

console.log(`Collection: ${collectionName}`);
console.log(`Records: ${prepared.length}`);
console.log(`Mode: ${write ? "UPLOAD" : "PREVIEW"}`);

for (const item of prepared) {
  console.log(`${item.documentId}: ${item.data.name}`);
}

if (!write) {
  console.log("\nPreview complete. No data uploaded.");
  process.exit(0);
}

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  throw new Error("Set GOOGLE_APPLICATION_CREDENTIALS first.");
}

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: "tarasaisla-ce366"
});

const db = admin.firestore();

for (const item of prepared) {
  await db.collection(collectionName)
    .doc(item.documentId)
    .set(item.data, { merge: true });

  console.log(`Uploaded: ${item.data.name}`);
}

console.log("\nImport completed successfully!");
