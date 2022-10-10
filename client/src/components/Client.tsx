import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CLIENTS } from "../queries/ClientQueries";
import ClientRow, { ClientProp } from "./ClientRow";
import Spinner from "./Spinner";

function Client() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;
  return (
    !loading &&
    !error && (
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client: ClientProp) => (
            <ClientRow client={client} id={client.id} key={client.id} />
          ))}
        </tbody>
      </table>
    )
  );
}

export default Client;
