import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { GET_PROJECTS } from "../queries/ProjectQueries";

export interface ClientProp {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface clientRowProps {
  client: ClientProp;
}

export default function ClientRow(props: clientRowProps) {
  const { client } = props;

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={(id) => deleteClient()}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
