import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

/* ================= SANITY CLIENT ================= */
export const sanityClient = createClient({
  projectId: "6hvvq1ef",       // your project ID
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,               // safe for public frontend
});

/* ================= IMAGE URL BUILDER ================= */
const imageBuilder = createImageUrlBuilder({
  projectId: "6hvvq1ef",
  dataset: "production",
});

/* ================= HELPER ================= */
export const urlFor = (source) => {
  if (!source) return "";
  return imageBuilder.image(source);
};
