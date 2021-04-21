import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const _nav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },

  //daftar barang inventaris
  {
    _tag: "CSidebarNavItem",
    name: "Daftar Barang Inventaris",
    to: "/DaftarBarangInventaris",
    icon: <CIcon content={freeSet.cilStorage} style={{ marginRight: "12%" }} />,
  },

  // Inveksi
  {
    _tag: "CSidebarNavDropdown",
    name: "Inveksi",
    route: "/Inveksi",
    icon: (
      <CIcon
        content={freeSet.cilCalendarCheck}
        style={{ marginRight: "12%" }}
      />
    ),
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Acetylene & Oxygenn",
        to: "/Inveksi/AcetyleneOxygen",
      },
      {
        _tag: "CSidebarNavItem",
        name: "APD",
        to: "/Inveksi/Apd",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Workshop",
        to: "/Inveksi/Workshop",
      },
    ],
  },

  //persiapan barang inventaris
  {
    _tag: "CSidebarNavDropdown",
    name: "Persiapan Barang Inventaris",
    route: "/PersiapanBarangInventaris",
    icon: <CIcon content={freeSet.cilBasket} style={{ marginRight: "12%" }} />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Input Data Petugas",
        to: "/PersiapanBarangInventaris/InputDataPetugas",
      },
    ],
  },

  //rekap inveksi
  {
    _tag: "CSidebarNavItem",
    name: "Rekap Inveksi",
    to: "/RekapInveksi",
    icon: (
      <CIcon content={freeSet.cilListNumbered} style={{ marginRight: "12%" }} />
    ),
  },

  // Page
  {
    _tag: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Login",
        to: "/login",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register",
        to: "/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 404",
        to: "/404",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Error 500",
        to: "/500",
      },
    ],
  },
];

export default _nav;
