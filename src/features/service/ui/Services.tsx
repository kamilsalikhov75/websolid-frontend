import { Typography } from "@/shared/ui/typography";
import { SERVICES } from "../model/meta";
import { Service } from "./Service";

export const Services = () => {
  return (
    <div>
      <Typography className="text-center uppercase font-bold mb-9" size="2xl">
        Услуги
      </Typography>
      <div className="flex items-center justify-center gap-4">
        {SERVICES.map((service, index) => {
          return (
            <Service title={service.title} href={service.href} key={index} />
          );
        })}
      </div>
    </div>
  );
};
