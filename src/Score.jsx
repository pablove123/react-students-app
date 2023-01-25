const Score = (props) => {
  return ( 
    <>
    <div>
        {props.score.map((score) => (
          <div key={score.id}>
            <li>Score: {score.score} Date: {score.date}</li>
          </div>
        ))}
      </div>
    </>
   );
}

export default Score;