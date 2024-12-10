"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const UserInfoDisplay: React.FC = () => {
  const userDetails = useAppSelector((state: RootState)=> state.user.userData);
  

  

  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome, {userDetails?.UserName}</h1>
          <p>Employee ID: {userDetails.EmpID}</p>
          <p>Company ID: {userDetails.CompanyID}</p>
          <p>Cost Center ID: {userDetails.CostCenterID}</p>
          <p>Service Department ID: {userDetails.ServiceDepartmentID}</p>
          <p>Sub Cost Center ID: {userDetails.SubCostCenterID}</p>
          <p>User ID: {userDetails.UserID}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserInfoDisplay;
