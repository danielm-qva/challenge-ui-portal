import { IconsOption, keyOptions } from '../../../constants/app-contanst';

type Props = {
  title: string;
  description: string;
  keyId: keyOptions;
};

const CardNedd = ({ title, description, keyId }: Props) => {
  return (
    <div className={'flex h-[251px] w-[276px] flex-col gap-1 rounded-3xl bg-white p-[30]'}>
      <div
        className={
          'flex h-[68] w-[68px] items-center justify-center rounded-full bg-[var(--color-warning)]'
        }
      >
        {IconsOption?.[keyId].icons}
      </div>
      <div
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: 'var(--color-primary)',
          lineHeight: '120%'
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'normal',
          lineHeight: 'normal'
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default CardNedd;
