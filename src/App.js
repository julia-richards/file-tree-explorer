function App() {
  return (
    <div>
      <Folder name="Desktop" />
      <Folder name="Applications" />
    </div>
  );
}

const Folder = props => {
  return <h4>{props.name}</h4>;
};

export default App;
