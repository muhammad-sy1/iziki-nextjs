import { getHomeData } from "@/services/latestTrips-socialLinks";
import LatestTrips from "./LatestTrips";
import dayjs from "@/utils/dayjsConfig";
import { getTranslations } from "next-intl/server";
import type { ApiResponse } from "@/types/homeApi";

export default async function TripsSection() {
  const t = await getTranslations("HomePage");

  const data: ApiResponse = await getHomeData();
  // console.log(data);

  return (
    <>
      <div className="sec-title py-10">{t("trips.latest")}</div>
      <div className="bg-gradient-to-r from-blue-950 to-green-900 py-10">
        <div className="container lg:px-20 md:px-10 sm:px-5 px-2">
          <div className="flex flex-col gap-y-10">
            <div className="grid grid-cols-6 gap-5 ">
              {data &&
                data.data.trips.map((item) => (
                  <div className="contents" key={item.id}>
                    <LatestTrips
                      cardInfo={{
                        title: `${item.from_location_text} to ${item.to_location_text}`,
                        date: `${dayjs(item.travel_datetime)
                          // .locale(lang)
                          .toNow()}`,
                        quantity: `${item.seats} ${t("trips.quantity")}`,
                        price: `${t("trips.price")} ${item.price} $`,
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
