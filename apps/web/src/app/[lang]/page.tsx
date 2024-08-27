import Link from "next/link";
import { fetchConfig, fetchRandomValue } from "../../api";
import { SUPPORTED_LANGS } from "../../i18n";

export default async function HomePage() {
  const config = await fetchConfig();
  const random = await fetchRandomValue();

  return (
    <div>
      {SUPPORTED_LANGS.map((lang) => (
        <Link href={`${lang}/hello`} prefetch={false} key={lang}>
          <h2 style={{ color: config.colorMap[lang] }}>{lang}</h2>
        </Link>
      ))}
      <span
        style={{
          position: "absolute",
          top: 10,
          left: 10,
        }}
      >
        Random server value: <strong>{random.value}</strong>
      </span>
    </div>
  );
}
