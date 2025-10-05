/*
 * Quantum Foam Latte
 * Copyright © 2025 Jennifer Worthington
 *
 * Dual License:
 * - Code: MIT License (see LICENSE file)
 * - Creative Content: CC BY-NC-ND 4.0
 *
 * https://quantumfoamlatte.ca
 */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".qfl-menu-toggle");
  const nav = document.querySelector(".qfl-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });
});
