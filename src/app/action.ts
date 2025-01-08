"use server";
import { getTextExtractor } from "office-text-extractor";

export async function action() {
  const extractor = getTextExtractor();
  const url =
    "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx";
  const text = await extractor.extractText({ input: url, type: "url" });

  return {
    text,
  };
}
