"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { EyeIcon, EyeOff, LogIn } from "lucide-react";
import { useLoginUsersMutation } from "@/redux/features/user/userApi";
import { toast } from "react-toastify";

type Inputs = {
  UserName: string;
  Password: string;
};

export default function LoginForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [authData, { isLoading, isSuccess }] = useLoginUsersMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    authData(data);

    if (isSuccess) {
      router.push("/deshboard");
      toast.success("Login successfull.");
      reset();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center lg:min-h-screen dark:bg-inherit px-4">
      <Card className="w-full max-w-md">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* User Name Input */}
            <div className="space-y-2">
              <Label htmlFor="UserName">User Name</Label>
              <Input
                id="UserName"
                placeholder="Enter your username"
                {...register("UserName", { required: "User Name is required" })}
              />
              {errors.UserName && (
                <p className="text-red-500 text-sm">
                  {errors.UserName.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-2 relative">
              <Label htmlFor="Password">Password</Label>
              <Input
                id="Password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                {...register("Password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
                className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {isPasswordVisible ? (
                  <EyeIcon size={20} />
                ) : (
                  <EyeOff size={20} />
                )}
              </button>
              {errors.Password && (
                <p className="text-red-500 text-sm">
                  {errors.Password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
              size="lg"
            >
              {isLoading ? "Loading..." : "Login"}
              {!isLoading && <LogIn size={20} className="ml-2" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
