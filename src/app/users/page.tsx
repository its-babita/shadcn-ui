import React from "react";
import { User, columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://65dd631ee7edadead7edcb75.mockapi.io/users");
  const data = await res.json();
  return data;
}

const page = async () => {
  const data = await getUsers();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default page;
