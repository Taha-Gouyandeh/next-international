import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="">
      <h1>{t("Dashboard")}</h1>
    </main>
  );
}
