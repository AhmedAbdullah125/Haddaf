import React, { useState } from "react";
import backgroundImg from "@/assets/registrationbg.svg";
import loginimg from "@/assets/loginimg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel, } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const FormSchema = z.object({
  username: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
  password: z.string().min(6, "الحد الأدنى 6 أحرف").nonempty("هذا الحقل مطلوب"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    // handle submit
    console.log(values);
  };

  return (
    <div className="login-page">
      <div className="flex min-h-[100vh]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          //make delay here
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full min-h-[100vh] flex items-center justify-center login-form-cont">
          <div className="login-form-cont w-full max-w-[520px] px-6" dir="rtl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10"> تسجيل الدخول </h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-right text-lg font-semibold text-black mb-3"> اسم المستخدم</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="قم بإدخال اسم المستخدم"
                            className="w-full rounded-full border border-gray-300 px-12 py-6 text-right placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:border-green-600"
                            {...field}
                          />
                        </FormControl>
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
                          </svg>
                        </span>
                      </div>
                      <FormMessage className="text-red-600 text-sm text-right" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-right text-lg font-semibold text-black mb-3"> كلمة المرور</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="قم بإدخال كلمة المرور"
                            className="w-full rounded-full border border-gray-300 px-12 py-6 text-right placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:border-green-600"
                            {...field}
                          />
                        </FormControl>

                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6h-1V9a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-9-2a3 3 0 0 1 6 0v2H9V9Z" />
                          </svg>
                        </span>

                        <button
                          type="button"
                          onClick={() => setShowPassword((s) => !s)}
                          className="absolute inset-y-0 left-3 flex items-center text-gray-500 hover:text-gray-700"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M3.28 2.22 2.22 3.28 5.6 6.66C3.54 8.01 2 10 2 12c0 0 4 7 10 7 2.15 0 3.99-.73 5.52-1.8l2.2 2.2 1.06-1.06L3.28 2.22ZM12 7a5 5 0 0 1 5 5c0 .61-.11 1.18-.31 1.72l-6.41-6.41C10.82 7.11 11.39 7 12 7Z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      <FormMessage className="text-red-600 text-sm text-right" />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full py-6"> تسجيل</Button>
                <div className="text-center pt-2">
                  <Link to={`/forget-password`} className="text-green-600 hover:text-green-700 underline text-lg font-semibold"> نسيت كلمة المرور</Link>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          //make delay here
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-full min-h-[100vh] relative hidden md:block">
          <LazyLoadImage src={backgroundImg} alt="Haddaf" className="h-full w-full min-h-[100vh]" />
          <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
            <LazyLoadImage src={loginimg} alt="Haddaf" className="h-full w-full max-w-[430px] object-contain animatioed-img" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;