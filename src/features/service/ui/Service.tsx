import { Typography } from "@/shared/ui/typography";
import { Dot } from "@/shared/ui/elements";
import Link from "next/link";

export interface ServiceProps {
  title: string;
  href: string;
}

export const Service = ({ title, href }: ServiceProps) => {
  return (
    <Link
      className="group flex flex-col items-center gap-4 w-[384px]"
      href={href}
    >
      <div className="relative w-[180px] h-[180px]">
        <div className="bg-white z-40 w-[180px] h-[180px] rounded-full  flex items-center justify-center shadow-service transition-all group-hover:shadow-serviceHover group-hover:shadow-blue-500 group-hover:-translate-y-2 duration-300 relative"></div>
        <Dot className="w-[20px] h-[20px] opacity-50 group-hover:translate-y-[70px] group-hover:translate-x-[90px]" />
        <Dot className="group-hover:translate-y-[-20px] group-hover:translate-x-[110px]" />
        <Dot className="w-[12px] h-[12px] opacity-50 group-hover:translate-y-[-80px] group-hover:translate-x-[90px]" />
        <Dot
          variant="ring"
          className="w-[5px] h-[5px] opacity-50 group-hover:translate-y-[-110px] group-hover:translate-x-[20px]"
        />
        <Dot
          variant="ring"
          className="w-[12px] h-[12px] group-hover:translate-y-[-110px] group-hover:translate-x-[-90px]"
        />
        <Dot className="w-[5px] h-[5px] opacity-50 group-hover:translate-y-[40px] group-hover:translate-x-[-110px]" />
        <Dot className="w-[10px] h-[10px] group-hover:translate-y-[70px] group-hover:translate-x-[-90px]" />
      </div>
      <Typography tag="span" size="xl">
        {title}
      </Typography>
    </Link>
  );
};
