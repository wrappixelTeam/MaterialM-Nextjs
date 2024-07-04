"use client"
import React from 'react';
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import BlogListing from '@/app/components/apps/blog/BlogListing';
const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Blog app",
    },
  ];
const Blog = () => {
  return (
    <>
      <BreadcrumbComp title="Blog app" items={BCrumb} />
      <BlogListing/>
    </>
  )
}

export default Blog
