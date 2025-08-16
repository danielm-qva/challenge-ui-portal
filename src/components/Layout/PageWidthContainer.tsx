import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const sxBase = {
  margin: '0 auto',
  maxWidth: 1445,
  width: '100%',
  '.page-wrapper': {
    padding: '0!important'
  }
};

const PageWidthContainer = ({
  children,
  className,
  sx
}: {
  children: ReactNode;
  className?: string;
  sx?: object;
}) => {
  return (
    <div className={cn('page-wrapper', className)} style={{ ...sxBase, ...sx }}>
      {children}
    </div>
  );
};

export default PageWidthContainer;
