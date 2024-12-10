"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  BookOpen,
  Command,
  SquareTerminal,
  Settings2,
  Frame,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { useSidebarMenuMutation } from "@/redux/features/ui/uiApi";
import axiosInstance from "@/helper/axios/axiosInstance";

interface MenuItem {
  $id: string;
  MenuName: string;
  MenuID: number;
  MainManuID: number;
  MenuType: string;
  EmpID: number;
  EmpName: string | null;
  Type: string | null;
  ListMenuID: string | null;
}

interface NavItem {
  title: string;
  url: string;
  icon?: React.ElementType;
  isActive?: boolean;
  items?: { title: string; url: string }[];
}

interface EmployeeData {
  id: string;
  Company: string;
  CompanyID: number;
  CostCenter: string;
  CostCenterID: number;
  EMPNO: string;
  EmpID: number;
  FullName: string;
  GRP_EMP_NO: number;
  Image: string;
  ImageBase64: string;
  ItemImage: string | null;
  Location: string;
  SectionName: string;
  SubCostCenter: string;
  SubCostCenterID: number;
}

const data = {
  user: {
    name: `kamrul`,
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    { name: "Naturub", plan: "Accessories Bangladesh" },
    { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const [navMain, setNavMain] = React.useState<NavItem[]>([]);
  const [userData, setUserData] = React.useState<EmployeeData | null>(null);

  const [sidebarPayload, { isLoading, data: sidebar, error }] = useSidebarMenuMutation();

  React.useEffect(() => {
    const getSidebar = async () => {
      const result = await sidebarPayload({ EmpID: 26252, Type: 1 });
      if (result?.data) {
        const response: MenuItem[] = result.data;
        const transformedNavMain = response
          .filter((item) => item.MainManuID === 0)
          .map((mainItem) => ({
            title: mainItem.MenuName,
            url: `/${mainItem.MenuType}`,
            icon: getIcon(mainItem.MenuType),
            items: response
              .filter((subItem) => subItem.MainManuID === mainItem.MenuID)
              .map((subItem) => ({
                title: subItem.MenuName,
                url: `/${subItem.MenuType}`,
              })),
          }));
        setNavMain(transformedNavMain);
      } else {
        console.log(error);
      }
    };

    getSidebar();
  }, [sidebarPayload, error]);

  React.useEffect(() => {
    const fetchEmployeeData = async () => {
      const { data } = await axiosInstance.post(
        "/api/User/GetRequesterDetails",
        // { empon: UserInfo?.()?.EmpID }
        { empno: "A28849" }
      );
      setUserData(data[0]);
    };
    fetchEmployeeData();
  }, []);

  const getIcon = (menuType: string): React.ElementType => {
    switch (menuType) {
      case "gate-pass":
        return SquareTerminal;
      case "request":
        return Bot;
      case "status":
        return BookOpen;
      case "security":
        return Settings2;
      default:
        return Frame;
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* @ts-ignore */}
        {navMain && <NavMain items={navMain} />}
      </SidebarContent>
      <SidebarFooter>
        {userData && (
          <NavUser
            user={{
              name: userData.FullName,
              section: "iT",
              avatar: userData.ImageBase64,
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
