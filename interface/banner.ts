export interface IMedia {
  url: string;
  width: number;
  height: number;
}

export interface IBanner {
  name: string;
  desktop: IMedia;
  mobile: IMedia;
  link?: string;
}
