import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

/** products/p00-architect-os/server -> repo root */
export const REPO_ROOT = path.resolve(here, "..", "..", "..");
export const PRODUCTS_DIR = path.join(REPO_ROOT, "products");
export const SKILLS_DIR = path.join(REPO_ROOT, ".claude", "skills");
export const DISCOVERY_SKILL = path.join(SKILLS_DIR, "discovery-interview", "SKILL.md");

export const productDir = (id: string) => path.join(PRODUCTS_DIR, id);
export const recordDir = (id: string) => path.join(productDir(id), "record");
export const discoveryDir = (id: string) => path.join(productDir(id), "discovery");
