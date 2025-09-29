import React from "react";
import { IoMdTime } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type CardInfo = {
  title: string;
  date: string | React.ReactNode;
  quantity: string;
  price: string;
};

type LatestTripsProps = {
  cardInfo: CardInfo;
};

const  LatestTrips: React.FC<LatestTripsProps> = ({ cardInfo }) => {
  const t = useTranslations("HomePage");

  const { title, date, quantity, price } = cardInfo;
  return (
    <div className="flex flex-col items-center gap-y-3 px-10 py-4 lg:col-span-2 md:col-span-3 col-span-6 bg-gray-100 dark:bg-black rounded-xl hover:-translate-y-1 transition-transform">
      <div className="font-semibold text-lg line-clamp-2">{title}</div>
      <div className="flex items-center gap-x-3">
        <IoMdTime className="text-2xl" />
        <div className="">{date}</div>
      </div>
      <div className="">{quantity}</div>
      <div className="">{price}</div>
      <Button className="sm:text-base text-sm">{t("trips.bookTrip")}</Button>
    </div>
  );
};

export default LatestTrips;
