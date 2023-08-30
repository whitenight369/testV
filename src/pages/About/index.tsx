import { useEffect } from "react";
import { fetchData } from "../../apis";

const AboutPage: React.FC = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetchData({});
    console.log("res", res);
  };
  return <div>About页面</div>;
};

export default AboutPage;
