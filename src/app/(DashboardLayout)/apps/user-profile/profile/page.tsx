"use client";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import Introduction from "@/app/components/apps/userprofile/profile/Introduction";
import Photos from "@/app/components/apps/userprofile/profile/Photos";
import Post from "@/app/components/apps/userprofile/profile/Post";
import ProfileBanner from "@/app/components/apps/userprofile/profile/ProfileBanner";
import React from "react";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "User Profile",
  },
];
const UserProfile = () => {
  return (
    <>
      <BreadcrumbComp title="User Profile" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px]">
        {/* Banner */}
        <div className="col-span-12">
          <ProfileBanner />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 gap-[30px]">
            {/* Introduction */}
            <div className="col-span-12">
              <Introduction />
            </div>
            {/* Photos */}
            <div className="col-span-12">
              <Photos />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <Post/>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
