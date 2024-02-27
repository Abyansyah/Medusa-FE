import React from "react"
import RegisterLayout from "../components/templates/register-layout"
import SEO from "../components/seo"
import RegisterSide from "../images/login-image.svg"
import RegisterCard from "../components/organisms/register-card"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()
  return (
    <RegisterLayout>
      <SEO title={"Register"} />
      <div className="w-1/2">
        <div className="flex flex-col items-center">
          <img src={RegisterSide} className="w-[60%]" />
          <h2 className="mt-4 text-2xl font-bold text-neutral-800">
            Jual Beli Mudah Hanya di ExportHub
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Gabung dan rasakan kemudahan bertransaksi di ExportHub
          </p>
        </div>
      </div>
      <RegisterCard toLoginPage={() => navigate("/login")} />
    </RegisterLayout>
  )
}

export default RegisterPage
