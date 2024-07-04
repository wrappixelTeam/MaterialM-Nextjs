"use client";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import GalleryCards from "@/app/components/apps/userprofile/Gallery/GalleryCards";
import ProfileBanner from "@/app/components/apps/userprofile/profile/ProfileBanner";
import React from "react";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Gallery",
  },
];
const Gallery = () => {
  return (
    <>
      <BreadcrumbComp title="Gallery" items={BCrumb} />
      <div className="grid grid-cols-12 gap-6">
        {/* Banner */}
        <div className="col-span-12">
          <ProfileBanner />
        </div>
        {/* GalleryCards */}
        <div className="col-span-12">
          <GalleryCards />
        </div>
      </div>
    </>
  );
};

export default Gallery;
