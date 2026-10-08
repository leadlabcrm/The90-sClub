import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "components", "lib"];
const extraFiles = ["public/llms.txt", "public/site.webmanifest"];
const banned = [
  ["41188", /41188/],
  ["microbrewery", /microbrewery/],
  ["multi-cuisine", /multi-cuisine/],
  ["multicuisine", /multicuisine/],
  ["nightclub", /nightclub/],
  ["night club", /night club/],
  ["swiggy", /swiggy/],
  ["zomato", /zomato/],
  ["46 ounces", /46 ounces/],
  ["fire station", /fire station/],
  ["mangalore", /mangalore/],
  ["best bar", /best bar/],
  ["best pub", /best pub/],
  ["#1 ranking", /#1(?![0-9a-f])/],
  ["alcohol license", /alcohol licen[cs]e/],
  ["1:00 am", /1:00\s?am/],
  ["brewery", /brewery/],
  ["fourth floor", /fourth floor/],
  ["open-air", /open-air/],
  ["open air", /open air/],
  ["terrace", /\bterrace\b/],
];

function files(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) out.push(...files(path));
    else if (/\.(tsx|ts|jsx|js|mjs|css|svg|txt|webmanifest|json)$/.test(entry)) out.push(path);
  }
  return out;
}

const hits = [];
for (const root of roots) {
  for (const path of files(root)) {
    const text = readFileSync(path, "utf8").toLowerCase();
    for (const [label, pattern] of banned) {
      if (pattern.test(text)) hits.push(`${path}: ${label}`);
    }
  }
}

for (const path of extraFiles) {
  const text = readFileSync(path, "utf8").toLowerCase();
  for (const [label, pattern] of banned) {
    if (pattern.test(text)) hits.push(`${path}: ${label}`);
  }
}

const seoSource = readFileSync("lib/seo.ts", "utf8");
const homeTitle = seoSource.match(/home:\s*\{[^}]*title:\s*"([^"]+)"/s)?.[1] ?? "";
const visitTitle = seoSource.match(/visit:\s*\{[^}]*title:\s*"([^"]+)"/s)?.[1] ?? "";
if (homeTitle.length > 60) hits.push(`lib/seo.ts: home title is ${homeTitle.length} characters (max 60)`);
if (visitTitle.length > 60) hits.push(`lib/seo.ts: visit title is ${visitTitle.length} characters (max 60)`);
if (!homeTitle.toLowerCase().includes("rooftop pub")) {
  hits.push("lib/seo.ts: home title must include rooftop pub");
}

if (hits.length) {
  console.error("Never-say hits:\n" + hits.join("\n"));
  process.exit(1);
}

console.log("Never-say check passed.");
console.log(`Home title (${homeTitle.length}): ${homeTitle}`);
console.log(`Visit title (${visitTitle.length}): ${visitTitle}`);
