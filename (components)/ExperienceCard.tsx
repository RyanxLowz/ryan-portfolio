import styles from "@/styles";

interface ExperienceCardProps {
  number: number;
  text?: string;
  organisation?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  text,
  organisation,
}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <div className="ml-[8px] flex-1 flex-col">
      <p className="flex-1 ml-[30px] font-normal text-sm text-white leading-[32px] align-top mt-0">
        {text}
      </p>
      <p className="flex-1 ml-[30px] font-normal text-xs text-[#B0B0B0] leading-[32px] ">
        {organisation}
      </p>

    </div>
  </div>
);

export default ExperienceCard;
