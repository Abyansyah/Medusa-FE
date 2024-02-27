import clsx from "clsx"
import React, { useState } from "react"
import LoginCard from "../components/organisms/login-card"
import ResetTokenCard from "../components/organisms/reset-token-card"
import SEO from "../components/seo"
import LoginLayout from "../components/templates/login-layout"
import ExportHubLogo from "../images/ExportHubLogo.svg"
import SideImage from "../images/login-g.svg"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [resetPassword, setResetPassword] = useState(false)
  const push = useNavigate()

  return (
    <LoginLayout>
      <SEO title="Login" />
      <div className="w-1/2">
        <div className="flex flex-col items-center">
          <img src={SideImage} className="w-[70%]" />
          <h2 className="mt-4 text-2xl font-bold text-neutral-800">
            Pasti Untung di ExportHub
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Berbagai promo dan penawaran menarik setiap bulannya!
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "rounded-rounded bg-grey-0 p-10 shadow-md transition-['min-height'] duration-300",
          {
            "min-h-[480px]": resetPassword,
          }
        )}
      >
        <div className="mb-xlarge flex items-center justify-between">
          <h2 className="font-sans text-xl font-bold">Login</h2>
          <div className="flex flex-col items-center">
            <img src={ExportHubLogo} className="w-12" />
            <h3 className="text-base font-semibold">ExportHub</h3>
          </div>
        </div>
        {resetPassword ? (
          <ResetTokenCard goBack={() => setResetPassword(false)} />
        ) : (
          <LoginCard toResetPassword={() => setResetPassword(true)} />
        )}
        <div className="relative mt-4 flex items-center">
          <div className="flex-grow border-t border-neutral-200"></div>
          <span className="mx-4 flex-shrink text-gray-400">Atau</span>
          <div className="flex-grow border-t border-neutral-200"></div>
        </div>
        <div className="mt-4 text-center text-base text-neutral-600">
          Belum punya akun?{" "}
          <span
            className="cursor-pointer font-semibold"
            onClick={() => push("/register")}
          >
            Daftar Sekarang{" "}
          </span>
        </div>
      </div>
    </LoginLayout>
  )
}

export default LoginPage
