"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Cloud, LogIn, UserPlus, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

type Tab = "login" | "cadastro";

export function AuthTabs() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error: err } = await authClient.signIn.email({
        email: loginEmail,
        password: loginPassword,
        callbackURL: "/app/inicio",
      });
      if (err) {
        setError(err.message ?? "E-mail ou senha inválidos.");
        return;
      }
      if (data) router.push("/app/inicio");
    } catch {
      setError("Erro ao entrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error: err } = await authClient.signUp.email({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        callbackURL: "/app/inicio",
      });
      if (err) {
        setError(err.message ?? "Erro ao criar conta.");
        return;
      }
      if (data) router.push("/app/inicio");
    } catch {
      setError("Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Link
        href="/"
        className="mb-8 flex items-center justify-center gap-3 text-slate-900 dark:text-white"
      >
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#137fec] text-white">
          <Cloud className="size-6" />
        </div>
        <span className="text-xl font-bold tracking-tight">PhotoCloud</span>
      </Link>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-[#15202b]">
        <div className="mb-6 flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => {
              setTab("login");
              setError(null);
            }}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-colors",
              tab === "login"
                ? "bg-white text-[#137fec] shadow dark:bg-slate-700 dark:text-blue-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            )}
          >
            <LogIn className="size-4" />
            Entrar
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("cadastro");
              setError(null);
            }}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-colors",
              tab === "cadastro"
                ? "bg-white text-[#137fec] shadow dark:bg-slate-700 dark:text-blue-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            )}
          >
            <UserPlus className="size-4" />
            Cadastro
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
            {error}
          </div>
        )}

        {tab === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                E-mail
              </label>
              <input
                id="login-email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:border-[#137fec] focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="login-password"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Senha
              </label>
              <input
                id="login-password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:border-[#137fec] focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#137fec] py-3 font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                "Entrar"
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleCadastro} className="space-y-4">
            <div>
              <label
                htmlFor="signup-name"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Nome
              </label>
              <input
                id="signup-name"
                type="text"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                required
                autoComplete="name"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:border-[#137fec] focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="signup-email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                E-mail
              </label>
              <input
                id="signup-email"
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:border-[#137fec] focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="signup-password"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Senha
              </label>
              <input
                id="signup-password"
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:border-[#137fec] focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                placeholder="Mínimo 8 caracteres"
              />
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Mínimo 8 caracteres
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#137fec] py-3 font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                "Criar conta"
              )}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Ao continuar, você concorda com nossos{" "}
          <Link
            href="/termos"
            className="text-[#137fec] hover:underline"
          >
            Termos
          </Link>{" "}
          e{" "}
          <Link
            href="/privacidade"
            className="text-[#137fec] hover:underline"
          >
            Privacidade
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
