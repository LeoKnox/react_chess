import { getCharacter } from "../../../helper.js";
import "./Files.css";

export default Files = ({ files }) => {
  return (
    <div className="files">
      {files.map((file) => (
        <span key={file}>{getCharacter(file)}</span>
      ))}
    </div>
  );
};
