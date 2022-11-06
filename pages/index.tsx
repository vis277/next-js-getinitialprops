const User=({parsedResponse})=>{
  console.log("ln2",parsedResponse)
  return<>
  <h1>Hello form Home</h1>
  {parsedResponse.map((data)=>{
    return <div key={data.id}>
      <p>{data.name}</p>
    </div>
  })}
  </>
}

export default User

User.getInitialProps=async ()=>{
  const response=await fetch ('https://jsonplaceholder.typicode.com/users');
  const parsedResponse=await response.json();
  console.log(parsedResponse);
  return {parsedResponse:parsedResponse}
}