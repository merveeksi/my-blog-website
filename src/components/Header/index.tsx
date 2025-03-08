import Logo from './logo'
import { NavbarDock } from '../ui/navbar-dock'
import SocialIcons from '../Icons/social-icons'
//import SunIcon from '../ui/sun-moon-icon'
import StarWarsButton from '../Buttons/star-wars-button'

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="bg-neutral-900 w-full">
        <div className="max-w-[1440px] mx-auto">
          <NavbarDock />
        </div>
      </div>
      <header className="w-full flex items-center justify-between h-[70px] max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <Logo />
        <nav className="flex items-center gap-4">
          <button className="bg-gray-300 rounded-full p-2">
            {/* <SunIcon /> */}
          </button>
          <StarWarsButton />
        </nav>
        <SocialIcons />
      </header>
    </div>
  );
}

export default Header;