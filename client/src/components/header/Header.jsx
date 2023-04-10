import React from "react";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Input } from "antd";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2x1 font-bold md:text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="medium"
            placeholder="Ürün Ara"
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]:"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link
            to={"/"}
            className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <HomeOutlined className="md:text-2xl text-x1" />
            <span className="md:text-xs text-[10px]">Anasayfa</span>
          </Link>
          <Badge count={1} offset={[0, 6]} className="md:flex hidden">
            <Link
              to={"/cart"}
              className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
            >
              <ShoppingCartOutlined className="md:text-2xl text-x1" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          <Link
            to={"/bills"}
            className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <CopyOutlined className="md:text-2xl text-x1" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>
          <Link
            to={"/customers"}
            className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <UserOutlined className="md:text-2xl text-x1" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>
          <Link
            to={"/statistic"}
            className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <BarChartOutlined className="md:text-2xl text-x1" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </Link>
          <Link
            to={"/"}
            className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <LogoutOutlined className="md:text-2xl text-x1" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={1} offset={[0, 6]} className="md:hidden flex">
          <a
            href={"/"}
            className="menu-links flex flex-col hover:text-[#40a9ff] transition-all"
          >
            <ShoppingCartOutlined className="md:text-2xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </a>
        </Badge>
      </header>
    </div>
  );
};
export default Header;
