interface ButtonRowPropsType {
  className?: string;
  children: React.ReactNode;
}

export default function ButtonRow({
  className,
  children,
  ...props
}: ButtonRowPropsType) {
  return (
    <div className={`flex items-center gap-x-2.5 ${className}`} {...props}>
      {children}
    </div>
  );
}
