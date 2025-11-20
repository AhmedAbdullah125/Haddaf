import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addMatch } from "../requests/addMatch";
import { useNavigate, useParams } from "react-router-dom";
import Loading from '../../components/Loading'

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));

const minutes = ["00", "30"];
const ampmOptions = ["AM", "PM"];

const FormSchema = z.object({
  slotCost: z.string().min(1, "هذا الحقل مطلوب"),
  players: z.string().min(1, "هذا الحقل مطلوب"),
  duration: z.string().min(1, "هذا الحقل مطلوب"),
  hour: z.string().min(1, "مطلوب"),
  minute: z.string().min(1, "مطلوب"),
  ampm: z.string().min(1, "مطلوب"),
  date: z.date({ required_error: "مطلوب" }),
});

const AddMatchForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      slotCost: "",
      players: "",
      duration: "",
      hour: "",
      minute: "",
      ampm: "PM",
      date: new Date(),
    },
    mode: "onChange",
  });
  const formatDateTime = (data: z.infer<typeof FormSchema>) => {
    const { date, hour, minute, ampm } = data;

    // 12h -> 24h
    const hourNum = parseInt(hour, 10);
    let hours24 = hourNum % 12; // 12 -> 0
    if (ampm === "PM") {
      hours24 += 12;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-based
    const day = String(date.getDate()).padStart(2, "0");

    const hh = String(hours24).padStart(2, "0");
    const mm = String(parseInt(minute, 10)).padStart(2, "0");

    // الناتج النهائي
    const formatted = `${year}-${month}-${day} ${hh}:${mm}:00`;

    return formatted;
  };


  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const formattedDateTime = formatDateTime(data);

    // مثال: payload جاهز للإرسال
    const payload = {
      slotCost: data.slotCost,
      players: data.players,
      duration: data.duration,
      dateTime: formattedDateTime, // الشكل اللي انت عايزه
    };

    console.log("payload: ", payload);
    addMatch(id, payload, setLoading, navigate)
  };
  return (
    <div dir="rtl" className="w-full">
      {
        loading ? <Loading /> :
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-[640px]">
              <div className=" max-w-[640px]">
                {/* Top row: القطة للمباراة | عدد اللاعبين | مدة المباراة */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="slotCost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block font-semibold text-gray-700 mb-2">القطة للمباراة</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="القطة للفرد الواحد"
                            className="h-10 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600 text-sm mt-1 text-center" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="players"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block font-semibold text-gray-700 mb-2">عدد اللاعبين</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="قم بتحديد عدد اللاعبين المتاح للمباراة"
                            className="h-10 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600 text-sm mt-1 text-center" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block font-semibold text-gray-700 mb-2">مدة المباراة</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="قم بتحديد المدة"
                            className="h-10 rounded-full px-6 text-right placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-300"
                          />
                        </FormControl>
                        <FormMessage className="text-red-600 text-sm mt-1 text-center" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Time and Date */}
                <div className="mt-8">
                  <div className="font-semibold mb-4">قم بتحديد وقت و تاريخ المباراة</div>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <FormField
                      control={form.control}
                      name="ampm"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <select {...field}
                              className="h-10  rounded-[8px] border border-gray-300 bg-white px-4 text-right focus:outline-none">
                              {ampmOptions.map((ap) => (
                                <option key={ap} value={ap}>{ap}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage className="text-red-600 text-xs mt-1 text-center" />
                        </FormItem>
                      )}
                    />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="minute"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <select
                                {...field}
                                className="h-10  rounded-[8px] w-full border border-gray-300 bg-white px-4 text-right focus:outline-none"
                              >
                                <option value="" disabled>دقيقة</option>
                                {minutes.map((m) => (
                                  <option key={m} value={m}>{m}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage className="text-red-600 text-xs mt-1 text-center" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <span className="text-gray-400">-</span>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="hour"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <select
                                {...field}
                                className="h-10  rounded-[8px] w-full border border-gray-300 bg-white px-4 text-right focus:outline-none"
                              >
                                <option value="" disabled>ساعة</option>
                                {hours.map((h) => (
                                  <option key={h} value={h}>{h}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage className="text-red-600 text-xs mt-1 text-center" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex justify-center">
                        <FormControl>
                          <div className="rounded-3xl w-full">
                            <DayPicker
                              mode="single"
                              selected={field.value}
                              onSelect={(d) => field.onChange(d ?? field.value)}
                              dir="rtl"
                              className="rounded-3xl w-full"
                              modifiersClassNames={{
                                selected: "bg-primary text-white",
                                today: "ring-2 ring-primary",
                              }}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-600 text-xs mt-1 text-center" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-8">
                  <Button type="submit" className="w-full h-10 rounded-full bg-primary text-white text-lg font-bold hover:opacity-95">
                    حفظ
                  </Button>
                </div>
              </div>
            </form>
          </Form>
      }
    </div>
  );
};

export default AddMatchForm;