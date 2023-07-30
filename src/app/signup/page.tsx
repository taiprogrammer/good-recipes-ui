import Image from "next/image";
import Header from "@/components/header/Header";

import SignUpCover from "../../assets/cover-cadastro.jpg";

import {
  SignUpContainer,
  SignUpBox,
  SignUpForm,
  Title,
} from "../styles/pages/signup";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Header />
      <main>
        <SignUpContainer>
          <SignUpBox>
            <div>
              <Image src={SignUpCover} width={500} height={600} alt="" />
            </div>
            <div>
              <Title>Seja bem vindo!</Title>
              <SignUpForm>
                <div>
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" />
                </div>
                <div>
                  <label htmlFor="email">Insira um email</label>
                  <input type="email" id="email" />
                </div>
                <div>
                  <label htmlFor="confirm">Confirme o email</label>
                  <input type="email" id="confirm" />
                </div>
                <div>
                  <label htmlFor="data_nascimento">Data de nascimento</label>
                  <input type="date" id="data_nascimento" />
                </div>
                <div>
                  <label htmlFor="senha">Insira uma senha</label>
                  <input type="password" id="senha" />
                </div>
                <button>Cadastrar</button>
                <div className="divider"></div>
                <p>
                  Possui uma conta? <Link href={"/login"}>Faça login.</Link>
                </p>
              </SignUpForm>
            </div>
          </SignUpBox>
        </SignUpContainer>
      </main>
    </>
  );
}
