"use client";

import React, { useEffect, useState } from "react";
import { getUserInfo } from "@/service/auth.service";
import { IUserinfo } from "@/types/globelTypes";

const UserInfoDisplay: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IUserinfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
    };

    fetchUserInfo();
  }, []);

  console.log("User: ", userInfo);

  return (
    <div>
      {userInfo ? (
        <div>
          <h1>Welcome, {userInfo.username}</h1>
          <p>Employee ID: {userInfo.EmpID}</p>
          <p>Company ID: {userInfo.CompanyID}</p>
          <p>Cost Center ID: {userInfo.CostCenterID}</p>
          <p>Service Department ID: {userInfo.ServiceDepartmentID}</p>
          <p>Sub Cost Center ID: {userInfo.SubCostCenterID}</p>
          <p>User ID: {userInfo.UserID}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserInfoDisplay;
