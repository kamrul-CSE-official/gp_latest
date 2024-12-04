"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUserData } from "@/redux/features/user/userSlice";
import { userInfo } from "@/service/auth.service";
import axiosInstance from "@/helper/axios/axiosInstance";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const userProfileData = useAppSelector((store) => store.user.userData);
  const dispatch = useAppDispatch();


  async function userData() {
    const user = await userInfo();
    const request = await axiosInstance.post("api/User/GetRequesterDetails", {
      empno: user?.EmpID,
    });
    if (request?.data[0]) {
      dispatch(setUserData({...request?.data[0], EmpID: user?.EmpID}));
    }
  }

  useEffect(() => {
    userData();
  }, []);

  if (!userProfileData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Employee Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src={`data:image/jpeg;base64,${userProfileData.ImageBase64}`} alt={userProfileData.FullName} />
                <AvatarFallback>{userProfileData.FullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-semibold">{userProfileData.FullName}</h2>
              <p className="text-muted-foreground">{userProfileData.EMPNO}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem label="Company" value={userProfileData.Company} />
              <InfoItem label="Cost Center" value={userProfileData.CostCenter} />
              <InfoItem label="Section" value={userProfileData.SectionName} />
              <InfoItem label="Sub Cost Center" value={userProfileData.SubCostCenter} />
              <InfoItem label="Location" value={userProfileData.Location} />
              <InfoItem label="Employee ID" value={userProfileData.GRP_EMP_NO.toString()} />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </motion.div>
  );
}

