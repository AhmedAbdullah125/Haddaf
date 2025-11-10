import React from "react";
import backgroundImg from "@/assets/registrationbg.svg";
import loginimg from "@/assets/loginimg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FormSchema = z.object({
  phone: z
    .string()
    .min(9, "رقم الجوال يجب أن يكون 9 أرقام على الأقل")
    .regex(/^\+?\d{9,15}$/, "الرجاء إدخال رقم جوال صالح"),
});

const ForgetPassword = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    // TODO: integrate with your API
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full h-full min-h-[100vh] flex items-center justify-center login-form-cont">
          <div className="login-form-cont w-full max-w-[520px] px-6" dir="rtl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-10">
              نسيت كلمة المرور
            </h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-right text-lg font-semibold text-black mb-3">
                        رقم الجوال
                      </FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="tel"
                            inputMode="tel"
                            placeholder="قم بإدخال رقم جوالك"
                            className="w-full rounded-full border border-gray-300 px-12 py-6 text-right placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:border-green-600"
                            {...field}
                          />
                        </FormControl>
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                          {/* phone icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
                          </svg>
                        </span>
                      </div>
                      <FormMessage className="text-red-600 text-sm text-right" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full py-6"
                >
                  ارسال
                </Button>
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
            <LazyLoadImage
              src={loginimg}
              alt="Haddaf"
              className="h-full w-full max-w-[430px] object-contain animatioed-img"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgetPassword;