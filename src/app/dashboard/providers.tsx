"use client";

import { useUserDeatilsMutation } from "@/redux/features/user/userApi";
import { setUserData } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/service/auth.service";
import { IUserinfo } from "@/types/globelTypes";
import { ReactNode, useEffect, useState } from "react";

function PrivateProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<IUserinfo | null>(null);
  const [userDetailsReq, { data: userDetails }] = useUserDeatilsMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserInfo() {
      const userData = await getUserInfo();
      setUserInfo(userData);

      if (userData?.EmpID) {
        const data = await userDetailsReq({
          empno: userData.EmpID,
        }).unwrap();
        const userDetails = {...data[0], ...userData}
        console.log("update: ",userDetails)
        dispatch(setUserData(userDetails));
      }
    }

    fetchUserInfo();
  }, []);

  return <>{children}</>;
}

export default PrivateProvider;
