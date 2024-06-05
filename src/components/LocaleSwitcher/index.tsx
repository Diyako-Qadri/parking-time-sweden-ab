'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
    // startTransition(() => {
      
    // });
    console.log(e.target.value);
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
