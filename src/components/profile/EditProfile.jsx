import { useState, useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { updateProfile } from "../requests/updateProfile";
const FormSchema = z.object({
  fullName: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
  nationalId: z
    .string()
    .regex(/^\d{10,15}$/g, "يجب أن يكون رقماً من 10 إلى 15 خانة")
    .nonempty("هذا الحقل مطلوب"),
  avatar: z
    .any()
    .optional()
    .refine(
      (file) => !file || (file instanceof File && file.size <= 2 * 1024 * 1024),
      "الحد الأقصى لحجم الصورة 2MB",
    )
    .refine(
      (file) => !file || (file instanceof File && file.type.startsWith("image/")),
      "الملف يجب أن يكون صورة",
    ),
});

const EditProfile = ({ data }) => {
  const [preview, setPreview] = useState(data?.image);
  const fileInputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { fullName: data?.name, nationalId: data?.identity_number, avatar: undefined },
    mode: "onChange",
  });

  const onSubmit = (values) => {
    console.log(values);
    updateProfile({ data: values });
  };

  const handleFilePick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("avatar", file, { shouldValidate: true });
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      //make delay here
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      className="max-w-96 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-3 w-full" dir="rtl">
        <button type="button" onClick={handleFilePick} className="focus:outline-none">
          <LazyLoadImage src={preview} alt="profileImg" className="w-28 h-28 rounded-full mb-2 object-cover" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col gap-6 w-full">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-right font-semibold text-gray-700 mb-2">الاسم بالكامل</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={data?.name}
                        className="h-12 rounded-full pr-4 pl-4 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-right font-semibold text-gray-700 mb-2">رقم الهوية</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        inputMode="numeric"
                        placeholder={data?.identity_number}
                        className="h-12 rounded-full pr-4 pl-4 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <div className="mt-2">
                <Button type="submit" className="w-full h-12 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                  حفظ البيانات
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default EditProfile;
