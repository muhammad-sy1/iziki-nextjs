"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useEmailStore } from "@/modules/auth/stores/useEmailStore";
import { useSignup } from "@/modules/auth/hooks/useSignup";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().regex(/^\d+$/, {
    message: "Phone number must contain only digits.",
  }),
  birthday: z.string(),
  gender: z.enum(["MALE", "FEMALE"], {
    error: "You need to select a notification type.",
  }),
});

const SignUpForm = () => {
  const { setSignUpEmail } = useEmailStore();
  //   const navigate = useNavigate();
  const router = useRouter();
  const locale = useLocale();
  const { mutate, isPending } = useSignup();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthday: "",
      gender: undefined,
    },
  });

  //   const onSubmit = async (values) =>
  function onSubmit(values: z.infer<typeof formSchema>) {
    setSignUpEmail(values.email);

    const body = {
      email: values.email,
      phone_number: values.phone,
      country_code: "1",
      type: "registration",
    };

    localStorage.setItem(
      "userData",
      JSON.stringify({
        birth_date: values.birthday,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        gender: values.gender,
        country_code: "1",
        phone_number: values.phone,
      })
    );

    mutate(body, {
      onSuccess: (data) => {
        console.log("✅ Status:", data.data.status);
        router.push(`/${locale}/signup/validation`);
        toast.success(data.data.status);
      },
      onError: (error) => {
        console.log("❌ Full error response:", error);
        toast.error(error.message);
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="First Name" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Last Name" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Phone" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Birthday" {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              {/* <FormLabel>Notify me about...</FormLabel> */}
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-x-8 "
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="MALE" />
                    </FormControl>
                    <FormLabel className="font-normal text-xl">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="FEMALE" />
                    </FormControl>
                    <FormLabel className="font-normal text-xl">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Create Account
          {isPending && <div className="loader"></div>}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
