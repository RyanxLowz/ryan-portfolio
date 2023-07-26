import styles from "@/styles";

interface PlaylistInfoProps {
  imgUrl: string;
  title: string;
  url: string;
}

const PlaylistInfo: React.FC<PlaylistInfoProps> = ({ imgUrl, title, url }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <a href={url} target="_blank" className="w-1/2 h-1/2 object-contain">
        <img src={imgUrl} alt="icon"/>
      </a>
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h1>
  </div>
);

export default PlaylistInfo;
