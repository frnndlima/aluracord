function GlobalStyle() {
  return (
    <style global jsx>{`*
     {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: black;
    }

    body {
      font-family: sans-serif;
    }
    `}</style>
  );
}

function Title(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag} {
      color: red;
      font-size: 24px;
      font-weight: 600;
    }      
    `}</style>
    </>
  );
}

function HomePage() {
  return (
  <div>
    <GlobalStyle />
    <Title tag="h2">Boas vindas de volta!</Title>
    <h2>Discord - Alura Matrix</h2>
  </div>
  ) 
}

export default HomePage