import React from "react";
import PostBox from "./PostBox";
import { useEffect } from 'react';
import { useSelector, useDispatch } from'@/store/hooks';
import { fetchPosts } from '@/store/apps/userProfile/UserProfileSlice';

import { PostType } from '../../../../(DashboardLayout)/types/apps/userProfile';
import PostIem from "./PostItem";


const Post = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchPosts());
  }, [dispatch]);

  const getPosts: PostType[] = useSelector((state) => state.userpostsReducer.posts);
  return (
    <>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12">
          <PostBox />
        </div>
        {getPosts.map((posts) => {
          return (
            <div className="col-span-12" key={posts.id}>
              <PostIem post={posts} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Post;
