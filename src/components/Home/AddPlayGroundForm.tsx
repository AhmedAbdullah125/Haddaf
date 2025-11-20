import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { ImCancelCircle } from "react-icons/im";
import { MapPicker } from "./MapPicker";
import { addStadium } from "../requests/addStadium";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  location: z
    .object({ lat: z.number(), lng: z.number() })
    .refine((val) => !(val.lat === 0 && val.lng === 0), {
      message: "الرجاء اختيار الموقع من الخريطة",
    }),
  arabic_name: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
  english_name: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
  address: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
});


const AddPlayGroundForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { location: { lat: 0, lng: 0 }, arabic_name: "", english_name: "", address: "" },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    addStadium({values, setLoading, navigate});
  };

  return (
    <div dir="rtl" className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  max-w-[640px]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.12)] max-w-[640px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="arabic_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-right font-semibold text-gray-700 mb-2">اسم الملعب <span className="text-sm font-medium text-gray-500">( باللغة العربية )</span></FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ادخل اسم الملعب"
                        className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="english_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-right font-semibold text-gray-700 mb-2">اسم الملعب <span className="text-sm font-medium text-gray-500">( باللغة الإنجليزية )</span></FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ادخل اسم الملعب"
                        className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <div className="md:col-span-2 col-span-1" >

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-right font-semibold text-gray-700 mb-2">العنوان بالتفصيل</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="ادخل العنوان بالتفصيل"
                          className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                        />
                      </FormControl>
                      <FormMessage className="text-red-600 text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:col-span-2 col-span-1" >
                <FormField
                  control={form.control}
                  name="location"

                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-right font-semibold text-gray-700 mb-2">الموقع الجغرافي</FormLabel>
                      <FormControl>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <a href="#"
                              className="block rounded-full border border-gray-300/80 bg-white shadow-sm hover:shadow-md transition">
                              <div className="flex flex-row-reverse items-center justify-between gap-3 px-5 py-3">
                                <span className="text-gray-400 transition group-hover:text-gray-600">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                  </svg>
                                </span>
                                <div className="flex-1 text-right">
                                  <div className="text-sm md:text-lg font-semibold text-gray-900">
                                    اختر الموقع على الخريطة
                                  </div>
                                  <div className="text-xs md:text-sm text-gray-500">
                                    اضغط لفتح الخريطة وتحديد الموقع
                                  </div>
                                </div>
                                <span
                                  className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2a7 7 0 0 0-7 7c0 4.97 7 13 7 13s7-8.03 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                                  </svg>
                                </span>
                              </div>
                            </a>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="max-w-[512px] w-full px-8 py-11 flex flex-col gap-12 items-center">
                            <AlertDialogTitle>اختر الموقع على الخريطة</AlertDialogTitle>
                            <div className="absolute top-2 end-5 w-10 h-10 rounded-full p-1 hover:text-white flexCenter"
                              onClick={() => {
                                document.getElementById("cancel").click();
                              }}
                            >
                              <ImCancelCircle color="#2EAD00" size={28} /></div>

                            <MapPicker
                              defaultCenter={{ lat: 24.7136, lng: 46.6753 }}
                              onConfirm={(coords, addr) => {
                                form.setValue("location", { lat: coords.lat, lng: coords.lng }, { shouldValidate: true });
                                console.log({ lat: coords.lat, lng: coords.lng, address: addr }); // 👈 logs the object
                                document.getElementById("confirm")?.click();
                              }}
                            />
                            <AlertDialogFooter className="w-full flex gap-4">
                              <AlertDialogCancel className="hidden" id="cancel">إلغاء</AlertDialogCancel>
                              <AlertDialogAction className="text-white bg-D10000 w-full h-12 rounded-3xl text-center hidden" id="confirm">تأكيد</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        {/* <Input
                        {...field}
                        placeholder="ادخل موقع الملعب"
                        className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      /> */}
                      </FormControl>
                      <FormMessage className="text-red-600 text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>

            </div>

            <div className="mt-6">
              <Button type="submit" className="w-full h-12 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                اضافة
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddPlayGroundForm;