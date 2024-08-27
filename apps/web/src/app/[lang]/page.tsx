import Link from "next/link";
import { fetchConfig, fetchRandomValue } from "../../api";
import { SUPPORTED_LANGS } from "../../i18n";

export default async function HomePage() {
  const config = await fetchConfig();
  const random = await fetchRandomValue();

  return (
    <div>
      {SUPPORTED_LANGS.map((lang) => (
        <Link href={`${lang}/hello`} prefetch={false}>
          <h2 style={{ color: config.colorMap[lang] }} key={lang}>
            {lang}
          </h2>
        </Link>
      ))}
      <div>Random server value: ${random.value}</div>
    </div>
  );
}
