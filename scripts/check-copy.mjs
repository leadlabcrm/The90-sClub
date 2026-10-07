import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "components", "lib"];
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
];

function files(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) out.push(...files(path));
    else if (/\.(tsx|ts|jsx|js|mjs|css|svg)$/.test(entry)) out.push(path);
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

if (hits.length) {
  console.error("Never-say hits:\n" + hits.join("\n"));
  process.exit(1);
}

console.log("Never-say check passed.");
