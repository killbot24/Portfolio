import React, { Component } from 'react';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#Home', current: true },
  { name: 'About', href: '#AboutMe', current: false },
  { name: 'Skills', href: '#Skills', current: false },
  { name: 'Portfolio', href: '#Portfolio', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Navbar() {
/*
  {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}

                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm  font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    */
  return (

    <div className="flex items-center justify-between bg-gray-900 text-white py-4 px-6">
    <div className="flex items-center">
      <h1 className="text-2xl md:text-3xl font-bold">Thomas Burke</h1>
    </div>
    <div className="flex items-center space-x-6">
      <a href="https://github.com/killbot24">
        <img src="Github.svg" alt="Github" className="w-8 md:w-10" />
      </a>
      <a href="https://www.linkedin.com/in/thomas-burke-277a1b224/">
        <img src="linkedin.svg" alt="LinkedIn" className="w-8 md:w-10" />
      </a>
    </div>
  </div>
  

  );


}

export default Navbar; // Don�t forget to use export default!