import "./List.css";

export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <list key={activity.index}>
          {activity.name} <button>X-Men</button>
        </list>
      ))}
    </ul>
  );
}
