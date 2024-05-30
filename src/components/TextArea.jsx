const TextArea = ({ background, padding }) => {
  return (
    <textarea
      name="Hola mundo"
      id="uno"
      style={{ background, padding }}
      rows={20}
      cols={20}
    />
  );
};

export default TextArea;
