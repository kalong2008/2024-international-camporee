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
  hyperLinkPreCamp,
  hyperLinkSanFran,
  hyperLinkRoadTrip,
  hyperLinkCamporee,
  hyperLinkPostCamp,
  hyperLinkCampMeeting
} from "@/public/hyperlink-data";

const timeoutDuration = 120;

export default function SideNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerRef_pre_camp = useRef<HTMLButtonElement>(null);
  const triggerRef_san_fran = useRef<HTMLButtonElement>(null);
  const triggerRef_camporee = useRef<HTMLButtonElement>(null);
  const triggerRef_road_trip = useRef<HTMLButtonElement>(null);
  const timeOutRef = useRef<NodeJS.Timeout>();

  const handleEnter_pre_camp = (isOpen: boolean) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    if (!isOpen) {
      triggerRef_pre_camp.current?.click();
    }
  };

  const handleLeave_pre_camp = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen &&
        document.activeElement === triggerRef_pre_camp.current &&
        triggerRef_pre_camp.current?.click();
    }, timeoutDuration);
  };

  const handleEnter_san_fran = (isOpen: boolean) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    if (!isOpen) {
      triggerRef_san_fran.current?.click();
    }
  };

  const handleLeave_san_fran = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen &&
        document.activeElement === triggerRef_san_fran.current &&
        triggerRef_san_fran.current?.click();
    }, timeoutDuration);
  };

  const handleEnter_road_trip = (isOpen: boolean) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    if (!isOpen) {
      triggerRef_road_trip.current?.click();
    }
  };

  const handleLeave_road_trip = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen &&
        document.activeElement === triggerRef_road_trip.current &&
        triggerRef_road_trip.current?.click();
    }, timeoutDuration);
  };

  const handleEnter_camporee = (isOpen: boolean) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    if (!isOpen) {
      triggerRef_camporee.current?.click();
    }
  };

  const handleLeave_camporee = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen &&
        document.activeElement === triggerRef_camporee.current &&
        triggerRef_camporee.current?.click();
    }, timeoutDuration);
  };

  

  return (
    <header>
      {/* start of the top header */}
      <nav
        aria-label="Global"
        className="mx-auto lg:w-4/5 flex items-center lg:justify-center justify-between p-4"
      >
        <div className="flex lg:flex-none">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">2024 Hong Kong International Pathfinder Camporee - Hong Kong-Macao Conference of Seventh-day Adventists</span>
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
          {/* start of the pre-camp */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter_pre_camp(open)}
                onMouseLeave={() => handleLeave_pre_camp(open)}
              >
                <PopoverButton
                  className="flex items-center gap-x-1 text-sm leading-6 text-gray-900"
                  ref={triggerRef_pre_camp} //ref={popoverButtonRef}</Popover>
                >
                  營前訓練
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    transition
                    className="absolute top-full z-10 mt-3 w-screen max-w-max overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-1">
                      {hyperLinkPreCamp.map((item) => (
                        <PopMenu linkItem={item} />
                      ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>

          {/* end of the pre-camp */}
          {/* start of the san-fran */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter_san_fran(open)}
                onMouseLeave={() => handleLeave_san_fran(open)}
              >
                <PopoverButton
                  className="flex items-center gap-x-1 text-sm leading-6 text-gray-900"
                  ref={triggerRef_san_fran} //ref={popoverButtonRef}</Popover>
                >
                  三藩市
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    transition
                    className="absolute top-full z-10 mt-3 w-screen max-w-max overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-1">
                      {hyperLinkSanFran.map((item) => (
                        <PopMenu linkItem={item} />
                      ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>

          {/* end of the sna-fran年相片 */}



          {/* start of the road-trip */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter_road_trip(open)}
                onMouseLeave={() => handleLeave_road_trip(open)}
              >
                <PopoverButton
                  className="flex items-center gap-x-1 text-sm leading-6 text-gray-900"
                  ref={triggerRef_road_trip} //ref={popoverButtonRef}</Popover>
                >
                  黃石公園
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    transition
                    className="absolute top-full z-10 mt-3 w-screen max-w-max overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                  <div className="p-1">
                  {hyperLinkRoadTrip.map((item) => (
                    <PopMenu linkItem={item} />
                  ))}
                </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>

          {/* end of the road-trip年相片 */}




          {/* start of the camporee */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter_camporee(open)}
                onMouseLeave={() => handleLeave_camporee(open)}
              >
                <PopoverButton
                  className="flex items-center gap-x-1 text-sm leading-6 text-gray-900"
                  ref={triggerRef_camporee} //ref={popoverButtonRef}</Popover>
                >
                  金波利營會
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    transition
                    className="absolute top-full z-10 mt-3 w-screen max-w-max overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                  <div className="p-1">
                  {hyperLinkCamporee.map((item) => (
                    <PopMenu linkItem={item} />
                  ))}
                </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>

          {/* end of the camporee年相片 */}






          
          {/* start of other */}
          {hyperLinkPostCamp.map((link) => (
            <Link href={link.href} className="text-sm leading-6 text-gray-900">
              {link.name}
            </Link>
          ))}
          {/* end of other */}

          {/* start of other */}
          {hyperLinkCampMeeting.map((link) => (
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
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">2024 Hong Kong International Pathfinder Camporee - Hong Kong-Macao Conference of Seventh-day Adventists</span>
              <img
                alt=""
                src="/logo.png"
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
                {/* start of the 營前訓練 */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                  營前訓練
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 flex flex-col items-start">
                    {hyperLinkPreCamp.map((item) => (
                      <DisclosureButton key={item.name}>
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* end of the 營前訓練 */}
                {/* start of the san-fran */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                    三藩市
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 flex flex-col items-start">
                    {hyperLinkSanFran.map((item) => (
                      <DisclosureButton key={item.name}>
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* end of the san-fran */}

                {/* start of the road-trip */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                    黃石公園
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 flex flex-col items-start">
                    {hyperLinkRoadTrip.map((item) => (
                      <DisclosureButton key={item.name}>
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* end of the camporee */}

                {/* start of the camporee */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50">
                    金波利營會
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 flex flex-col items-start">
                    {hyperLinkCamporee.map((item) => (
                      <DisclosureButton key={item.name}>
                        <Link
                          key={item.name}
                          href={item.href}
                          className="rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* end of the camporee */}
                
                {/* start of post-camp */}
                {hyperLinkPostCamp.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* end of post-camp */}
                {/* start of camp-meeting */}
                {hyperLinkCampMeeting.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* end of camp-meeting */}
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
