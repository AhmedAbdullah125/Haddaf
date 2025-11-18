

import React, { useState, useRef, useMemo, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { verifyPhone } from "../requests/verifyPhone";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { changPhone } from "../requests/changPhone";
const FormSchema = z.object({
    otp: z.string().length(4, "يجب إدخال 4 أرقام").regex(/^\d{4}$/, "الرمز يجب أن يكون أرقام فقط"),
});
type OTPArray = [string, string, string, string];
const PhoneOTPForm = ({ title, icon, formData, setFormData, setStep }) => {
    const [resendCooldown, setResendCooldown] = useState(30);
    useEffect(() => {
        if (resendCooldown <= 0) return;
        const intervalId = setInterval(() => {
            setResendCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [resendCooldown]);
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState<OTPArray>(["", "", "", ""]);
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { otp: "" },
        mode: "onChange",
    });
    const otpValue = useMemo(() => otp.join(""), [otp]);
    const focusIndex = (idx: number) => {
        const el = inputsRef.current[idx];
        if (el) el.focus();
    };
    const handleChange = (idx: number, val: string) => {
        if (!val) {
            const next = [...otp] as OTPArray;
            next[idx] = "";
            setOtp(next);
            form.setValue("otp", next.join(""), { shouldValidate: true });
            return;
        }
        const char = val.replace(/\D/g, "").slice(0, 1);
        if (!char) return;
        const next = [...otp] as OTPArray;
        next[idx] = char;
        setOtp(next);
        form.setValue("otp", next.join(""), { shouldValidate: true });

        if (idx < 3) focusIndex(idx + 1);
    };

    const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key === "Backspace") {
            if (otp[idx]) {
                const next = [...otp] as OTPArray;
                next[idx] = "";
                setOtp(next);
                form.setValue("otp", next.join(""), { shouldValidate: true });
            } else if (idx > 0) {
                focusIndex(idx - 1);
            }
        } else if (key === "ArrowLeft" && idx > 0) {
            focusIndex(idx - 1);
        } else if (key === "ArrowRight" && idx < 3) {
            focusIndex(idx + 1);
        }
    };

    const handlePaste = (idx: number, e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
        if (!pasted) return;

        const next = [...otp] as OTPArray;
        for (let i = 0; i < 4; i++) {
            next[i] = pasted[i] ?? (i < idx ? next[i] : "");
        }
        setOtp(next);
        form.setValue("otp", next.join(""), { shouldValidate: true });
        const lastIdx = Math.min(pasted.length - 1, 3);
        if (lastIdx >= 0) focusIndex(lastIdx);
    };

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log("OTP submitted:", values.otp);
        verifyPhone({ data: values, setLoading, formData, navigate });
    };

    const handleResend = () => {
        console.log("Resend OTP");
        if (resendCooldown > 0) return;
        setResendCooldown(30);
        changPhone({ data: formData, setLoading, setStep, setFormData });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            //make delay here
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }} className="py-8 px-6 border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl max-w-[520px]">
            <div className="flex items-center gap-4 mb-6">
                <img src={icon} alt="haddaf" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
            </div>
            <h5 className="text-lg md:text-xl mb-10 mt-10 font-medium text-gray-900"> ادخل رمز التحقق </h5>
            {
                loading ? <Loading /> :
                    <div dir="rtl" className="w-full">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    name="otp"
                                    control={form.control}
                                    render={() => (
                                        <FormItem>
                                            <FormLabel className="sr-only">رمز التحقق</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center justify-center gap-4" style={{ direction: "ltr" }}>
                                                    {[0, 1, 2, 3].map((i) => (
                                                        <input
                                                            key={i}
                                                            ref={(el) => (inputsRef.current[i] = el)}
                                                            value={otp[i]}
                                                            onChange={(e) => handleChange(i, e.target.value)}
                                                            onKeyDown={(e) => handleKeyDown(i, e)}
                                                            onPaste={(e) => handlePaste(i, e)}
                                                            inputMode="numeric"
                                                            pattern="[0-9]*"
                                                            maxLength={1}
                                                            className="w-16 h-12 md:w-24 md:h-14 rounded-full border border-gray-300 text-center text-lg md:text-2xl font-semibold outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                                        />
                                                    ))}
                                                </div>
                                            </FormControl>
                                            {/* Hidden input for form value binding */}
                                            <input type="hidden" {...form.register("otp")} value={otpValue} readOnly />
                                            <div className="flex justify-center">
                                                <FormMessage className="text-red-600 text-sm text-center" />
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full py-6">
                                    ارسال
                                </Button>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        className={`text-green-600 hover:text-green-700 ${resendCooldown > 0 ? "cursor-not-allowed opacity-45 text-green-500" : "cursor-pointer"} underline text-lg font-semibold`}
                                        disabled={loading || resendCooldown > 0}
                                    >
                                        {resendCooldown > 0
                                            ? `اعادة ارسال بعد ${resendCooldown} ثانية`
                                            : "اعادة ارسال"}
                                    </button>
                                </div>
                            </form>
                        </Form>
                    </div>
            }
        </motion.div>
    );
};

export default PhoneOTPForm;
