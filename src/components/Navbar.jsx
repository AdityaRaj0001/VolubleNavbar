import Logo from "./Logo"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu, Avatar
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const menuItems = [
    <Avatar isBordered
    className="transition-transform"
    color="default"
    name="Jason Hughes"
    size="sm"
    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"></Avatar>,
    "Terms and services",
    "Privacy note",
    "Team Settings",
    "Help & Feedback",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className=" bg-transparent m-auto text-white flex justify-between lg:justify-center w-full items-center " >

      <NavbarContent className="w-1/5 sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="w-1/5 sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Voluble</p>
        </NavbarBrand>
      </NavbarContent>
      <div className="w-2/5 sm:hidden text-white"></div>
      

      <NavbarContent className="hidden sm:flex custom-justify lg:justify-center">
        <div className="w-1/5 flex items-center lg:justify-end gap-1">
          <Logo />
          <p className="font-bold text-inherit">Voluble</p>
        </div>
        <div className="flex justify-end lg:justify-center items-center gap-12 w-3/5">
          <NavbarItem className="h-fit">
            <Link color="foreground" className="text-white" href="#">
              About
            </Link>
          </NavbarItem>

          <NavbarItem className="h-fit">
            <Link href="#"  className="text-white" color="foreground" >
              Features
            </Link>
          </NavbarItem>

          <NavbarItem className="h-fit">
            <Link color="foreground"  className="text-white" href="#">
              Download
            </Link>
          </NavbarItem>
          
          <Dropdown>
          <NavbarItem className="h-fit flex gap-3 items-center">
          <Avatar
              isBordered
              className="transition-transform"
              color="default"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-medium"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
                
              >
                Profile
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[240px] "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Customize your look and feel of the app, Sun/Moon whatever theme you like."
              startContent={icons.scale}
            >
              Settings
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Invite people on Voluble in one click and start sharing your life moments with them"
              startContent={icons.activity}
            >
              Contacts
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="Are you having any Privacy concerns? we've got you covered"
              startContent={icons.flash}
            >
              Privacy
            </DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
        </div>
        
      </NavbarContent>

      <NavbarMenu  className=" bg-slate-950" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`}>
            <Link
              
              className="w-full text-blue-200"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
