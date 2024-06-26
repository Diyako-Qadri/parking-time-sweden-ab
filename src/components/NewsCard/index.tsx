import Link from "next/link";
import { Lato } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type NewsCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  slug: string;
};

const NewsCard = ({ image, title, description, date, slug }: NewsCardProps) => {
  const locale = useLocale();
  const t = useTranslations("NewsCard");

  return (
    <div
      className="w-full min-h-full sm:max-w-sm rounded overflow-hidden shadow-lg bg-white text-left flex flex-col"
      style={{ boxShadow: "0 5px 50px rgba(0, 0, 0, 0.08)" }}>
      <img className="w-full h-[300px] object-cover" src={image} alt={title} />
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h6 className="text-2xl font-bold leading-[29px] mb-2">{title}</h6>
          <div
            className="text-base leading-6 mb-4"
            dangerouslySetInnerHTML={{ __html: description }}></div>
          <span className="text-gray-600 text-base block leading-6 mb-4">
            {date}
          </span>
        </div>
        <div className="mt-auto">
          <Link
            href={`/${locale}/news/${slug}`}
            className={`${lato.className} text-[#0B051D] font-medium text-base underline leading-6`}>
            {t("Read more")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
