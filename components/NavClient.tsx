"use client";

import { useEffect } from "react";

export function NavClient() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const toggle = document.querySelector<HTMLButtonElement>(".nav__toggle");
    const mobileMenu = document.querySelector<HTMLElement>(".nav__mobile");

    function onScroll() {
      if (!nav) return;
      if (window.scrollY > 20) {
        nav.classList.add("nav--scrolled");
      } else {
        nav.classList.remove("nav--scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("is-open");
        if (isOpen) {
          mobileMenu.classList.remove("is-open");
          mobileMenu.setAttribute("hidden", "");
          toggle.setAttribute("aria-expanded", "false");
        } else {
          mobileMenu.classList.add("is-open");
          mobileMenu.removeAttribute("hidden");
          toggle.setAttribute("aria-expanded", "true");
        }
      });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("is-open");
          mobileMenu.setAttribute("hidden", "");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
