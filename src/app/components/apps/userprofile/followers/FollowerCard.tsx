import React, { useEffect } from "react";
import { useSelector, useDispatch } from "@/store/hooks";
import { Icon } from "@iconify/react";
import {
  fetchFollwores,
  onToggleFollow,
} from "@/store/apps/userProfile/UserProfileSlice";
import { IconMapPin, IconSearch } from "@tabler/icons-react";
import { userType } from "../../../../(DashboardLayout)/types/apps/users";
import { Avatar, Badge, Button, TextInput } from "flowbite-react";
import CardBox from "@/app/components/shared/CardBox";

const FollowerCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchFollwores());
  }, [dispatch]);

  const filterFollowers = (followers: userType[], cSearch: string) => {
    if (followers)
      return followers.filter((t) =>
        t.name.toLocaleLowerCase().includes(cSearch.toLocaleLowerCase())
      );

    return followers;
  };
  const [search, setSearch] = React.useState("");
  const getFollowers = useSelector((state) =>
    filterFollowers(state.userpostsReducer.followers, search)
  );
  return (
    <>
      <div className="md:flex justify-between mb-6">
        <h5 className="text-2xl flex gap-3 items-center">
          Followers <Badge color={"secondary"}>{getFollowers.length}</Badge>
        </h5>
        <TextInput
          icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          type="text"
          sizing="md"
          className="form-control "
          placeholder="Search Followers"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-12 gap-[30px]">
        {getFollowers.map((profile) => {
          return (
            <div
              className="lg:col-span-4 md:col-span-3 sm:col-span-6 col-span-12"
              key={profile.id}
            >
              <CardBox>
                <div className="flex gap-3">
                  <Avatar img={profile.avatar} rounded />
                  <div>
                    <h6 className="text-base">{profile.name}</h6>
                    <p className="flex gap-1 items-center mt-0.5">
                      <IconMapPin size="14" /> <span className=" truncat line-clamp-1 text-wrap text-darklink">{profile.country}</span>
                    </p>
                  </div>
                  <div className="ms-auto">
                    {profile.isFollowed ? (
                      <Button
                        color={"primary"}
                        size={'sm'}
                        onClick={() => dispatch(onToggleFollow(profile.id))}
                      >
                        Followed
                      </Button>
                    ) : (
                      <Button
                        color={"outlineprimary"}
                        size={'sm'}
                        onClick={() => dispatch(onToggleFollow(profile.id))}
                      >
                        Follow
                      </Button>
                    )}
                  </div>
                </div>
              </CardBox>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FollowerCard;
