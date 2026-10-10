const Hello = () => {
  return <h1>hello</h1>;
};

const arr = [1,2,3];

<>
    {arr.map(()=>{
    return <Hello/>;
    })}
</>