// Uploads local video files to Vercel Blob and prints the resulting public URLs.
//
// Usage:
//   node --env-file=.env.local scripts/upload-videos.js <file1> [file2] [file3] ...
//
// Requires BLOB_READ_WRITE_TOKEN in the environment (pulled via `vercel env pull
// --environment=production .env.local`, with the secret value pasted in manually
// since Vercel CLI won't expose Secret-type env vars automatically).

const fs = require("fs");
const path = require("path");
const { put } = require("@vercel/blob");

async function main() {
  const files = process.argv.slice(2);

  if (files.length === 0) {
    console.error(
      "Usage: node --env-file=.env.local scripts/upload-videos.js <file1> [file2] ...",
    );
    process.exit(1);
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "BLOB_READ_WRITE_TOKEN is not set. Run with:\n" +
        "  node --env-file=.env.local scripts/upload-videos.js <file1> ...",
    );
    process.exit(1);
  }

  const results = [];

  for (const filePath of files) {
    const resolved = path.resolve(filePath);

    if (!fs.existsSync(resolved)) {
      console.error(`Skipping (not found): ${resolved}`);
      continue;
    }

    const filename = path.basename(resolved);
    const sizeMB = (fs.statSync(resolved).size / 1024 / 1024).toFixed(1);
    console.log(`Uploading ${filename} (${sizeMB} MB)...`);

    const buffer = fs.readFileSync(resolved);
    const blob = await put(filename, buffer, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    console.log(`  -> ${blob.url}`);
    results.push({ file: filename, url: blob.url });
  }

  console.log("\n--- Summary ---");
  for (const r of results) {
    console.log(`${r.file}: ${r.url}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
