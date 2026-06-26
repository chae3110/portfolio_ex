export default function Nav({ data, onChangeMode, id }) {
  return (
    <nav>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onChangeMode(d.id);
              }}
              className={id === d.id ? "active" : ""}
              aria-current={id === d.id ? true : false}
            >
              {d.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
