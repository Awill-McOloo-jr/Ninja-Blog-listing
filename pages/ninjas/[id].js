export const getStaticPaths = async () => {

  const response = await fetch('https://jsonplaceholder.org/users')
  const data = await response.json()

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const response = await fetch('https://jsonplaceholder.org/users/' + id)
  const data = await response.json()

  return {
    props:{ ninja: data}
  }
}

function Details({ninja}) {
  return (
    <div>
      <h1>{ninja.firstname} {ninja.lastname}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p>
      <p>{ninja.address.street}</p>
    </div>
  )
}

export default Details