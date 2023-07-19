import Header from "@/components/header/Header";
import Link from "next/link";
import { LoginContainer, LoginForm, WelcomeBox } from "../styles/pages/login";

export default function Login() {
  return (
    <>
      <Header />
      <main>
        <LoginContainer>
          <WelcomeBox>
            <div>
              <LoginForm>
                <h1>Bem vindo de volta!</h1>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div>
                  <label htmlFor="senha">Senha</label>
                  <input type="password" id="senha" />
                </div>
                <button>Entrar</button>
                <div className="divider"></div>
                <p>
                  Não possui uma conta?{" "}
                  <Link href={"/"}>Cadastre - se aqui.</Link>
                </p>
              </LoginForm>
            </div>
          </WelcomeBox>
        </LoginContainer>
      </main>
    </>
  );
}
