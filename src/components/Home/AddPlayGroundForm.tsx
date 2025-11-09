import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  location: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
  name: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
});

const AddPlayGroundForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { location: "", name: "" },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div dir="rtl" className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  max-w-[640px]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.12)] max-w-[640px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-right font-semibold text-gray-700 mb-2">الموقع</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ادخل موقع الملعب"
                        className="h-12 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-right font-semibold text-gray-700 mb-2">اسم الملعب</FormLabel>
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
            </div>

            <div className="mt-6">
              <Button type="submit" className="w-full h-12 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                حفظ
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddPlayGroundForm;