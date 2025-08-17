import { ReactNode } from 'react';

export type ICategory = {
  id: number;
  name: string;
  icons: ReactNode;
};


export type PropsParams = {
  params: Promise<{ id: string }>;
};
