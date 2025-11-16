
import { useState, useEffect } from "react";
import ForgetPassword from "./ForgetPassword";
import Verify from "./Verify";
import ResetPassword from "./ResetPassword";
import { useNavigate } from "react-router-dom";
const LoginWrapper = () => {
    const navigate = useNavigate()
      useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/member");
        }
      }, [])
    const [step, setStep] = useState("login")
    const [formData, setFormData] = useState({})
    console.log(formData);
    
    return (
        <>
            {
                step === "login" ?
                    <ForgetPassword setStep={setStep} formData={formData} setFormData={setFormData} />
                    : step === "verify" ? <Verify setStep={setStep} formData={formData} setFormData={setFormData} />
                        : step === "reset" ? <ResetPassword setStep={setStep} formData={formData} setFormData={setFormData} /> : null
            }
        </>
    );
};

export default LoginWrapper;
