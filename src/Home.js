import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((store) => store.user.userName);

  return <div>User Name : {user}</div>;
};

export default Home;
