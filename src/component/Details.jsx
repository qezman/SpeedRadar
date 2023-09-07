const Details = () => {
  return (
   <section className="px-10 text-white">
     <article className="px-6 border border-white rounded-lg">
      <section className="flex flex-col">
      <div className="flex flex-col justify-between text-sm md:text-lg lg:text-xl font-bold py-4">
        <div className="flex flex-col items-center">
        <h3>S/N</h3>
        <p>1</p>
        </div>

        <h3>ID</h3>
        <p>ID1</p>

        <h3>SPEED</h3>
        <p>108MPH</p>

        <h3>DATE</h3>
        <p>2023-03-04</p>

        <h3>TIME</h3>
        <p>05:27:23</p>

      </div>
      
      </section>
    </article>
   </section>
  )
}
export default Details