import { Button } from "@mui/joy";
import { useNavigate } from "react-router";

export const SessionsDone: React.FC<{
  teacherClass: string;
  date: string | undefined;
  sessionId: string | undefined;
}> = ({ teacherClass, sessionId , date}) => {
  const navigate = useNavigate();
  return (
    <tr>
      <th>{date}</th>
      <th>{teacherClass}</th>
      <th>
        <Button
          size="sm"
          onClick={() => navigate(`/teacher/subscriptions/${sessionId}`)}
        >
          Visualizza
        </Button>
      </th>
    </tr>
  );
};
