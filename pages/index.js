export default function Home({tratamientos}) {
  return (
    <div className="tratamientos">
      {tratamientos.map((tratamiento) => (
        <div key={tratamiento.id} className="tratamiento">{tratamiento.nombre_tratamiento}</div>
      ))}
    </div>
  );
}


export async function getStaticProps() {
  //get tratamientos from API
  const res = await fetch('http://localhost:1337/tratamientos');
  const tratamientos = await res.json();

  return {
    props: { tratamientos },
  }
}
