import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

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
          <div className={styles["hero"]}>
            <h1>Lose weight and stay healthy</h1>
            <p>Our weight loss app helps you reach your goals and maintain a healthy lifestyle</p>
            <Link href="/tracker/add-budget">
                <button className={styles["primary-btn"]}>Get started</button>
            </Link>
          </div>
        </header>
        <section className={styles["secondary-bg"]}>
          <div className={styles["container"]}>
            <div className={styles["text-center"]}>What we do</div>
            <div className={styles["feature"]}>
              <Image
                src="/images/icon1.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Feature 1"
                className={styles["feature-icon"]}
              />
              <div className={styles["feature-content"]}>
                <h3>Track your progress</h3>
                <p>Keep track of your weight, measurements, and body fat percentage with our app</p>
              </div>
            </div>
            <div className={styles["feature"]}>
              <Image
                src="/images/icon2.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Feature 2"
                className={styles["feature-icon"]}
              />
              <div className={styles["feature-content"]}>
                <h3>Personalized meal plans</h3>
                <p>Get personalized meal plans based on your preferences and dietary restrictions</p>
              </div>
            </div>
            <div className={styles["feature"]}>
              <Image
                src="/images/community.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Feature 3"
                className={styles["feature-icon"]}
              />
              <div className={styles["feature-content"]}>
                <h3>Community support</h3>
                <p>Connect with a community of like-minded individuals for support and motivation</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["price-section"]}>
          <div className={styles["price-container"]}>
            <h2 className={styles["text-center"]}>Pricing</h2>
            <div className={styles["price-cards"]}>
              <div className={styles["price"]}>
                <h3>Basic</h3>
                <p>$9.99/month</p>

                <button className={styles["secondary-btn"]}>Get started</button>
              </div>
              <div className={styles["price"]}>
                <h3>Premium</h3>
                <p>$19.99/month</p>
                <button className={styles["secondary-btn"]}>Get started</button>
              </div>
              <div className={styles["price"]}>
                <h3>Ultimate</h3>
                <p>$29.99/month</p>
                <button className={styles["secondary-btn"]}>Get started</button>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles["secondary-bg footer"]}>
          <div className={styles["container"]}>
            <p className={styles["footer"]}>&copy; 2023 Weight Loss App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>

  )
}