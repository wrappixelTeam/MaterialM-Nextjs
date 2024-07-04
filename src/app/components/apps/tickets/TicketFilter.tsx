import React from "react";
import { useDispatch, useSelector } from "@/store/hooks";
import { TicketType } from "../../../(DashboardLayout)/types/apps/ticket";
import { setVisibilityFilter } from "@/store/apps/tickets/TicketSlice";

const TicketFilter = () => {
  const dispatch = useDispatch();
  const counter: TicketType[] = useSelector(
    (state: { ticketReducer: { tickets: any } }) => state.ticketReducer.tickets
  );
  const pendingC = counter.filter((t) => t.Status === "Pending").length;
  const openC = counter.filter((t) => t.Status === "Open").length;
  const closeC = counter.filter((t) => t.Status === "Closed").length;
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-[30px] bg-lightprimary dark:bg-darkprimary text-center rounded-md cursor-pointer"
            onClick={() => dispatch(setVisibilityFilter("total_tickets"))}
          >
            <h3 className="text-primary text-2xl">{counter.length}</h3>
            <h6 className="text-base text-primary">Total Tickets</h6>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-[30px] bg-lightwarning dark:bg-darkwarning text-center rounded-md cursor-pointer"
            onClick={() => dispatch(setVisibilityFilter("Pending"))}
          >
            <h3 className="text-warning text-2xl">{pendingC}</h3>
            <h6 className="text-base text-warning">Pending Tickets</h6>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-[30px] bg-lightsuccess dark:bg-darksuccess text-center rounded-md cursor-pointer"
            onClick={() => dispatch(setVisibilityFilter("Open"))}
          >
            <h3 className="text-success text-2xl">{openC}</h3>
            <h6 className="text-base text-success">Open Tickets</h6>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6  col-span-12">
          <div
            className="p-[30px] bg-lighterror dark:bg-darkerror text-center rounded-md cursor-pointer"
            onClick={() => dispatch(setVisibilityFilter("Closed"))}
          >
            <h3 className="text-error text-2xl">{closeC}</h3>
            <h6 className="text-base text-error">Closed Tickets</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketFilter;
