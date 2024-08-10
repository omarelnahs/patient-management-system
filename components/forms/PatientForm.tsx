"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../ui/CustomFormField";
export enum  FromFieldType{
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT ='phoneinput',
  CHECKBOX = 'checkbox',
  DATA_PICKER = 'dataPicker',
  SELECT = 'select',
  SKELETON = ' skeleton',
}

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 2 characters.",
  }),
});

const PatientForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi There 🖐️</h1>
          <p className="text-dark-700">Schedule you first appointment</p>
        </section>
        <CustomFormField
          fieldType={FromFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FromFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="omarelnahas@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FromFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="+20123456789"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
