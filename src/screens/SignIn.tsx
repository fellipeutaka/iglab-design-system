import type { FormEvent } from "react";

import { Envelope, Lock } from "phosphor-react";

import { Button } from "@iglab-design-system/components/Button";
import { Checkbox } from "@iglab-design-system/components/Checkbox";
import { Heading } from "@iglab-design-system/components/Heading";
import { Text } from "@iglab-design-system/components/Text";
import * as TextField from "@iglab-design-system/components/TextField";
import { styled } from "@iglab-design-system/stitches";

const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  px: "$4",
});

const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$3",
  marginBottom: "$10",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginBottom: "$7",
  maxWidth: "400px",
  width: "100%",
});

const FormField = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

const CheckboxContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
  marginBottom: "$4",
});

const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$4",
});

export function SignIn() {
  async function handleSignIn(e: FormEvent) {
    e.preventDefault();
    alert("😊");
  }

  return (
    <Container>
      <Header>
        <img src="/react.svg" alt="React logo" height="120" />
        <Heading size="lg" asChild>
          <h1>Ignite Lab</h1>
        </Heading>
        <Text color="gray-400" asChild>
          <h2>Faça login e comece a trabalhar!</h2>
        </Text>
      </Header>
      <Form onSubmit={handleSignIn}>
        <FormField>
          <Text asChild>
            <label htmlFor="email">E-mail</label>
          </Text>
          <TextField.Root>
            <TextField.Icon>
              <Envelope />
            </TextField.Icon>
            <TextField.Input id="email" placeholder="johndoe@example.com" />
          </TextField.Root>
        </FormField>
        <FormField>
          <Text asChild>
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
            />
          </TextField.Root>
        </FormField>
        <FormField>
          <CheckboxContainer>
            <Checkbox id="checkbox" />
            <Text asChild size="sm">
              <label htmlFor="checkbox">Lembrar de mim</label>
            </Text>
          </CheckboxContainer>
        </FormField>
        <Button asChild>
          <button type="submit">Entrar na plataforma</button>
        </Button>
      </Form>
      <Footer>
        <Text
          asChild
          size="sm"
          color="gray-400"
          css={{
            outline: "none",
            transition: "color 0.3s ease",
            "&:hover, &:focus": { color: "$gray-100" },
          }}
        >
          <a href="/forgot">Esqueceu sua senha?</a>
        </Text>
        <Text
          asChild
          size="sm"
          color="gray-400"
          css={{
            outline: "none",
            transition: "color 0.3s ease",
            "&:hover, &:focus": { color: "$gray-100" },
          }}
        >
          <a href="/signUp">Não possui uma conta? Crie uma agora!</a>
        </Text>
      </Footer>
    </Container>
  );
}
