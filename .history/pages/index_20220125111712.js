function Title(props) {
  return (
    <>
      <h1>{props.children}</h1>
      <style jsx>{`
      h1 {
      color: red;
    }      
    `}</style>
    </>
  );
}

function HomePage() {
  return (
  <div>
    <h1>Boas vindas de volta!</h1>
    <h2>Discord - Alura Matrix</h2>
  </div>
  ) 
}

export default HomePage