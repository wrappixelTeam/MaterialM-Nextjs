"use client"
import BreadcrumbComp from '@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp'
import FriendsCard from '@/app/components/apps/userprofile/friends/FriendsCard';
import ProfileBanner from '@/app/components/apps/userprofile/profile/ProfileBanner'
import React from 'react'
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Friends",
  },
];

const Friends = () => {
  return (
    <>
      <BreadcrumbComp title="Friends" items={BCrumb} />
      <div className="grid grid-cols-12 gap-6">
        {/* Banner */}
        <div className="col-span-12">
            <ProfileBanner/>
        </div>
        {/* FriendsCard */}
        <div className="col-span-12">
          <FriendsCard />
        </div>
      </div>
    </>
  )
}

export default Friends
