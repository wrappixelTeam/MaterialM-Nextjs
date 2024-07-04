import React from "react";
import { IconArrowBackUp, IconCircle, IconDots } from "@tabler/icons-react";
import { BlogType } from "../../../../(DashboardLayout)/types/apps/blog";
import { Avatar, Button, TextInput, Tooltip } from "flowbite-react";
const BlogComment = ({ comment }: BlogType | any) => {
  const [showReply, setShowReply] = React.useState(false);
  return (
    <>
      <div className="mt-5 p-5 bg-muted dark:bg-darkmuted rounded-lg">
        <div className="flex gap-3 items-center">
          <Avatar img={comment?.profile.avatar} size="sm" rounded></Avatar>
          <h6 className="text-base">{comment?.profile.name}</h6>
          <span className="h-2 w-2 rounded-full bg-dark opacity-40 dark:bg-white block"></span>
          <p>{comment?.profile.time}</p>
        </div>
        <div className="py-4">
          <p className="text-dark dark:text-white">{comment?.comment}</p>
        </div>
        <div className="relative w-fit">
          <Tooltip content="Reply">
            <Button
              color={"primary"}
              className="btn-circle flex items-center "
              onClick={() => setShowReply(!showReply)}
            >
              <IconArrowBackUp size="16" />
            </Button>
          </Tooltip>
        </div>
      </div>
      {comment?.replies ? (
        <>
          {comment?.replies.map((reply: BlogType | any) => {
            return (
              <div className="ps-8" key={reply.comment}>
                <div className="mt-5 p-5 bg-muted dark:bg-darkmuted rounded-lg">
                  <div className="flex gap-3 items-center">
                    <Avatar img={reply.profile.avatar} rounded size="sm" />
                    <h6 className="text-base">{reply.profile.name}</h6>
                    <span className="h-2 w-2 rounded-full bg-dark dark:bg-white opacity-40 block"></span>
                    <p>{comment?.profile.time}</p>
                  </div>
                  <div className="py-4">
                    <p className="text-dark dark:text-white">{reply.comment}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
      {showReply ? (
        <div className="py-5 px-5">
          <div className="flex gap-3 items-center">
            <div className="w-10">
              <Avatar img={comment?.profile.avatar} rounded size="sm" />
            </div>
            <TextInput className="form-control w-full" placeholder="Reply" />
            <Button color={"primary"}>Reply</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogComment;
