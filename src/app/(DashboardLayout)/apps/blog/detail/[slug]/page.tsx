"use client"
import BreadcrumbComp from '@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp';
import BlogDetailData from '@/app/components/apps/blog/detail';
import React from 'react'

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog Detail",
  },
];
const BlogDetail = () => {
  return (
    <>
      <BreadcrumbComp title="Blog Detail" items={BCrumb} />
      <BlogDetailData/>
    </>
  )
}

export default BlogDetail
