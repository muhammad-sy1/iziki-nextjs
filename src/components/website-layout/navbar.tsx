"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { SlPlus } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../global/LanguageSwitcher";
// import { useRouter } from "@/i18n/navigation";
import { getCookie } from "@/lib/cookies/cookiesMethods";
import { useState } from "react";
import { toast } from "sonner";
// import { useEffect } from "react";

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Header");
  // const token = getCookie("token");
  const [token, setToken] = useState(getCookie("token"));

  // useEffect(() => {
  //   setCookie("tokenWE", "thing", 7);
  // }, []);
  // localStorage.getItem("token");
  // const router = useRouter();
  return (
    <header>
      <nav className="sm:max-w-[95%] absolute mx-auto z-50 top-10 inset-x-0 ">
        <div className="px-2 bg-gradient-to-r from-blue-950 from-5% to-green-700 dark:to-black/50 to-90% h-16 rounded-xl">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="h-full flex justify-center items-center p-3">
              <Image
                src="/imgs/logo.png"
                alt="logo"
                // className="h-full cursor-pointer"
                width={50}
                height={50}
              />
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-x-4">
              <LanguageSwitcher />

              {/* Publish Ride */}
              <Dialog>
                <DialogTrigger className="">
                  <div className="flex items-center gap-x-2 transition-colors text-gray-100 hover:text-gray-200">
                    <SlPlus className="text-2xl" />
                    <span className="font-bold text-xl sm:flex hidden">
                      {t("publishRide")}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t("confirmTitle")}</DialogTitle>
                    <DialogDescription>{t("confirmDesc")}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              {/* Search */}
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer transition-colors text-gray-100 hover:text-gray-200">
                      <IoIosSearch className="text-3xl" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{t("search")}</DialogTitle>
                      <DialogDescription>{t("searchDesc")}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid gap-3">
                        <Input
                          id="name-1"
                          name="name"
                          placeholder={t("searchPlaceholder")}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">{t("cancel")}</Button>
                      </DialogClose>
                      <Button type="submit">{t("search")}</Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>

              {/* Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="flex items-center gap-x-1 text-2xl transition-colors text-gray-100 hover:text-gray-200">
                    <FaUserCircle />
                    <MdKeyboardArrowDown />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>{t("profile")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("billing")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("team")}</DropdownMenuItem>
                  {!token && (
                    <DropdownMenuItem>
                      <Link href={`/${locale}/login`}>login</Link>
                    </DropdownMenuItem>
                  )}
                  {!token && (
                    <DropdownMenuItem>
                      <Link href={`/${locale}/signup`}>Sign Up</Link>
                    </DropdownMenuItem>
                  )}
                  {token && (
                    <DropdownMenuItem>
                      {/* <Link href={`/${locale}/signup`}> */}
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setToken(null);
                          toast("log out successfully");
                        }}
                      >
                        Logout
                      </div>
                      {/* </Link> */}
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
