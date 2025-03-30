"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import type React from "react";

import Link from "~/components/Link";
import Icon from "~/components/Icon";
import ButtonRow from "~/components/ButtonRow";
import { Button, ButtonLink } from "~/components/Button";

import { navLinks } from "~/utils";

export default function Navbar() {
  return (
    <div className="z-50 flex h-24 w-full items-center justify-center border-b border-transparent bg-transparent px-6 py-3.5 duration-150 lg:px-20">
      <nav className="relative w-full">
        <div
          className="relative flex w-full max-w-screen-xl items-center justify-between"
          style={{ margin: "0 auto" }}
        >
          <Logo />

          <NavbarItemsDesktop />
          <NavbarItemsMobile />
        </div>
      </nav>
    </div>
  );
}

function Logo() {
  const router = useRouter();
  const navigateToBrandPath = (e: React.MouseEvent) => {
    if (e.button === 2) {
      e.preventDefault();
      router.push("/brand#download-logo");
    }
  };
  return (
    <div
      className="flex justify-start gap-2"
      onMouseUp={navigateToBrandPath}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="z-50 h-fit w-fit">
        <Link href="/" className="navbar__logo-link">
          <Image
            src="/gdvnps-logo-no-bg.svg"
            alt="GDVNPS's logo"
            title="Trang chủ"
            width={58}
            height={58}
          />
        </Link>
      </div>
    </div>
  );
}

function NavbarItemsDesktop() {
  return (
    <>
      <ul className="hidden shrink flex-row items-center gap-12 text-base lg:flex">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link href={navLink.href} variant="navigation">
              {navLink.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden shrink lg:flex">
        <div className="flex flex-wrap items-center gap-1">
          <a href="/discord" className="inline-block" title="Discord">
            <Icon icon="discord" size={28} />
          </a>
        </div>
      </div>
    </>
  );
}

function NavbarItemsMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuButtonHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <ButtonRow className="lg:hidden">
        <ButtonLink
          variant="outline"
          href="/discord"
          className="flex items-center gap-1.5 px-2 py-1"
        >
          <Icon icon="discord" size={37} />
          <span>
            <p>Discord</p>
          </span>
        </ButtonLink>
        <Button
          variant="outline"
          aria-expanded={openMenu ? "true" : "false"}
          aria-label="Menu button"
          className={`p-1 ${openMenu ? "bg-zinc-900/75" : "bg-zinc-900/20"}`}
          onClickFn={menuButtonHandler}
        >
          <Icon icon="menu" size={38} />
        </Button>
      </ButtonRow>

      {openMenu && (
        <motion.div
          className="absolute top-17 right-0 z-30 block w-fit rounded-xl border-2 border-gray-800/80 bg-zinc-900/10 px-8 py-6 shadow-xl backdrop-blur-lg lg:hidden"
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          exit={{ opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ul className="flex flex-col items-end gap-4">
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  href={navLink.href}
                  className="text-[1.17rem]"
                  variant="navigation"
                  onClickFn={menuButtonHandler}
                >
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
