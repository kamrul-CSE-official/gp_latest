"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { EyeIcon, EyeOff, LogIn } from "lucide-react";
import { useLoginUsersMutation } from "@/redux/features/user/userApi";
import { toast } from "react-toastify";
import { AUTH_KEY } from "@/constant/storage.key";

type Inputs = {
  UserName: string;
  Password: string;
};

export default function LoginForm() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loginUsers, { isLoading, isSuccess, error }] = useLoginUsersMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await loginUsers(data).unwrap();

      if (result?.jwtToken) {
        // Store the token in cookies
        Cookies.set(AUTH_KEY, result.jwtToken, { expires: 1 / 24, secure: true });

        // Navigate to the dashboard
        router.replace("/dashboard/profile");
        toast.success("Login successful.");
        reset();
      } else {
        toast.error("Invalid credentials. Please try again!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Invalid credentials. Please try again!");
    }
  }, [error]);

  return (
    <div className="flex justify-center items-center lg:min-h-screen dark:bg-inherit px-4">
      <Card className="w-full max-w-md">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* User Name Input */}
            <div className="space-y-2 mt-2">
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
