import Card from "../components/Card"

const HomePage = () => {
  return (
    <main className='main'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum exercitationem nobis dolorum impedit omnis molestias odit, sunt similique voluptatem unde mollitia animi. Eaque aliquam cum harum temporibus molestiae hic placeat cumque ab perspiciatis explicabo non corrupti quos exercitationem, earum rerum voluptate magnam dicta? Voluptates, libero quo. Doloribus modi voluptatem commodi ut, consequuntur quidem blanditiis consequatur accusantium rerum optio libero earum ratione debitis perferendis asperiores harum rem totam non laboriosam animi. Earum quaerat rem nostrum alias ea accusantium tempora magnam, in molestias maiores modi nesciunt enim voluptatem qui! Obcaecati unde aliquid autem maxime non deserunt suscipit animi facere repellendus. Officiis ullam nobis cupiditate quisquam odio rerum quod. Pariatur rerum vel natus quae explicabo ullam commodi provident saepe a ipsam deleniti nesciunt inventore exercitationem velit, quam autem cupiditate architecto. At animi totam provident fuga consectetur officiis cum pariatur incidunt, nemo voluptatum a nisi facere explicabo voluptates itaque laudantium praesentium corporis? Labore natus perferendis libero nesciunt, aliquid molestias, iure eum beatae blanditiis doloremque sunt temporibus, expedita veniam minus est consequuntur cupiditate. Pariatur atque voluptate vitae harum earum rem? Eveniet, architecto. Laudantium, ad? Quaerat, rem modi ut laudantium eligendi cum veritatis minima beatae sapiente! Reiciendis incidunt ab possimus ipsa. Veritatis expedita aliquid a!</p>
      <Card
        imagen="../assets/bike1.png"
        titulo="Bicicleta epica"
        precio="69.999"
        descripcion="Esta bici es alta bici amigo, tenes que probarla"
      />
      <Card
        imagen="../assets/bike1.png"
        titulo="Bici Toni kros"
        precio="9.999"
        descripcion="La bici que usa toni kros para ir a jugar al fulbol"
      />
    </main>
  )
}

export default HomePage