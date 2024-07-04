"use client";
import React from "react";
import { useSelector, useDispatch } from "@/store/hooks";
import { IconCheck, IconMenu2 } from "@tabler/icons-react";
import { UpdateNote } from "@/store/apps/notes/NotesSlice";
import { NotesType } from "../../../(DashboardLayout)/types/apps/notes";
import { Button, Textarea } from "flowbite-react";
import AddNotes from "./AddNotes";
interface colorsType {
  lineColor: string;
  disp: string | any;
  id: number;
}

interface Props {
  toggleNoteSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}
const NoteContent = () => {
  const notelength: any = useSelector(
    (state) => state.notesReducer.notes.length - 1
  );
  const noteDetails: NotesType = useSelector(
    (state) =>
      state.notesReducer.notes[
        state.notesReducer.notesContent > notelength
          ? 0
          : state.notesReducer.notesContent
      ]
  );
  const dispatch = useDispatch();
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
      <div className="flex flex-grow p-6">
        {/* ------------------------------------------- */}
        {/* Edit notes */}
        {/* ------------------------------------------- */}
        {noteDetails ? (
          <div className="w-full">
            <Textarea
              id="outlined-multiline-static"
              placeholder="Edit Note"
              rows={5}
              value={noteDetails.title}
              onChange={(e) =>
                dispatch(UpdateNote(noteDetails.id, "title", e.target.value))
              }
              className="w-full p-6"
            />
            <br />
            <h6 className="text-base mb-3">Change Note Color</h6>

            <div className="flex gap-2 items-center">
              {colorvariation.map((color1) => (
                <div
                  className={`h-7 w-7 flex justify-center items-center rounded-full cursor-pointer  bg-${color1?.disp}`}
                  key={color1.id}
                  onClick={() =>
                    dispatch(UpdateNote(noteDetails.id, "color", color1.disp))
                  }
                >
                  {noteDetails.color === color1.disp ? (
                    <IconCheck width="18" className="text-white" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center w-full py-6 text-2xl text-darklink">
            Select a Note
          </div>
        )}
      </div>
    </>
  );
};

export default NoteContent;
