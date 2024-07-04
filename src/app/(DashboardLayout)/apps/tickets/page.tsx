"use client";
import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import TicketFilter from "@/app/components/apps/tickets/TicketFilter";
import TicketListing from "@/app/components/apps/tickets/TicketListing";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tickets",
  },
];
const Tickets = () => {
  return (
    <>
      <BreadcrumbComp title="Tickets App" items={BCrumb} />
      <CardBox>
        <TicketFilter/>
        <TicketListing/>
      </CardBox>
    </>
  );
};

export default Tickets;
