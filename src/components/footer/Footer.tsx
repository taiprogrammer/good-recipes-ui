import {
  FooterContent,
  FooterWrapper,
  Wrapper,
} from "@/app/styles/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  AppStoreLogo,
  FacebookLogo,
  GooglePlayLogo,
  InstagramLogo,
  PinterestLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import Logo from "../../assets/logo-dark-footer.png";

export default function Footer() {
  return (
    <FooterWrapper>
      <Wrapper>
        <FooterContent>
          <div>
            <h1>Categorias</h1>
            <section>
              <p>
                <Link href={"/"}>Sobremesas</Link>
              </p>
              <p>
                <Link href={"/"}>Carnes</Link>
              </p>
              <p>
                <Link href={"/"}>Massas</Link>
              </p>
              <p>
                <Link href={"/"}>Saladas e molhos</Link>
              </p>
              <p>
                <Link href={"/"}>Veganos</Link>
              </p>
            </section>
          </div>
          <div>
            <h1>Sobre</h1>
            <section>
              <p>
                <Link href={"/"}>Quem somos</Link>
              </p>
              <p>
                <Link href={"/"}>Política de privacidade</Link>
              </p>
              <p>
                <Link href={"/"}>Termos de uso</Link>
              </p>
              <p>
                <Link href={"/"}>Contato</Link>
              </p>
            </section>
          </div>
          <div>
            <h1>Disponível</h1>
            <section>
              <p>
                <AppStoreLogo weight="fill" />
                <Link href={"/"}>App Store</Link>
              </p>
              <p>
                <GooglePlayLogo weight="fill" />
                <Link href={"/"}>Google Play</Link>
              </p>
              <p>
                <InstagramLogo weight="fill" />
                <TwitterLogo weight="fill" />
                <FacebookLogo weight="fill" />
                <PinterestLogo weight="fill" />
                <YoutubeLogo weight="fill" />
              </p>
            </section>
            <Image src={Logo} height={80} alt="Logo Good Recipes" />
          </div>
        </FooterContent>
      </Wrapper>
    </FooterWrapper>
  );
}
