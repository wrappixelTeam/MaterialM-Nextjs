"use client";
import React, { useState } from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import NotesSidebar from "@/app/components/apps/notes/NotesSidebar";
import NoteContent from "@/app/components/apps/notes/NoteContent";
import AddNotes from "@/app/components/apps/notes/AddNotes";
import { IconMenu2 } from "@tabler/icons-react";
import { Button, Drawer } from "flowbite-react";
import { NotesProvider } from '@/app/context/NotesContext/index'

interface colorsType {
  lineColor: string;
  disp: string | any;
  id: number;
}
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Notes",
  },
];
const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const colorvariation: colorsType[] = [
    {
      id: 1,
      lineColor: "warning",
      disp: "warning",
    },
    {
      id: 2,
      lineColor: "primary",
      disp: "primary",
    },
    {
      id: 3,
      lineColor: "error",
      disp: "error",
    },
    {
      id: 4,
      lineColor: "success",
      disp: "success",
    },
    {
      id: 5,
      lineColor: "secondary",
      disp: "secondary",
    },
  ];
  return (
    <>
      <NotesProvider>
        <BreadcrumbComp title="Notes app" items={BCrumb} />
        <CardBox className="p-0">
          <div className="flex">
            {/* NOTES SIDEBAR */}
            <div>
              <Drawer
                open={isOpen}
                onClose={handleClose}
                className="lg:relative lg:transform-none lg:h-auto lg:bg-transparent"
              >
                <NotesSidebar />
              </Drawer>
            </div>

            {/* NOTES CONTENT */}
            <div className="w-full">
              <div className="flex justify-between items-center border-b border-ld py-4 px-6">
                <div className="flex gap-3 items-center">
                  <Button
                    color={"lightprimary"}
                    onClick={() => setIsOpen(true)}
                    className="btn-circle p-0 lg:hidden flex"
                  >
                    <IconMenu2 size={18} />
                  </Button>
                  <h6 className="text-base"> Edit Note</h6>
                </div>
                <AddNotes colors={colorvariation} />
              </div>
              <NoteContent />
            </div>
          </div>
        </CardBox>
      </NotesProvider>
    </>
  );
};

export default Notes;
