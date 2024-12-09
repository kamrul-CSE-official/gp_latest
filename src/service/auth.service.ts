"use server";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { AUTH_KEY } from "@/constant/storage.key";
import { IUserinfo } from "@/types/globelTypes";

export async function getUserInfo(): Promise<IUserinfo | null> {
  const token = Cookies.get(AUTH_KEY) || null;

  if (!token) {
    return null;
  }

  try {
    const decodedData = (jwtDecode(token) as Partial<IUserinfo>) || {};
    console.log(decodedData);

    if (decodedData.exp && decodedData.username) {
      return {
        EmpID: decodedData.EmpID,
        CompanyID: decodedData.CompanyID,
        CostCenterID: decodedData.CostCenterID,
        ServiceDepartmentID: decodedData.ServiceDepartmentID,
        SubCostCenterID: decodedData.SubCostCenterID,
        UserID: decodedData.UserID,
        username: decodedData.username,
        iat: decodedData.iat,
        exp: decodedData.exp,
      };
    }
  } catch (error) {
    console.error("Error decoding token:", error);
  }

  return null;
}
