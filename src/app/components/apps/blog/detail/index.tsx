"use client";
import React, { useEffect } from "react";
import { fetchBlogPosts, fetchBlogPost } from "@/store/apps/blog/BlogSlice";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  IconEye,
  IconMessage2,
  IconPoint,
  IconQuestionMark,
  IconQuote,
} from "@tabler/icons-react";
import { format } from "date-fns";
import { uniqueId } from "lodash";
import { addComment } from "@/store/apps/blog/BlogSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppDispatch, AppState } from "@/store/store";
import type {
  BlogPostType,
  BlogType,
} from "../../../../(DashboardLayout)/types/apps/blog";
import CardBox from "@/app/components/shared/CardBox";
import Image from "next/image";
import {
    Alert,
  Avatar,
  Badge,
  Button,
  HR,
  List,
  Textarea,
  Tooltip,
} from "flowbite-react";
import BlogComment from "./BlogCommnets";

const BlogDetailData = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const getTitle: string | any = pathName.split("/").pop();

  const [replyTxt, setReplyTxt] = React.useState("");

  useEffect(() => {
    dispatch<any>(fetchBlogPosts());
  }, [dispatch]);

  const paramCase = (t: string) =>
    t
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  // Get post
  const getPost = useSelector((state: AppState) => state.blogReducer.blogposts);
  console.log(getPost);
  const post: BlogPostType | any = getPost.find(
    (p: BlogPostType) => getTitle === paramCase(p.title)
  );

  const onSubmit = async (id: number, reply: string) => {
    const replyId: string = uniqueId("#comm_");
    const newReply = {
      id: replyId,
      profile: {
        id: uniqueId("#REPLY_"),
        avatar: post?.author.avatar,
        name: post?.author.name,
        time: "now",
      },
      comment: reply,
      replies: [],
    };
    dispatch<any>(addComment(id, newReply));
    dispatch<any>(fetchBlogPost(getTitle));
    setReplyTxt("");
  };

  // skeleton
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {post ? (
        <>
          <CardBox className="p-0 overflow-hidden">
            <div className="relative ">
              <div className="overflow-hidden max-h-[440px]">
                <Image
                  src={post?.coverImg}
                  alt="materialm"
                  height={440}
                  width={1500}
                  className="w-100 object-cover object-center "
                />
              </div>
              <Badge color={"white"} className="absolute bottom-8 end-6">
                2 min Read
              </Badge>
            </div>
            <div className="flex justify-between items-center -mt-7 px-6">
              <div>
                <Tooltip content={post ? post?.author.name : ""} className="">
                  <Avatar img={post?.author.avatar} rounded />
                </Tooltip>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Badge color={"muted"} className="mt-3">
                {post?.category}
              </Badge>
              <h2 className="text-4xl my-6">{post?.title}</h2>
              <div>
                <div className="flex gap-3">
                  <div className="flex gap-2 items-center text-darklink text-[15px]">
                    <IconEye size="18" className="text-dark dark:text-white" />
                    {post?.view}
                  </div>
                  <div className="flex gap-2 items-center text-darklink text-[15px]">
                    <IconMessage2
                      size="18"
                      className="text-dark dark:text-white"
                    />{" "}
                    {post?.comments.length}
                  </div>
                  <div className="ms-auto flex gap-2 items-center  text-darklink text-[15px]">
                    <IconPoint
                      size="16"
                      className="text-dark dark:text-white"
                    />
                    <small>
                      {post ? (
                        <>{format(new Date(post.createdAt), "E, MMM d")}</>
                      ) : (
                        ""
                      )}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <HR className="my-0 mb-4" />
            <div className="px-6 pb-6">
              <h2 className="text-3xl pb-5">Title of the paragraph</h2>
              <p className="text-darklink">
                But you cannot figure out what it is or what it can do. MTA web
                directory is the simplest way in which one can bid on a link, or
                a few links if they wish to do so. The link directory on MTA
                displays all of the links it currently has, and does so in
                alphabetical order, which makes it much easier for someone to
                find what they are looking for if it is something specific and
                they do not want to go through all the other sites and links as
                well. It allows you to start your bid at the bottom and slowly
                work your way to the top of the list.
              </p>
              <br></br>
              <p className="text-darklink">
                Gigure out what it is or what it can do. MTA web directory is
                the simplest way in which one can bid on a link, or a few links
                if they wish to do so. The link directory on MTA displays all of
                the links it currently has, and does so in alphabetical order,
                which makes it much easier for someone to find what they are
                looking for if it is something specific and they do not want to
                go through all the other sites and links as well. It allows you
                to start your bid at the bottom and slowly work your way to the
                top of the
              </p>
              <br></br>

              <p>
                <b className="text-dark dark:text-white">
                  This is strong text.
                </b>
              </p>
              <i>This is italic text.</i>
              <HR />
              <h3 className="text-xl mb-3">Unorder list.</h3>
              <List>
                <List.Item>Gigure out what it is or</List.Item>
                <List.Item>The links it currently</List.Item>
                <List.Item>It allows you to start your bid</List.Item>
                <List.Item>Gigure out what it is or</List.Item>
                <List.Item>The links it currently</List.Item>
                <List.Item>It allows you to start your bid</List.Item>
              </List>
              <HR />
              <h3 className="text-xl mb-3">Order list.</h3>
              <List ordered>
                <List.Item>Gigure out what it is or</List.Item>
                <List.Item>The links it currently</List.Item>
                <List.Item>It allows you to start your bid</List.Item>
                <List.Item>Gigure out what it is or</List.Item>
                <List.Item>The links it currently</List.Item>
                <List.Item>It allows you to start your bid</List.Item>
              </List>
              <HR />
              <h3 className="text-xl mb-3">Quotes</h3>
              <div className="pt-5 pb-4 px-4 rounded-md border-s-2 border-primary bg-muted dark:bg-darkmuted flex gap-1 items-start">
                <IconQuote
                  size={25}
                  className="text-dark dark:text-white -mt-1"
                />
                <h2 className="text-base font-bold">
                  Life is short, Smile while you still have teeth!
                </h2>
              </div>
            </div>
          </CardBox>
          <CardBox className="mt-6">
            <h5 className="text-xl mb-2">Post Comments</h5>
            <Textarea
              rows={4}
              value={replyTxt}
              onChange={(e) => setReplyTxt(e.target.value)}
            ></Textarea>
            <Button color={"primary"} className="w-fit mt-3" onClick={() => onSubmit(post.id, replyTxt)}>
              Post Comment
            </Button>
            <div className="mt-6">
              <div className="flex gap-3 items-center">
                <h5 className="text-xl ">Comments</h5>
                <div className="h-8 w-8 rounded-full bg-lightprimary dark:bg-darkprimary flex items-center justify-center text-primary font-bold">
                  {post?.comments.length}
                </div>
              </div>
              <div>
                {post?.comments?.map((comment: BlogType | any) => {
                  return (
                    <BlogComment comment={comment} key={comment.profile.id} />
                  );
                })}
              </div>
            </div>
          </CardBox>
        </>
      ) : (
        <p className="text-xl text-center py-6 font-bold">No Post Found</p>
      )}
    </>
  );
};

export default BlogDetailData;
