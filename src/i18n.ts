import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fa"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  console.log(locale);
  return {
    messages: (
      await import(`./language/nationalization/${locale}/translation.json`)
    ).default,
  };
});
