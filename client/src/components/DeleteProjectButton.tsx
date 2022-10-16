import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/ProjectQueries";

export default function DeleteProjectButton({ projectId }: any) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button
        className="btn btn-danger m-2"
        onClick={() => deleteProject({ variables: { id: projectId } })}
      >
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
