import Link from 'next/link';

const NavBarMenu = ({
  showNavMenu,
  toggleShowNavBar,
}: {
  showNavMenu: boolean;
  toggleShowNavBar: () => void;
}): JSX.Element => {
  const navLinks = [
    {
      id: 'home',
      link: 'Home',
      to: '/',
    },
    {
      id: 'privacy and policy',
      link: 'Privacy Policy',
      to: '/privacy-policy',
    },
    {
      id: 'faqs',
      link: 'FAQs',
      to: '/faqs',
    },
    {
      id: 'terms and condition',
      link: 'Terms and Conditions',
      to: '/terms-and-conditions',
    },
    {
      id: 'contact us',
      link: 'Contact Us',
      to: '/contact-us',
    },
  ];

  return (
    <div
      className={`hamburger-item-wrapper bg-[#e60c2b] z-10 fixed  w-full right-0 top-[80px] lg:hidden transition ease-in-out delay-50 p-5 ${
        showNavMenu ? '' : '!hidden'
      }`}
    >
      {navLinks.map((item, index) => (
        <div className="menu-links" key={index}>
          <Link href={item.to}>
            <p className=" text-[#ffffff] font-Roboto" onClick={toggleShowNavBar}>
              {item.link}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavBarMenu;
