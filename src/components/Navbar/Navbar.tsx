import { Fragment } from 'react';
import { NavLink, To } from 'react-router-dom';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { t } from 'i18next';

import { backgroundImage, LANGUAGES, symbol } from 'consts/consts';
import { i18n } from 'language/i18';

interface NavigationItem {
  to: To;
  name: string;
}

interface Props {
  item: NavigationItem;
  onClickItem?: (e: unknown) => void;
  value?: string;
}

const NAVIGATION: NavigationItem[] = [
  {
    to: '/',
    name: t('Home'),
  },
  {
    to: '/work',
    name: t('Work'),
  },
  {
    to: '/contact',
    name: t('Where to find us'),
  },
];

export const MenuItem = ({ item, onClickItem }: Props) => (
  <NavLink
    to={item.to}
    className={() =>
      classNames('group flex items-center text-primary-light text-base  whitespace-nowrap hover:text-secondary-main')
    }
    onClick={onClickItem}
  >
    {item.name}
  </NavLink>
);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary-main">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-light hover:text-primary-light hover:bg-primary-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src={backgroundImage} alt="Workflow" />
                  <img className="hidden lg:block h-8 w-auto" src={backgroundImage} alt="Workflow" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {NAVIGATION.map((item) => (
                      <MenuItem item={item} key={item.name} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <>
                  {' '}
                  <img className="h-8 w-8 rounded-full" src={symbol} alt="" />
                  {/* Language Dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-primary-main flex text-md text-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-main focus:ring-secondary-main">
                        <>{t('Languages')}</>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <ol>
                          {Object.keys(LANGUAGES).map((language) => (
                            <li key={language}>
                              <button
                                key={language}
                                onClick={() => {
                                  i18n.changeLanguage(language);
                                  window.location.reload();
                                }}
                                className="bg-primary-light p-1 rounded-md text-primary-main hover:text-secondary-main"
                              >
                                <>{LANGUAGES[language].nativeName}</>
                              </button>
                            </li>
                          ))}
                        </ol>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
