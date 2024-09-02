"use client";

import { Fragment, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  useClose,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import {
  preCampLink,
  camporeeLink,
  roadTripLink,
  sanLink
} from "@/public/hyperlink-data";


export default function SideNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  return (
    <header>
      {/* start of the top header */}
      <nav
        aria-label="Global"
        className="mx-auto lg:w-4/5 flex items-center lg:justify-center justify-between px-4 pt-4"
      >
        <div className="flex lg:flex-none">
          <Link href="/#" className="-m-1.5 p-1.5">
            <span className="sr-only">Tuen Mun Pathfinder</span>
            <img
              alt=""
              src="/logo.png"
              className="h-8 lg:h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6 lg:pl-6">
          
          {/* start of other */}
          {preCampLink.map((link) => (
            <Link href={link.href} className="text-sm leading-6 text-gray-900">
              {link.name}
            </Link>
          ))}
          {/* end of other */}

          {/* start of other */}
          {sanLink.map((link) => (
            <Link href={link.href} className="text-sm leading-6 text-gray-900">
              {link.name}
            </Link>
          ))}
          {/* end of other */}

          {/* start of other */}
          {roadTripLink.map((link) => (
            <Link href={link.href} className="text-sm leading-6 text-gray-900">
              {link.name}
            </Link>
          ))}
          {/* end of other */}

          {/* start of other */}
          {camporeeLink.map((link) => (
            <Link href={link.href} className="text-sm leading-6 text-gray-900">
              {link.name}
            </Link>
          ))}
          {/* end of other */}

          

          
        </PopoverGroup>
      </nav>
      {/* end of the top header */}
      {/* start of the burger menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden transition duration-300 ease-out data-[closed]:opacity-0"
        transition
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="logo.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                {/* start of other */}
                {preCampLink.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* end of other */}

                {/* start of other */}
                {sanLink.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* end of other */}

                

                {/* start of other */}
                {roadTripLink.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* end of other */}

                {/* start of other */}
                {camporeeLink.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* end of other */}

                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* end of the burger menu */}
    </header>
  );
}

export function PopMenu({ linkItem }: { linkItem: any }) {
  let close = useClose();

  return (
    <div
      key={linkItem.name}
      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
    >
      <div className="flex-auto">
        <Link
          href={linkItem.href}
          className="block text-gray-900"
          onClick={() => {
            close();
          }}
        >
          {linkItem.name}
        </Link>
      </div>
    </div>
  );
}

export function MultiPopMenu({ linkItem }: { linkItem: any }) {
  let close = useClose();

  return (
    <div
      key={linkItem.name}
      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
    >
      <div className="flex-auto">
        <Link
          href={linkItem.href}
          className="block text-gray-900"
          onClick={() => {
            close();
          }}
        >
          {linkItem.name}
        </Link>
      </div>
    </div>
  );
}
