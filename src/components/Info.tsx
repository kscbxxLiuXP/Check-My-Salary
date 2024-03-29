import useConfigStore from "@/stores/store";
import { Button, Tooltip } from "@nextui-org/react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { ThemeType } from "@/types/config.ts";

interface InfoProps {
  children: React.ReactNode;
}

export const Info = (props: InfoProps) => {
  const { config } = useConfigStore((state) => ({
    config: state.config
  }));
  return (
    <Tooltip
      placement="right"
      className={`${config.theme === ThemeType.light ? "light" : "dark"} text-foreground bg-background`}
      content={<div className="px-1 py-2">{props.children}</div>}
    >
      <Button isIconOnly variant="light" className=" p-0 m-0">
        <IoInformationCircleOutline className="p-0 m-0 min-w-[20px] min-h-[20px]" />
      </Button>
    </Tooltip>
  );
};
