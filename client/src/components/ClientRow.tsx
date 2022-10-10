import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";

export interface ClientProp {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface clientRowProps {
  id?: any;
  client: ClientProp;
}

export default function ClientRow(props: clientRowProps) {
  const { client, id } = props;
  console.log("🚀 ~ file: ClientRow.tsx ~ line 19 ~ ClientRow ~ id", id);

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: id },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
