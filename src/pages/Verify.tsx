import React, { useMemo, useRef, useState } from "react";
import backgroundImg from "@/assets/registrationbg.svg";
import loginimg from "@/assets/OTP.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
const FormSchema = z.object({
  otp: z
    .string()
    .length(4, "يجب إدخال 4 أرقام")
    .regex(/^\d{4}$/, "الرمز يجب أن يكون أرقام فقط"),
});
type OTPArray = [string, string, string, string];

const Verify = () => {
  const [otp, setOtp] = useState<OTPArray>(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

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
      // clearing current cell
      const next = [...otp] as OTPArray;
      next[idx] = "";
      setOtp(next);
      form.setValue("otp", next.join(""), { shouldValidate: true });
      return;
    }

    // keep only digits, max 1 char
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
        // clear current first
        const next = [...otp] as OTPArray;
        next[idx] = "";
        setOtp(next);
        form.setValue("otp", next.join(""), { shouldValidate: true });
      } else if (idx > 0) {
        // move back
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

    // focus last filled
    const lastIdx = Math.min(pasted.length - 1, 3);
    if (lastIdx >= 0) focusIndex(lastIdx);
  };

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    // TODO: integrate with your API
    console.log("OTP submitted:", values.otp);
  };

  const handleResend = () => {
    // TODO: call resend endpoint
    // Optionally start a cooldown timer for UX
    console.log("Resend OTP");
  };

  return (
    <div className="login-page">
      <div className="flex min-h-[100vh]">
        {/* Right side form */}
        <div className="w-full h-full min-h-[100vh] flex items-center justify-center login-form-cont">
          <div className="login-form-cont w-full max-w-[520px] px-6" dir="rtl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10">
              رمز التحقق
            </h1>

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
                    className="text-green-600 hover:text-green-700 underline text-lg font-semibold"
                  >
                    اعادة ارسال
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>

        {/* Left side illustration */}
        <div className="w-full h-full min-h-[100vh] relative hidden md:block">
          <LazyLoadImage src={backgroundImg} alt="" className="h-full w-full min-h-[100vh]" />
          <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
            <LazyLoadImage
              src={loginimg}
              alt=""
              className="h-full w-full max-w-[430px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;