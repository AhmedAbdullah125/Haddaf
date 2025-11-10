import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import contactIcon from "../../assets/contactIcon.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  message: z.string().min(3, "الحد الأدنى 3 أحرف").nonempty("هذا الحقل مطلوب"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { message: "" },
    mode: "onChange",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div dir="rtl" className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <LazyLoadImage src={contactIcon} alt="contact" className="w-8 h-8 object-contain" />
        <div className="flex flex-col h-full justify-center gap-2">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">رقم تواصل مع الادارة</h3>
          <Link to="tel:966854289654" className="text-777 hover:text-primary/80">966  854289654</Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <h5 className="text-lg md:text-xl font-bold text-gray-900">ادخل رسالتك</h5>
        <p className="text-777 text-sm font-medium">نحن نهتم بجميع اراء عملاءنا </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  max-w-[640px]">
          <div className="rounded- border border-gray-200 bg-white p-6 shadow-[0_4px_10px_0_rgba(46,173,0,0.12)] max-w-[640px]">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="............................................................................................................................................................"
                        className="w-full h-40 px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600 text-sm mt-1" />
                  </FormItem>
                )}
              />
            <div className="mt-6">
              <Button type="submit" className="w-full h-12 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                ارسال
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;