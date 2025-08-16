import React, { memo, useId } from 'react';
import { cn } from '@/lib/utils';
import styles from './styles.module.css';
import { ICategory } from '@/type';

type Props = {
  category: ICategory;
  className?: object;
};

const CardCategory = ({ className, category }: Props) => {
  const id = useId();
  return (
    <div className={cn(styles.container, className)} key={id}>
      <div className="semicircle"></div>
      {category?.icons}
      <div className={'category-name'}>{category.name}</div>
    </div>
  );
};

export default memo(CardCategory);
