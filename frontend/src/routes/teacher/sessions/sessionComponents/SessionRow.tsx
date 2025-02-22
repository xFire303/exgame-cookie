import { Button } from "@mui/joy";
import classes from "../sessions.module.css";
export const SessionRow: React.FC<{
  teacherClass: string;
  date: string | undefined;
}> = ({ teacherClass, date }) => {
  return (
    <tr>
      <th>{date}</th>
      <th>{teacherClass}</th>
      <th>
        <div className={classes.buttonContainer}>
          <Button size="sm">Inizia</Button>
          <Button size="sm">Modifica</Button>
        </div>
      </th>
    </tr>
  );
};
