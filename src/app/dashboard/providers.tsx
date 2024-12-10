"use client";

import { ReactNode, useEffect } from "react";
import { useUserDeatilsMutation } from "@/redux/features/user/userApi";
import { setUserData } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getUserInfo } from "@/service/auth.service";

function PrivateProvider({ children }: { children: ReactNode }) {
  const [userDetailsReq, { data: userDetails }] = useUserDeatilsMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const userData = await getUserInfo();

        if (userData?.EmpID) {
          const data = await userDetailsReq({ empno: userData.EmpID }).unwrap();
          const userDetails = { ...data[0], ...userData };
          dispatch(setUserData(userDetails));
        }
      } catch (error) {
        console.log("Failed to fetch user info:", error);
      }
    }

    fetchUserInfo();
  }, [dispatch, userDetailsReq]);

  return <>{children}</>;
}

export default PrivateProvider;
