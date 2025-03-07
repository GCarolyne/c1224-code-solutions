import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../App.css';
import { useState } from 'react';
export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setisOpen] = useState(true);

  function handleClose() {
    if (!isOpen) {
      setisOpen(true);
    }
  }
  function handleOpen() {
    if (isOpen) {
      setisOpen(false);
    }
  }

  return (
    <>
      <div>
        <div className="flex w-full">
          <div className={`menu-drawer ${!isOpen ? '' : 'is-open'}`}>
            {isOpen ? (
              <FaBars className="menu-icon" onClick={handleOpen} />
            ) : (
              <FaBars className="menu-icon" onClick={handleClose} />
            )}
            <h3 className="menu-heading">Hylian Shopping</h3>

            <ul className="menu-items">
              {menuItems.map((menu) => (
                <li key={menu.name} className="menu-item">
                  <Link to={menu.path} className="menu-link">
                    <img src={menu.iconUrl} className="item-icon" />
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </>
  );
}
