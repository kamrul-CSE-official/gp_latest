"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

const ProfilePage = () => {
  const userDetails = useAppSelector((state: RootState) => state.user.userData);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {userDetails ? (
        <Card className="w-full shadow-lg">
          <CardHeader className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={userDetails.ImageBase64 || userDetails.Image}
                alt={userDetails.FullName}
              />
              <AvatarFallback>
                {userDetails.FullName ? userDetails.FullName.charAt(0) : "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-semibold">
                {userDetails.FullName}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                User Name:{" "}
                <span className="font-bold">{userDetails.UserName}</span>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label>Employee ID:</Label>
              <p className="text-gray-800">{userDetails.EmpID}</p>
            </div>
            <div className="space-y-2">
              <Label>Company:</Label>
              <p className="text-gray-800">{userDetails.Company}</p>
            </div>
            <div className="space-y-2">
              <Label>Cost Center:</Label>
              <p className="text-gray-800">{userDetails.CostCenter}</p>
            </div>
            <div className="space-y-2">
              <Label>Section Name:</Label>
              <p className="text-gray-800">{userDetails.SectionName}</p>
            </div>
            <div className="space-y-2">
              <Label>Location:</Label>
              <p className="text-gray-800">{userDetails.Location}</p>
            </div>
            <div className="space-y-2">
              <Label>Service Department ID:</Label>
              <p className="text-gray-800">{userDetails.ServiceDepartmentID}</p>
            </div>
            <div className="space-y-2">
              <Label>Sub Cost Center ID:</Label>
              <p className="text-gray-800">{userDetails.SubCostCenterID}</p>
            </div>
            <div className="space-y-2">
              <Label>User ID:</Label>
              <p className="text-gray-800">{userDetails.UserID}</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <p className="text-center text-gray-500">Loading user information...</p>
      )}
    </div>
  );
};

export default ProfilePage;
