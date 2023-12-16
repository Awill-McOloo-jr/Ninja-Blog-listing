import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.org/users')
  const data = await response.json()

  return {
    props:{ninja: data }
  }


}

function ninjas({ ninja }) {
  return (
    <div>
        <h1>All Ninjas</h1>
        {ninja.map(ninja => (
          <Link href={'/ninjas/' + ninja.id}>
            <h3 className={styles.single}> {ninja.firstname} {ninja.lastname}</h3>
            
          </Link>
        ))}
    </div>
  )
}

export default ninjas