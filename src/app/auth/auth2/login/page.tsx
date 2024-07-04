import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import SocialButtons from "../../authforms/SocialButtons";
import AuthLogin from "../../authforms/AuthLogin";
import Link from "next/link";

const BoxedLogin = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted dark:bg-dark">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto">
              <Logo />
            </div>
            <SocialButtons title="or sign in with" />
            <AuthLogin />
            <div className="flex gap-2 text-base text-dark dark:text-white font-medium mt-6 items-center justify-center">
              <p>New to MaterialM?</p>
              <Link
                href={"/auth/auth2/register"}
                className="text-primary text-sm font-medium"
              >
                Create an account
              </Link>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default BoxedLogin;
