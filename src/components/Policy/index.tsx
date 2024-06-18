'use client'
import { useTranslations } from "next-intl"
import { Roboto } from "next/font/google"
import { useEffect } from "react";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '400', '700'], 
});

type PolicyItem = {
    subject: string;
    text: string
}


const PrivacyPolicy = () => {
    const tHeadline = useTranslations('policyHeadline');
    const tContent = useTranslations('policyContent');

    const policyItems: PolicyItem[] = tContent('content', { returnObjects: true });

    return (
        <div className={roboto.className}>
            <div className="text-left pt-20">
                <h1 className="text-[40px] font-bold md:text-5xl">{tHeadline('headline')}</h1>
                <p className="text-sm">{tHeadline('effectiveDate')}</p>
            </div>
            <div>
                {policyItems.map((item, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">{item.subject}</h2>
                        <p className="text-base">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicy;