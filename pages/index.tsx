import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
    <div className={styles['super-container']}>
      <header className={styles["primary-bg"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-ul"]}>
            <li className={styles["nav-li"]}><a className={styles["nav-a"]} href="#">Home</a></li>
            <li className={styles["nav-li"]}><a className={styles["nav-a"]} href="#">Features</a></li>
            <li className={styles["nav-li"]}><a className={styles["nav-a"]} href="#">Pricing</a></li>
            <li className={styles["nav-li"]}><a className={styles["nav-a"]} href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Lose weight and stay healthy</h1>
          <p>Our weight loss app helps you reach your goals and maintain a healthy lifestyle</p>
          <button className={styles["primary-btn"]}>Get started</button>
        </div>
      </header>
      <section className="secondary-bg">
        <div className="container">
          <h2 className="text-center">Our features</h2>
          <div className="feature">
            <img src="icon1.png" alt="Feature 1" className={styles["feature-icon"]} />
            <div className="feature-content">
              <h3>Track your progress</h3>
              <p>Keep track of your weight, measurements, and body fat percentage with our app</p>
            </div>
          </div>
          <div className={styles["feature"]}>
            <img src="icon2.png" alt="Feature 2" className="feature-icon" />
            <div className="feature-content">
              <h3>Personalized meal plans</h3>
              <p>Get personalized meal plans based on your preferences and dietary restrictions</p>
            </div>
          </div>
          <div className={styles["feature"]}>
            <img src="icon3.png" alt="Feature 3" className="feature-icon" />
            <div className="feature-content">
              <h3>Community support</h3>
              <p>Connect with a community of like-minded individuals for support and motivation</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["primary-bg"]}>
        <div className={styles["container"]}>
          <h2 className={styles["text-center"]}>Pricing</h2>
          <div className={styles["price"]}>
            <h3>Basic</h3>
            <p>$9.99/month</p>
            <button className={styles["secondary-btn"]}>Get started</button>
          </div>
          <div className="price">
            <h3>Premium</h3>
            <p>$19.99/month</p>
            <button className={styles["secondary-btn"]}>Get started</button>
          </div>
          <div className="price">
            <h3>Ultimate</h3>
            <p>$29.99/month</p>
            <button className={styles["secondary-btn"]}>Get started</button>
          </div>
        </div>
      </section>
      <footer className={styles["secondary-bg footer"]}>
        <div className={styles["container"]}>
          <p className={styles["text-center"]}>&copy; 2023 Weight Loss App. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>

  )
}