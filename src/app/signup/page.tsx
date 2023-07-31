"use client";
import Image from "next/image";
import Header from "@/components/header/Header";
import SignUpCover from "../../assets/cover-cadastro.jpg";

import { useRouter } from "next/navigation";
import {
  SignUpContainer,
  SignUpBox,
  SignUpForm,
  Title,
} from "../styles/pages/signup";
import Link from "next/link";
import { api } from "../lib/axios";
import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function SignUp() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const router = useRouter();

  async function signUp() {
    api
      .post("/user", {
        nome,
        email,
        senha,
        dataNascimento,
      })
      .then((response) => {
        toast.success(
          "Cadastro feito com sucesso! Redirencionando para o login",
          {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            theme: "colored",
            closeOnClick: false,
          }
        );
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      });
  }

  async function handleSignUp(event: MouseEvent) {
    event.preventDefault();
    if (!nome || !email || !confirm || !dataNascimento || !senha) {
      toast.error("Campos obrigatórios incompletos!", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        theme: "colored",
        closeOnClick: false,
      });
    }

    if (email !== confirm) {
      toast.error("Emails não coincidem!", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        theme: "colored",
        closeOnClick: false,
      });
    }

    if (
      email === confirm &&
      nome &&
      email &&
      confirm &&
      dataNascimento &&
      senha
    ) {
      await signUp();
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
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
                  <input
                    type="text"
                    id="nome"
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setNome(event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email">Insira um email</label>
                  <input
                    type="email"
                    id="email"
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setEmail(event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor="confirm">Confirme o email</label>
                  <input
                    type="email"
                    id="confirm"
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setConfirm(event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor="data_nascimento">Data de nascimento</label>
                  <input
                    type="date"
                    id="data_nascimento"
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setDataNascimento(event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor="senha">Insira uma senha</label>
                  <input
                    type="password"
                    id="senha"
                    onInput={(event: ChangeEvent<HTMLInputElement>) =>
                      setSenha(event.target.value)
                    }
                  />
                </div>
                <button onClick={(event) => handleSignUp(event)}>
                  Cadastrar
                </button>
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
