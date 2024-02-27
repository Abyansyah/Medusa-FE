import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Button from "../../fundamentals/button"
import SigninInput from "../../molecules/input-signin"
import api from "../../../services/api"

type FormValues = {
  email: string
  password: string
  first_name: string
  last_name: string
  store_name: string
  store_address: string
}

type RegisterProps = {
  toLoginPage: () => void
}

const RegisterCard: React.FC<RegisterProps> = ({ toLoginPage }) => {
  const [isInvalidLogin, setIsInvalidLogin] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const navigate = useNavigate()

  const onSubmit = async (values: FormValues) => {
    try {
      await api.users.create(values)
      navigate("/login")
    } catch (error) {
      setIsInvalidLogin(true)
      reset()
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl p-8 shadow-md"
      >
        <div className="flex flex-col items-center">
          <span className="inter-2xlarge-semibold mt-4 text-grey-90">
            Daftar Sekarang
          </span>
          <span className="inter-base-regular mt-2 mb-xlarge  text-grey-50">
            Sudah punya akun ExportHub?{" "}
            <span
              onClick={() => toLoginPage()}
              className="cursor-pointer text-neutral-800"
            >
              Masuk
            </span>
          </span>

          <SigninInput
            placeholder="Email..."
            {...register("email", { required: true })}
            autoComplete="email"
          />
          <SigninInput
            placeholder="Password..."
            type={"password"}
            {...register("password", { required: true })}
            autoComplete="current-password"
          />
          <SigninInput
            placeholder="First Name"
            type={"text"}
            {...register("first_name", { required: true })}
            autoComplete="current-last_name"
          />
          <SigninInput
            placeholder="Last Name"
            type={"text"}
            {...register("last_name", { required: true })}
            autoComplete="current-last_name"
          />
          {/* <SigninInput
            placeholder="Store Name"
            type={"text"}
            {...register("store_name", { required: true })}
            autoComplete="current-store_name"
          />
          <SigninInput
            placeholder="Address"
            type={"text"}
            {...register("store_address", { required: true })}
            autoComplete="current"
          /> */}
          {isInvalidLogin && (
            <span className="inter-small-regular mt-2 w-full text-rose-50">
              These credentials do not match our records
            </span>
          )}
          <Button
            className="inter-base-regular mt-4 w-[320px] rounded-rounded"
            variant="secondary"
            size="large"
            type="submit"
          >
            Register
          </Button>
        </div>
      </form>
      <div className="mt-2 rounded-xl p-4 shadow-md">
        <p className="text-center text-base text-neutral-500">
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-semibold text-neutral-800"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default RegisterCard
