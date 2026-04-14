import type { PossibleTextsColors } from '../types/settings'
const TitleLayout = ({ subTitle, title, color }: TitleLayoutProps) => {
  return (
    <div className="flex flex-col gap-1 w-full items-start px-2">
      <span className={`text-xs font-semibold uppercase opacity-60 ${color}`}>{subTitle}</span>
      <h4 className={`text-3xl font-bold ${color}`}>{title}</h4>
    </div>
  )
}

interface TitleLayoutProps {
  subTitle: string;
  title: string;
  color?: PossibleTextsColors;
}

export default TitleLayout
