import { useTranslation } from "react-i18next"
import { Route, Routes } from "react-router-dom"

const AboutPage = () => {
  const { t } = useTranslation()

  return <div>{t("О сайте")}</div>
}

export default AboutPage
