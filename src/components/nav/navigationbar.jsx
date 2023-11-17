import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar className='w-screen bg-transparent fixed' maxWidth='xl' height={"250px"} isBlurred={false}>
      <NavbarBrand>
        <div className='w-1/12 mx-4'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 48 48'
            enableBackground='new 0 0 48 48'
            xmlSpace='preserve'
          >
            <circle fill='#F97C5C' cx='24' cy='24' r='16' />
            <g>
              <path
                fill='#EA2A4F'
                d='M8.1,25.7c0.1,2.5,4.1,6.5,9.8,9.7c5.7,3.1,11.3,4.3,13.5,3c0,0,0,0,0,0c-2.1,1.1-4.3,1.7-6.7,1.8 c-2.3-0.5-5-1.6-7.7-3.1s-5.1-3.2-6.8-4.8C9,30.3,8.3,28,8.1,25.7C8.1,25.7,8.1,25.7,8.1,25.7z'
              />
              <path
                fill='#EA2A4F'
                d='M22.9,26.2c-7.1-3.9-12-8.9-11.5-11.8c0.3-0.4,0.7-0.9,1.1-1.3c0.4,3,5,7.5,11.5,11.1s12.9,4.9,15.6,3.6 c-0.1,0.5-0.3,1.1-0.5,1.6C36.9,31.3,30,30,22.9,26.2z'
              />
              <path
                fill='#EA2A4F'
                d='M39.6,20.6c-1.4,1.8-6.8,0.9-12.4-2.2s-9.4-7.1-8.6-9.2c0.3-0.1,0.5-0.2,0.8-0.3c0.6,2.2,4,5.5,8.6,8 c4.7,2.5,9.2,3.6,11.4,2.9C39.4,20,39.5,20.3,39.6,20.6z'
              />
            </g>
            <path
              fill='#EA2A4F'
              d='M17.7,34c12.4,6.8,25.1,7.8,28.4,2.1c2.5-3.9-0.4-10-6.6-15.6c0.2,1.1,0.4,2.3,0.4,3.4c0,0,0,0.2,0,0.4 c1.1,2.1,1.2,4.1,0.4,5.5c-2.1,3.9-10.7,3.2-19-1.4C13,23.7,8.1,16.9,10.4,13.2c0.9-1.2,2.5-2.1,4.6-2.3c1.1-0.7,2.1-1.2,3.4-1.8 C10.6,7,4.2,7.9,1.8,11.6C-1.5,17.3,5.6,27.4,17.7,34z'
            />
          </svg>
        </div>
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
