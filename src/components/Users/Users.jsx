import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h5 className="text-2xl">The users {users.length}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        voluptate beatae, quam eveniet ullam voluptatem quod, deleniti tempora
        blanditiis est aliquam facere quidem earum aut dolorum dolor iste natus.
        Architecto!
      </p>
      <div className="grid grid-cols-3 gap-5 my-5">
        {users.map((user) => (
          <User key={user.id} user={user}>
            {" "}
          </User>
        ))}
      </div>
    </div>
  );
};

export default Users;
