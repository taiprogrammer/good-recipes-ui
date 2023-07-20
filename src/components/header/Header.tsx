"use client";
import {
  HeaderComponent,
  HeaderContainer,
} from "@/app/styles/components/Header";
import Logo from "../../assets/logo-light.png";

import Link from "next/link";
import Image from "next/image";

import { Heart, Notepad, SignIn, UserGear, UserPlus } from "phosphor-react";

export default function Header() {
  const logged = localStorage.token ? true : false;
  return (
    <HeaderComponent>
      <HeaderContainer>
        <Link href={"/"}>
          <Image src={Logo} height={200} width={250} alt={""} />
        </Link>
        {!logged ? (
          <nav>
            <Link href={"/"}>
              <UserPlus />
              <span>Cadastre - se</span>
            </Link>
            <Link href={"/login"}>
              <SignIn />
              <span>Entrar</span>
            </Link>
          </nav>
        ) : (
          <nav>
            <Link href={"/"}>
              <Notepad />
              <span>Minhas receitas</span>
            </Link>
            <Link href={"/"}>
              <Heart />
              <span>Meus favoritos</span>
            </Link>
            <Link href={"/"}>
              <UserGear />
              <span>Minha conta</span>
            </Link>
          </nav>
        )}
      </HeaderContainer>
    </HeaderComponent>
  );
}
