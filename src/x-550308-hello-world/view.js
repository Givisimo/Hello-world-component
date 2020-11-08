export default (state, { updateState }) => {
  const { bgColor } = state;

  return (
    <div className={`container ${bgColor} `}>
      <button
        on-click={() =>
          updateState({ bgColor: bgColor === 'light' ? 'dark' : 'light' })
        }
      >
        Click me!
      </button>
    </div>
  );
};
