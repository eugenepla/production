import { useTranslation } from "react-i18next"
import { Route, Routes } from "react-router-dom"

const MainPage = () => {
  const { t } = useTranslation()

  return <div>{t("Главная страница")}</div>
}

export default MainPage
