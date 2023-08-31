import { useEffect } from "react";
import { fetchData } from "@/apis";
import styles from "./index.module.less";

const AboutPage: React.FC = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetchData({});
    console.log("res", res);
  };
  return <div className={styles.about}>About页面</div>;
};

export default AboutPage;
