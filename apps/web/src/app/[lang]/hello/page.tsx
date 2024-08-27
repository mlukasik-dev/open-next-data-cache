import { fetchConfig } from "../../../api";
import { getHelloWorldGreeting, Lang } from "../../../i18n";

export default async function HelloPage({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const config = await fetchConfig();

  return (
    <h1 style={{ color: config.colorMap[lang] }}>
      {getHelloWorldGreeting(lang)}
    </h1>
  );
}
