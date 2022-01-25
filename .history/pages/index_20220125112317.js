function Title(props) {
  return (
    <>
      <h1>{props.children}</h1>
      <style jsx>{`
      h1 {
      color: red;
      font-size: 24px;
      font-we
    }      
    `}</style>
    </>
  );
}

function HomePage() {
  return (
  <div>
    <Title>Boas vindas de volta!</Title>
    <h2>Discord - Alura Matrix</h2>
  </div>
  ) 
}

export default HomePage