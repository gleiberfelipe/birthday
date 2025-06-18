type CheckIn = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  createdAt: string;
};

type Props = {
  checkIns: CheckIn[];
};

import "./style.css";

export default function CheckInList({ checkIns }: Props) {
  return (
    <div className="listBox">
      <h2 className="title">
        Quem <span>ja </span>confirmou <span>presenca :</span>
      </h2>
      <ul className="list">
        {checkIns.map(({ id, firstName, lastName, createdAt }) => (
          <li key={id} className="listItem">
            <strong>
              {firstName} {lastName}
            </strong>{" "}
            – <em>{new Date(createdAt).toLocaleString()}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
