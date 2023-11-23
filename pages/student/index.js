import Head from 'next/head';
import styles from '../../styles/student.module.css';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      student: data,
    },
  };
};

const Student = ({ student }) => {
  // console.log(student);
  return (
    <>
      <Head>
        <title>ZORO | student list</title>
        <meta name="keywords" content="student-list" />
      </Head>
      <div>
        <h1>All Students</h1>

        {student.map((item) => (
          <div key={item.id}>
            <a className={styles.single}>
              <h3>{item.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Student;
