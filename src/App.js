function App() {
  return (
    <div>
      <Folder name="Desktop">
        <File name="Dogs.jpg" />
        <File name="Cats.jpg" />
      </Folder>
      <Folder name="Applications" />
    </div>
  );
}

const Folder = props => {
  return (
    <div style={{ border: "2px solid pink", margin: "5px" }}>
      {props.name}
      <div style={{ marginLeft: "17px" }}>{props.children}</div>
    </div>
  );
};

const File = props => {
  return <div>{props.name}</div>;
};
export default App;
