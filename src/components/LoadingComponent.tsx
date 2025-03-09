import { useTranslations } from "next-intl"

const LoadingComponent = () => {
    const t = useTranslations();

    return (
        <>
            <div className="loading">

                <p className="loading__text">
                    {t("loading")}
                </p>
                
                <div className="loading__spinner"></div>
            </div>

        </>
    )
}

export default LoadingComponent;