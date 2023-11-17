import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar className='w-screen bg-transparent' maxWidth='xl' height={"250px"}>
      <NavbarBrand>
        <p className='font-semibold text-inherit text-4xl tracking-tighter uppercase'>
          Star<span className='to-action from-actionHover bg-gradient-to-b bg-clip-text text-transparent'>Quest</span>
        </p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem isActive className='mx-2'>
          <Link
            color='foreground'
            href='#'
            className='to-action from-actionHover bg-gradient-to-b bg-clip-text text-transparent font-semibold text-lg tracking-tighter uppercase hover:transition-all'
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className='mx-2'>
          <Link
            href='#'
            aria-current='page'
            className='text-white font-semibold text-lg tracking-tighter uppercase hover:text-actionHover/80 hover:transition-all'
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem className='mx-2'>
          <Link
            color='foreground'
            href='#'
            className='text-white font-semibold text-lg tracking-tighter uppercase hover:text-actionHover/80 hover:transition-all'
          >
            Colonies
          </Link>
        </NavbarItem>
        <NavbarItem className='mx-2'>
          <Link
            color='foreground'
            href='#'
            className='text-white font-semibold text-lg tracking-tighter uppercase hover:text-actionHover/80 hover:transition-all'
          >
            The Program
          </Link>
        </NavbarItem>
        <NavbarItem className='mx-2'>
          <Link
            color='foreground'
            href='#'
            className='text-white font-semibold text-lg tracking-tighter uppercase hover:text-actionHover/80 hover:transition-all'
          >
            Planets
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
