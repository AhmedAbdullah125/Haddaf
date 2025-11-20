

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { changPassword } from "@/components/requests/changPassword";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
    password: z.string().min(6, "الحد الأدنى 6 أحرف وارقام").nonempty("هذا الحقل مطلوب"),
    new_password: z.string().min(6, "الحد الأدنى 6 أحرف وارقام").nonempty("هذا الحقل مطلوب"),
    re_password: z.string().min(6, "الحد الأدنى 6 أحرف وارقام").nonempty("هذا الحقل مطلوب"),
});
const PasswordUpdateForm = ({ title, icon }) => {
    const[loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: { password: "", new_password: "", re_password: "" },
        mode: "onChange",
    });

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        changPassword({ data: values, setLoading, navigate });
        console.log(values);
    };



    return (
        <div className="py-8 px-6 ">
            <div className="flex items-center gap-4 mb-6">
                <img src={icon} alt="haddaf" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
            </div>
            <div dir="rtl" className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  max-w-[640px]">
                        <div className="rounded-3xl max-w-[640px]">
                            <div className="grid grid-cols-1  gap-6">
                                

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-right font-semibold text-gray-700 mb-2">كلمة المرور القديمة</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="قم بإدخال كلمة المرور"
                                                        className="h-12 rounded-full pr-12 pl-12 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                                                    />
                                                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.125a4.125 4.125 0 10-8.25 0V10.5M6.75 10.5h10.5A2.25 2.25 0 0119.5 12.75v6a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-6A2.25 2.25 0 016.75 10.5z" />
                                                        </svg>
                                                    </span>
                                                    <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute inset-y-0 left-4 flex items-center text-gray-600 hover:text-gray-800">
                                                        {showPassword ? (
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.48a3.001 3.001 0 004.243 4.243m1.84 1.84C15.44 18.517 13.77 19.5 12 19.5c-5 0-9.27-3.11-11-7 1.01-2.27 2.84-4.18 5.1-5.46m3.03-1.21C10.91 5.63 11.45 5.5 12 5.5c5 0 9.27 3.11 11 7-.558 1.252-1.37 2.392-2.39 3.36" />
                                                            </svg>
                                                        ) : (
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25c-5 0-9.27 3.11-11 7 1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 10.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="text-red-600 text-sm mt-1" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="new_password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-right font-semibold text-gray-700 mb-2">انشاء كلمة المرور</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="قم بإدخال كلمة المرور"
                                                        className="h-12 rounded-full pr-12 pl-12 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                                                    />
                                                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.125a4.125 4.125 0 10-8.25 0V10.5M6.75 10.5h10.5A2.25 2.25 0 0119.5 12.75v6a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-6A2.25 2.25 0 016.75 10.5z" />
                                                        </svg>
                                                    </span>
                                                    <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute inset-y-0 left-4 flex items-center text-gray-600 hover:text-gray-800">
                                                        {showPassword ? (
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.48a3.001 3.001 0 004.243 4.243m1.84 1.84C15.44 18.517 13.77 19.5 12 19.5c-5 0-9.27-3.11-11-7 1.01-2.27 2.84-4.18 5.1-5.46m3.03-1.21C10.91 5.63 11.45 5.5 12 5.5c5 0 9.27 3.11 11 7-.558 1.252-1.37 2.392-2.39 3.36" />
                                                            </svg>
                                                        ) : (
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25c-5 0-9.27 3.11-11 7 1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 10.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="text-red-600 text-sm mt-1" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="re_password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-right font-semibold text-gray-700 mb-2">قم بتأكيد كلمة المرور</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="قم بإدخال كلمة المرور"
                                                        className="h-12 rounded-full pr-12 pl-12 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                                                    />
                                                    <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.125a4.125 4.125 0 10-8.25 0V10.5M6.75 10.5h10.5A2.25 2.25 0 0119.5 12.75v6a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-6A2.25 2.25 0 016.75 10.5z" />
                                                        </svg>
                                                    </span>
                                                    <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute inset-y-0 left-4 flex items-center text-gray-600 hover:text-gray-800">
                                                        {showPassword ? (
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.477 10.48a3.001 3.001 0 004.243 4.243m1.84 1.84C15.44 18.517 13.77 19.5 12 19.5c-5 0-9.27-3.11-11-7 1.01-2.27 2.84-4.18 5.1-5.46m3.03-1.21C10.91 5.63 11.45 5.5 12 5.5c5 0 9.27 3.11 11 7-.558 1.252-1.37 2.392-2.39 3.36" />
                                                            </svg>
                                                        ) : (
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25c-5 0-9.27 3.11-11 7 1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 10.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="text-red-600 text-sm mt-1" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="mt-6">
                                <Button type="submit" className="w-full h-12 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                                    تغيير كلمة المرور
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>

        </div>
    );
};

export default PasswordUpdateForm;
