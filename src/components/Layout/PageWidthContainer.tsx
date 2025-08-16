import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// const sxBase: CSSProperties = {
//   margin: '0 auto',
//   maxWidth: 1445,
//   width: '100%',
//   padding: 0,
// };

const PageWidthContainer = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn('mx-auto w-full max-w-[1445px]', className)}>{children}</div>;
};

export default PageWidthContainer;
