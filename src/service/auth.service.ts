"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import { AUTH_KEY } from "@/constant/storage.key";
import { IUserinfo } from "@/types/globelTypes";
import getAuthToken from "./getAuthToken";
import axiosInstance from "@/helper/axios/axiosInstance";

export async function setCookies(name: string = AUTH_KEY, data: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: name,
    value: data,
    httpOnly: true,
    path: "/",
  });
}

export async function userInfo(): Promise<IUserinfo | null> {
  const token = await getAuthToken(AUTH_KEY);
  if (token) {
    const decodedData: IUserinfo = jwtDecode(token);

    if (decodedData.EmpID) {
      const userData = {
        EmpID: decodedData.EmpID,
        CompanyID: decodedData.CompanyID,
        CostCenterID: decodedData.CostCenterID,
        ServiceDepartmentID: decodedData.ServiceDepartmentID,
        SubCostCenterID: decodedData.SubCostCenterID,
        UserID: decodedData.UserID,
        UserName: decodedData.UserName,
        iat: decodedData.iat,
      };

      return userData;
    }
  }
  return null;
}

