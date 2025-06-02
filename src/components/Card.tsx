import { Link } from "react-router-dom";

type CardType = {
  thumbnail: string | undefined;
  date?: string;
  title?: string;
  description?: string;
  callToActionText?: string;
  calllToActionLink: string;
};

const Card = ({
  thumbnail,
  date,
  title,
  description,
  callToActionText,
  calllToActionLink,
}: CardType) => {
  return (
    <div className="w-full max-w-2xl h-full md:h-[540px] 2xl:h-[700px] border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white flex flex-col">
      <Link to={calllToActionLink} className="flex flex-col flex-grow">
        <article className="w-full h-full flex flex-col flex-grow">
          <figure className="w-full p-3">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-full h-auto object-cover rounded-sm aspect-video"
            />
          </figure>
          <div className="px-6 py-5 text-left flex flex-col flex-grow">
            {date && <p className="text-base mb-4">{date}</p>}
            {title && (
              <h1 className="text-[32px] leading-8 font-bold mb-4">{title}</h1>
            )}
            {description && (
              <p className="text-xs mb-4 line-clamp-4 flex-grow">
                {description}
              </p>
            )}
            {callToActionText && <strong className="mt-auto">{callToActionText}</strong>}
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Card;
