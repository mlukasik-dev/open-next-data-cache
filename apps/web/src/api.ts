import "server-only";
import { Resource } from "sst/resource";
import { Lang } from "./i18n";

type Config = {
  colorMap: Record<Lang, string>;
};

export async function fetchConfig() {
  const resp = await fetch(`${Resource.ConfigLambda.url}/config`, {
    cache: "force-cache",
    next: { tags: ["config"] },
  });
  if (!resp.ok) {
    console.log(await resp.text());
    throw new Error("API error");
  }
  return (await resp.json()) as Config;
}

export async function fetchRandomValue() {
  const resp = await fetch(`${Resource.ConfigLambda.url}/random`, {
    cache: "force-cache",
    next: {
      tags: ["random"],
      revalidate: 60 * 60, // every hour
    },
  });
  if (!resp.ok) {
    console.log(await resp.text());
    throw new Error("API error");
  }
  return (await resp.json()) as { value: number };
}
