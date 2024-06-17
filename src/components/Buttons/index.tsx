import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'desktopWhite' | 'mobileWhite' | 'desktopBlack' | ' mobileBlack' | 'desktopOdd';
  size?:  'mobilePrimary'|  'mobileSecondary' | 'desktopPrimary' | 'desktopOdd';
  disabled?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'desktopWhite', size = 'mobilePrimary', disabled = false, children }) => {
  const baseStyles = 'px-4 py-2 transition duration-300 ease-in-out';

  const variantStyles: { [key: string]: string } = {
    desktopWhite: 'bg-white text-black  rounded-[40px] leading-5 font-medium hover:bg-gray-300',
    desktopBlack:"bg-pt-dark-btn text-white rounded-[40px]",
    mobileWhite: 'bg-white text-black  rounded-[50px] font-medium',
    mobileBlack: 'bg-pt-dark-btn text-white  rounded-[50px] font-medium tracking-wide',
    danger: 'bg-red-500 text-white hover:bg-red-700',
  };

  const sizeStyles: { [key: string]: string } = {
    mobilePrimary: 'w-[315px] h-[40px]',
    mobileSecondary: 'w-[300px] h-[48px]',
    desktopPrimary: 'w-[160px] h-[48px]',
    desktopOdd: 'w-[200px] h-[48px]',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        { [disabledStyles]: disabled }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;