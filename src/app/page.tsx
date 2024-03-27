"use client"
import Select from "@/components/Select";
import Image from "next/image";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
    <main className="flex min-h-screen flex-col p-10 gap-2 items-center">
      <Select />
    </main>
    </ApolloProvider>
  );
}
