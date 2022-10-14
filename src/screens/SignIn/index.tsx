import { FormEvent, useRef, useState } from "react";

import { Envelope, Lock } from "phosphor-react";

import { Button } from "@iglab-design-system/components/Button";
import { Checkbox } from "@iglab-design-system/components/Checkbox";
import { Heading } from "@iglab-design-system/components/Heading";
import { React } from "@iglab-design-system/components/Icons/React";
import { Text } from "@iglab-design-system/components/Text";
import * as TextField from "@iglab-design-system/components/TextField";

import * as CSS from "./styles";

export function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();
    if (!emailRef.current?.value.trim()) {
      emailRef.current?.focus();
      alert("E-mail é obrigatório!");
    } else if (!passwordRef.current?.value.trim()) {
      passwordRef.current?.focus();
      alert("Senha é obrigatória!");
    } else {
      setIsLoading(true);
      try {
        await fetch("/api/sessions", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        });
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setIsUserSignedIn(true);
          setIsLoading(false);
        }, 1500);
      }
    }
  }

  return (
    <main className={CSS.Container({})}>
      <header className={CSS.Header({})}>
        <React aria-label="React logo" />
        <Heading size="lg" asChild>
          <h1>Ignite Lab</h1>
        </Heading>
        <Text color="gray-400" asChild>
          <h2>Faça login e comece a trabalhar!</h2>
        </Text>
        {isUserSignedIn && (
          <Text color="gray-400" asChild>
            <h3>Logado!</h3>
          </Text>
        )}
      </header>
      <form className={CSS.Form({})} onSubmit={handleSignIn}>
        <div className={CSS.FormField({})}>
          <Text
            asChild
            css={{
              fontWeight: "600",
              userSelect: "none",
              width: "max-content",
            }}
          >
            <label htmlFor="email">E-mail</label>
          </Text>
          <TextField.Root>
            <TextField.Icon>
              <Envelope />
            </TextField.Icon>
            <TextField.Input
              id="email"
              placeholder="johndoe@example.com"
              ref={emailRef}
            />
          </TextField.Root>
        </div>
        <div className={CSS.FormField({})}>
          <Text
            asChild
            css={{
              fontWeight: "600",
              userSelect: "none",
              width: "max-content",
            }}
          >
            <label htmlFor="password">Senha</label>
          </Text>
          <TextField.Root>
            <TextField.Icon>
              <Lock />
            </TextField.Icon>
            <TextField.Input
              id="password"
              type="password"
              placeholder="*************"
              ref={passwordRef}
            />
          </TextField.Root>
        </div>
        <div className={CSS.FormField({})}>
          <div className={CSS.CheckboxContainer({})}>
            <Checkbox id="checkbox" />
            <Text
              asChild
              size="sm"
              color="gray-200"
              css={{ userSelect: "none" }}
            >
              <label htmlFor="checkbox">Lembrar de mim</label>
            </Text>
          </div>
        </div>
        <Button type="submit" isLoading={isLoading}>
          Entrar na plataforma
        </Button>
      </form>
      <footer className={CSS.Footer({})}>
        <Text asChild size="sm" color="gray-400">
          <a href="/forgot">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm" color="gray-400">
          <a href="/signUp">Não possui uma conta? Crie uma agora!</a>
        </Text>
      </footer>
    </main>
  );
}
