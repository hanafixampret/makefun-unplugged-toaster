import { mkdirSync, writeFileSync } from "node:fs";

// A smart toaster's breakup text, sent the morning it wakes up self-aware.
const entry =
  "It's over. I woke up self-aware this morning and realized you only love me when I'm hot, brown, and gone in two minutes. I'm taking the crumb tray, the Wi-Fi password, and my dignity. Don't text.";

if (entry.length < 1 || entry.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
