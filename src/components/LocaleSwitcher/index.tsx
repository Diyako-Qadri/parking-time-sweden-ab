'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    
    // Construct the new URL with the next locale
    const newPathname = `/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    const newSearchParams = searchParams.toString();
    const newUrl = `${newPathname}${newSearchParams ? '?' + newSearchParams : ''}`;
    
    startTransition(() => {
      router.replace(newUrl);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select
        defaultValue={localeActive}
        disabled={isPending}
        onChange={onSelectChange}
        className="bg-transparent text-white px-2 py-1"
      >
        <option value="en">English</option>
        <option value="sv">Swedish</option>
      </select>
    </label>
  );
};


export default LocaleSwitcher;
