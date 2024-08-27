import { fetchConfig, fetchRandomValue } from "../../../api";
import { getHelloWorldGreeting, Lang } from "../../../i18n";

export default async function HelloPage({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const config = await fetchConfig();
  const random = await fetchRandomValue();

  return (
    <div>
      <h1 style={{ color: config.colorMap[lang] }}>
        {getHelloWorldGreeting(lang)}
      </h1>
      <div>Random server value: ${random.value}</div>
    </div>
  );
}
