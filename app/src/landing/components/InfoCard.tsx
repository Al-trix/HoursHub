import PointBlur from './PointBlur';
import type {
  PossibleColors,
  PossiblePositionsX,
  PossiblePositionsY,
} from '../types/settings';

const InfoCard = ({
  title,
  description,
  color,
  icon,
  positionX,
  positionY,
  isFooter,
  span,
  children,
}: InfoCardProps) => {
  return (
    <article
      className={`w-full flex rounded-xl h-fit gap-5 bg-black/20 ${span === '1' ? 'col-span-1' : span === '2' ? 'col-span-2' : 'col-span-3'} border border-white/5 flex-col p-8 relative overflow-hidden`}
    >
      <PointBlur color={color} positionX={positionX} positionY={positionY} />
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-xl ${color}`}
      >
        {icon}
      </div>
      <div className="mt-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p
          className={`text-gray-400 text-sm text-wrap ${span === '1' ? 'w-fit' : span === '2' ? 'w-100' : 'w-140'} mt-4`}
        >
          {description}
        </p>
      </div>
      {isFooter && children}
    </article>
  );
};

interface InfoCardProps {
  title: string;
  span: '1' | '2' | '3';
  description: string;
  children?: React.ReactNode;
  color: PossibleColors;
  isFooter?: boolean;
  icon: React.ReactNode;
  positionY?: PossiblePositionsY;
  positionX?: PossiblePositionsX;
}

export default InfoCard;
