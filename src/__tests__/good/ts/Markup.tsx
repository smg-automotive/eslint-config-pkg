import { FC, ReactNode } from 'react';

interface SubtitleProps {
  children: ReactNode;
}
const Subtitle: FC<SubtitleProps> = ({ children }) => (
  <h2 className="text-xl mt-20 mb-10 lg:mb-60 font-regular">{children}</h2>
);

export default Subtitle;
