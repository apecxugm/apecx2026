import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center rounded-lg md:text-base text-sm px-6 py-[10px] whitespace-nowrap transition-transform duration-200 ease-in-out ',
  {
    variants: {
      variant: {
        default: 'bg-primary-700 text-white hover:bg-primary-900 has-[>svg]:gap-2 cursor-pointer hover:scale-105 font-bold',
        light: 'bg-secondary-200 text-neutral-1000 hover:bg-secondary-400 has-[>svg]:gap-2 cursor-pointer hover:scale-105',
        white: 'bg-neutral-100 font-bold text-neutral-1000 hover:bg-neutral-300 has-[>svg]:gap-2 cursor-pointer hover:scale-105',
        'dark-blue': 'bg-tertiary-900 text-gray-700 text-white cursor-pointer hover:bg-tertiary-1000 has-[>svg]:gap-2 hover:scale-105',
        disabled: 'bg-neutral-300 text-neutral-500 cursor-not-allowed has-[>svg]:gap-2',
      },
      size: {
        default: 'md:w-53 w-full',
        fit: 'w-fit',
        icon: 'p-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}

export { Button, buttonVariants };
