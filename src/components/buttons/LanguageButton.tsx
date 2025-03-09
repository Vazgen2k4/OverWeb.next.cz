import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { MouseEvent } from 'react';
interface LanguageButtonData {
    lang: string;
    image: string;
    label: string;
}

export type { LanguageButtonData };

const LanguageButton = ({ data }: { data: LanguageButtonData }) => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const isDisabled = locale === data.lang;

    const handle = (e: MouseEvent) => {
        e.preventDefault();

        if (isDisabled) {
            return;
        }

        const newLocale = data.lang;
        const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

        router.push(newPathname);
    };

    return (
        <>
            <button
                className={`langs__list-btn ${isDisabled ? "_disable" : ""}`}
                disabled={isDisabled}
                onClick={handle}
                type="button">
                <img src={data.image} alt={data.label} />
            </button>
        </>
    );
}

export default LanguageButton;

