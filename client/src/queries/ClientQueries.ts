import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export { GET_CLIENTS, ADD_CLIENT };
