"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";

import Footer from "@/components/footer/Footer";
import LoginCover from "../../assets/cover-login.jpg";

import { api } from "../lib/axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { LoginContainer, LoginForm, WelcomeBox } from "../styles/pages/login";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const router = useRouter();
  const buttonRef = useRef();

  async function handleLogin({ email, senha }: Credentials, event: MouseEvent) {
    event.preventDefault();
    if (!email || !senha) {
      toast.error("Campos obrigatórios incompletos!", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        theme: "colored",
        closeOnClick: false,
      });
    } else {
      api
        .post("/user/login", { email, senha })
        .then((response) => {
          const token = response.data.token;
          buttonRef.current.innerHTML = "Redirecionando...";
          localStorage.token = JSON.stringify(token);
          setTimeout(() => {
            router.push("/");
          }, 1500);
        })
        .catch((error) => {
          if (error) {
            toast.error("Usuário e/ou senha incorretos!", {
              position: "top-right",
              autoClose: 5000,
              pauseOnHover: true,
              theme: "colored",
              closeOnClick: false,
            });
          }
        });
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <main>
        <LoginContainer>
          <WelcomeBox>
            <div>
              <LoginForm>
                <h1>Bem vindo de volta!</h1>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setEmail(event.target.value)
                    }
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label htmlFor="senha">Senha</label>
                  <input
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setSenha(event.target.value)
                    }
                    type="password"
                    id="senha"
                  />
                </div>
                <button
                  onClick={(event) => handleLogin({ email, senha }, event)}
                  ref={buttonRef}
                >
                  Entrar
                </button>
                <div className="divider"></div>
                <p>
                  Não possui uma conta?{" "}
                  <Link href={"/"}>Cadastre - se aqui.</Link>
                </p>
              </LoginForm>
            </div>
            <div>
              <Image src={LoginCover} width={450} height={600} alt="" />
            </div>
          </WelcomeBox>
        </LoginContainer>
      </main>
      <Footer />
    </>
  );
}
