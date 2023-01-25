import Score from "./Score";
const Students = (props) => {
  return ( 
    <>
    <div>
        {props.students.map((student) => (
          <div key={student.id}>
            <p>Name: {student.name}</p>
            <p>Bio: {student.bio}</p>
            <Score score={student.scores}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Students;