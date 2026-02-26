type BtnVariant = 'gold' | 'outline' | 'white' | 'orange';
export const Button = ({ children, variant = 'gold', href = '#' }: {
  children: React.ReactNode;
  variant?: BtnVariant;
  href?: string;
}) => {
  const map: Record<BtnVariant, string> = {
    gold: 'btn btn-y', outline: 'btn btn-o', white: 'btn btn-w', orange: 'btn btn-o'
  };
  return <a href={href} className={map[variant]}>{children}</a>;
};