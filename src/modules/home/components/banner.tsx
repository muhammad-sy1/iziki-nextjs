import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { FaRegCircle } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const Banner = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative">
      <div className="h-[600px] relative">
        <Image
          src="/imgs/banner.png"
          alt="banner"
          className="h-auto object-cover"
          fill
        />
        <div className="w-full h-full bg-white/60 dark:bg-black/60 absolute inset-0">
          <div className="container lg:px-20 md:px-10 sm:px-5 px-2 h-full">
            <div className="flex flex-col justify-center items-center gap-y-5 h-full text-center">
              <div className="text-my-green font-bold sm:text-5xl text-2xl">
                {t("banner.title")}
              </div>
              <div className="text-my-black dark:text-my-white font-medium sm:text-3xl text-lg">
                {t("banner.subtitle")}
              </div>
            </div>
          </div>
        </div>

        <div className="container xl:px-40 lg:px-20 md:px-10 sm:px-5 px-2 relative -bottom-140">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-y-5 bg-background rounded-xl shadow-xl dark:shadow-my-black/20 px-5 py-3">
            <div className="flex lg:flex-row flex-col items-center gap-y-3 gap-x-10">
              <div className="flex items-center gap-x-5">
                {/* From */}
                <div className="flex items-center gap-x-2">
                  <FaRegCircle className="size-5 sm:flex hidden" />
                  <Select>
                    <SelectTrigger className="hover:bg-gray-100">
                      <SelectValue placeholder={t("banner.from")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city1">City 1</SelectItem>
                      <SelectItem value="city2">City 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline">
                  <GoArrowSwitch />
                </Button>

                {/* To */}
                <div className="flex items-center gap-x-2">
                  <FaRegCircle className="size-5 sm:flex hidden" />
                  <Select>
                    <SelectTrigger className="hover:bg-gray-100">
                      <SelectValue placeholder={t("banner.to")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city1">City 1</SelectItem>
                      <SelectItem value="city2">City 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date & Passengers */}
              <div className="flex items-center gap-x-5">
                <div className="lg:flex hidden">|</div>
                <div className="flex items-center gap-x-2">
                  <LuCalendarDays className="size-5 sm:flex hidden" />
                  <Select>
                    <SelectTrigger className="hover:bg-gray-100">
                      <SelectValue placeholder={t("banner.today")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">{t("banner.today")}</SelectItem>
                      <SelectItem value="tomorrow">
                        {t("banner.tomorrow")}
                      </SelectItem>
                      <SelectItem value="afterTomorrow">
                        {t("banner.afterTomorrow")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>|</div>

                <div className="flex items-center gap-x-2">
                  <FaRegUser className="size-5 sm:flex hidden" />
                  <Select>
                    <SelectTrigger className="hover:bg-gray-100">
                      <SelectValue placeholder={t("banner.passengers")} />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10)].map((_, i) => (
                        <SelectItem key={i} value={`${i + 1}`}>
                          {t("banner.passengers", { count: i + 1 })}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Search button */}
            <Button>{t("banner.search")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
