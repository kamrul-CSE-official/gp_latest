"use client";

import React, { ReactNode } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ProfilePage: React.FC = () => {
  const userDetails = useAppSelector((state: RootState) => state.user.userData);

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-7xl mx-auto">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={
                `data:image/png;base64,${userDetails?.Image}` ||
                `data:image/png;base64,${userDetails?.ItemImage}` ||
                undefined
              }
              alt={userDetails?.FullName}
            />
            <AvatarFallback>
              {userDetails?.FullName?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FaUserAlt />
              {userDetails?.FullName}
            </CardTitle>
            <Badge variant="outline" className="mt-1 flex items-center gap-2">
              <FaBuilding />
              {userDetails?.Company}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileItem
              label="Employee ID"
              value={userDetails?.EMPNO || userDetails?.EmpID.toString()}
              icon={<FaUserAlt />}
            />
            <ProfileItem
              label="Username"
              value={userDetails?.UserName}
              icon={<FaUserAlt />}
            />
            <ProfileItem
              label="Cost Center"
              value={userDetails?.CostCenter}
              icon={<FaBuilding />}
            />
            <ProfileItem
              label="Sub Cost Center"
              value={userDetails?.SubCostCenter}
              icon={<FaBuilding />}
            />
            <ProfileItem
              label="Location"
              value={userDetails?.Location}
              icon={<MdLocationOn />}
            />
            <ProfileItem
              label="Section"
              value={userDetails?.SectionName}
              icon={<FaBuilding />}
            />
          </dl>
        </CardContent>
      </Card>
    </div>
  );
};

const ProfileItem: React.FC<{ label: string; value?: string | number; icon?: ReactNode }> = ({
  label,
  value,
  icon,
}) => (
  <div className="flex items-start gap-2">
    {icon && <span className="text-gray-500">{icon}</span>}
    <div>
      <dt className="font-medium text-gray-500">{label}</dt>
      <dd className="mt-1">{value || "N/A"}</dd>
    </div>
  </div>
);

export default ProfilePage;
