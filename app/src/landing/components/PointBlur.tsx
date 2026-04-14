import type {
  PossibleColors,
  PossibleSizes,
  PossiblePositionsX,
  PossiblePositionsY,
  PossibleBlurs,
  PossibleOpacities,
  PossibleShadows,
} from '../types/settings';

const PointBlur = ({
  color = 'bg-purple-600',
  size = 'w-120 h-120',
  positionX = '-right-80',
  positionY = 'top-1/2 -translate-y-1/2',
  blur = 'blur-3xl',
  opacity = 'opacity-15',
  shadow = 'shadow-xl shadow-purple-500/50',
}: PointBlurProps) => {
  return (
    <span
      className={`absolute ${size} ${positionX} ${positionY} ${color} ${opacity} rounded-full ${blur} ${shadow}`}
    ></span>
  );
};

interface PointBlurProps {
  color?: PossibleColors;
  size?: PossibleSizes;
  positionX?: PossiblePositionsX;
  positionY?: PossiblePositionsY;
  blur?: PossibleBlurs;
  opacity?: PossibleOpacities;
  shadow?: PossibleShadows;
}

export default PointBlur;
