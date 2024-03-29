import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { CiDark, CiLight } from "react-icons/ci";
import useConfigStore from "@/stores/store.ts";
import { ThemeType } from "@/types/config.ts";

export function Header() {
  const { config, setTheme } = useConfigStore((state) => ({
    config: state.config,
    setTheme: state.setTheme
  }));

  function themeButtonClick() {
    setTheme(
      config.theme === ThemeType.light ? ThemeType.dark : ThemeType.light
    );
  }

  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <img src="/star.svg" alt="logo" className="h-8 w-8 mr-2" />
            <p className="hidden sm:block font-bold text-inherit mr-2">
              Check My Salary
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Button
            isIconOnly
            className="group text-default-900/60 data-[hover]:bg-foreground/10 "
            radius="full"
            variant="light"
            data-light={config.theme === ThemeType.light}
            onPress={themeButtonClick}
          >
            <CiLight className="absolute h-8 w-8 opacity-0 scale-50 group-data-[light=true]:opacity-100 group-data-[light=true]:scale-100 transition-transform-opacity" />
            <CiDark className="absolute h-8 w-8 opacity-100 scale-100 group-data-[light=true]:opacity-0 group-data-[light=true]:scale-50 transition-transform-opacity" />
          </Button>
        </NavbarContent>
      </Navbar>
    </>
  );
}
