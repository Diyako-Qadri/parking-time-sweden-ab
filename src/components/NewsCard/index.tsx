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
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="text-gray-600 text-sm">{date}</span>
    </div>
    <div className="px-6 pb-4">
      <a
        href={readMoreLink}
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Läs mer
      </a>
    </div>
  </div>;
};

export default NewsCard;
