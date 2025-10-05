import ServicesCards from "@/modules/home/components/ServicesCards";
import { GiMoneyStack } from "react-icons/gi";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import { useTranslations } from "next-intl";

const OurServices = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="container lg:px-20 md:px-10 sm:px-5 px-2 lg:pt-20 pt-40 pb-10">
      <div className="flex flex-col gap-y-10">
        <div className="sec-title">{t("services.title")}</div>
        <div className="grid grid-cols-6 gap-10 gap-y-10">
          <ServicesCards
            serviceInfo={{
              serviceIcon: <GiMoneyStack />,
              serviceTitle: t("services.cheapTrips"),
              serviceBody: t("services.cheapTripsBody"),
            }}
          />
          <ServicesCards
            serviceInfo={{
              serviceIcon: <AiTwotoneSecurityScan />,
              serviceTitle: t("services.trustPeople"),
              serviceBody: t("services.trustPeopleBody"),
            }}
          />
          <ServicesCards
            serviceInfo={{
              serviceIcon: <ImPower />,
              serviceTitle: t("services.bookFast"),
              serviceBody: t("services.bookFastBody"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
