import variantConfig from '../constantes';

const ContactLink = ({
  toPatch,
  children,
  variant = 'facebook',
  newVariant,
}: ContactLinkProps) => {
  const config = newVariant
    ? { ...variantConfig, [newVariant.name]: newVariant.config }
    : variantConfig;

  const variantRef = config[variant as keyof typeof config] || config.facebook;

  return (
    <span
      className={
        variantRef.bg +
        ' ' +
        variantRef.text +
        ' ' +
        variantRef.border +
        ' ' +
        variantRef.shadow +
        ' rounded-full px-3 py-1 text-xs opacity-20 hover:opacity-100 hover:-translate-y-1  active:scale-95  transition-all duration-300'
      }
    >
      <a href={toPatch} className='flex items-center gap-2'>{children}</a>
    </span>
  );
};

interface ContactLinkProps {
  toPatch: string;
  children: React.ReactNode;
  variant?: string;
  newVariant?: {
    name: string;
    config: {
      bg?: string;
      text?: string;
      border?: string;
      shadow?: string;
      hover?: string;
      active?: string;
      focus?: string;
      transition?: string;
    };
  };
}

export default ContactLink;
