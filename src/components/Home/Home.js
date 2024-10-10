import React from "react";
import styles from "./Home.scss";
// function Home() {
//   return (
//     <>
//       <div className={styles.Home}>Home</div>
//     </>
//   );
// }
// export { Home };

class Home extends React.Component {
  render() {
    return <div className={styles}>Home</div>;
  }
}
export default Home;
