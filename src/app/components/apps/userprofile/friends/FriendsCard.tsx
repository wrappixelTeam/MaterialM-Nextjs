import React, { useEffect } from "react";
import { useSelector, useDispatch } from "@/store/hooks";
import { fetchFollwores } from "@/store/apps/userProfile/UserProfileSlice";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconSearch,
} from "@tabler/icons-react";
import { userType } from "../../../../(DashboardLayout)/types/apps/users";
import { Avatar, Badge, Button, TextInput } from "flowbite-react";
import { Icon } from "@iconify/react";
import CardBox from "@/app/components/shared/CardBox";
import Image from "next/image";
import Link from "next/link";

const socialiconCard = [
  {
    icon: <IconBrandFacebook size={17} />,
    color: "primary",
  },
  {
    icon: <IconBrandInstagram size={17} />,
    color: "error",
  },
  {
    icon: <IconBrandGithub size={17} />,
    color: "info",
  },
  {
    icon: <IconBrandTwitter size={17} />,
    color: "secondary",
  },
];
const FriendsCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchFollwores());
  }, [dispatch]);

  const filterFriends = (friends: userType[], cSearch: string) => {
    if (friends)
      return friends.filter((t) =>
        t.name.toLocaleLowerCase().includes(cSearch.toLocaleLowerCase())
      );

    return friends;
  };
  const [search, setSearch] = React.useState("");
  const getFriends = useSelector((state) =>
    filterFriends(state.userpostsReducer.followers, search)
  );

  return (
    <>
      <div className="md:flex justify-between mb-6">
        <h5 className="text-2xl flex gap-3 items-center">
          Friends <Badge color={"secondary"}>{getFriends.length}</Badge>
        </h5>
        <TextInput
          icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          type="text"
          sizing="md"
          className="form-control "
          placeholder="Search Friends"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-12 gap-[30px]">
        {getFriends.map((profile) => {
          return (
            <div
              className="lg:col-span-4 md:col-span-3 sm:col-span-6 col-span-12"
              key={profile.id}
            >
              <CardBox className="px-0 pb-0  text-center overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt="materialm"
                  className="rounded-full mx-auto"
                  height={80}
                  width={80}
                />
                <div>
                  <h5 className="text-lg mt-3">{profile.name}</h5>
                  <p className="text-xs text-darklink">{profile.role}</p>
                </div>
                <div className="flex justify-center gap-4 items-center border-t border-ld mt-4 pt-4 bg-muted pb-4 dark:bg-darkmuted">
                  {socialiconCard.map((soc, index) => (
                    <Link
                      href={"#"}
                      className={`text-${soc.color}`}
                      key={index}
                    >
                      {soc.icon}
                    </Link>
                  ))}
                </div>
              </CardBox>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FriendsCard;
