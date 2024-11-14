import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export const getTranslations = async (locale: string) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}
