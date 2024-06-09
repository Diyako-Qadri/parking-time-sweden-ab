import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type NewsCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  readMoreLink: string;
};

const NewsCard = ({
  image,
  title,
  description,
  date,
  readMoreLink,
}: NewsCardProps) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      style={{ boxShadow: "0 5px 50px rgba(0, 0, 0, 0.08)" }}>
      <img
        className="w-[405px] h-[300px] object-cover"
        src={image}
        alt={title}
      />
      <div className="px-4 py-4">
        <h6 className="text-2xl font-bold leading-[29px] mb-2">{title}</h6>
        <p className="text-base leading-6 mb-4">{description}</p>
        <span className="text-gray-600 text-sm block mb-4">{date}</span>
        <a
          href={readMoreLink}
          className={`${roboto.className} text-[#0B051D] font-medium text-base underline leading-6`}>
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
