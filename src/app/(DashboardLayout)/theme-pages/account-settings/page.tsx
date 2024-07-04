"use client";
import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import { Tabs } from "flowbite-react";
import {
  IconArticle,
  IconBell,
  IconLock,
  IconUserCircle,
} from "@tabler/icons-react";
import AccountTab from "@/app/components/theme-pages/account-settings/AccountTab";
import NotificationTab from "@/app/components/theme-pages/account-settings/NotificationTab";
import BillsTabs from "@/app/components/theme-pages/account-settings/BillsTab";
import SecurityTab from "@/app/components/theme-pages/account-settings/SecurityTab";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Account Setting",
  },
];
const Accountsettings = () => {
  return (
    <>
      <BreadcrumbComp title="Account Setting" items={BCrumb} />
      <CardBox className="px-0 py-0 ">
        <Tabs aria-label="Tabs with underline"  variant="underline">
          <Tabs.Item
            active
            title="Account"
            icon={() => <IconUserCircle size={20} />}
          >
            <div className="p-6">
              <AccountTab />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Notification" icon={() => <IconBell size={20} />}>
            <div className="p-6">
              <NotificationTab />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Bills" icon={() => <IconArticle size={20} />}>
            <div className="p-6">
              <BillsTabs />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Security" icon={() => <IconLock size={20} />}>
            <div className="p-6">
              <SecurityTab />
            </div>
          </Tabs.Item>
        </Tabs>
      </CardBox>
    </>
  );
};

export default Accountsettings;
