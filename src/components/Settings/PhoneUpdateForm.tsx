

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const FormSchema = z.object({
    mobile: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
    password: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
});
const PhoneUpdateForm = ({ title, icon }) => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { mobile: "", password: "" },
        mode: "onChange",
    });

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values);
    };



    return (
        <div className="py-8 px-6 border shadow-[0_4px_10px_0_rgba(46,173,0,0.25)] border-black/10 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
                <img src={icon} alt="haddaf" className="w-8 h-8" />
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900">{title}</h3>
            </div>
            <div dir="rtl" className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  max-w-[640px]">
                        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.12)] max-w-[640px]">
                            <div className="grid grid-cols-1  gap-6">
                                <FormField
                                    control={form.control}
                                    name="mobile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-right font-semibold text-gray-700 mb-2">رقم الجوال الجديد</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="رقم الجوال الجديد"
                                                    className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600 text-sm mt-1" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="block text-right font-semibold text-gray-700 mb-2">كلمة المرور</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="password"
                                                    placeholder="كلمة المرور"
                                                    className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600 text-sm mt-1" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="mt-6">
                                <Button type="submit" className="w-full h-12 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                                    ادخال
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>

        </div>
    );
};

export default PhoneUpdateForm;
