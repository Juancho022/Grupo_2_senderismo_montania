'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('products', [
      {
        name: 'Buzo de algodón',
        categories_id: 1,
        timestamp: new Date(),
        description: 'Este buzo está diseñado para mantenerte cómodo en diversas condiciones climáticas. Su suave tejido interior te mantiene abrigado en días fríos, mientras que su transpirabilidad permite una ventilación adecuada en climas más cálidos. Cuenta con una capucha que se ajusta a la perfección y se adapta a tus necesidades. Protégete del sol, el viento o la lluvia ligera, y si no la necesitas, simplemente ajústala o quítala según prefieras. El amplio bolsillo canguro en la parte delantera te permite llevar tus pertenencias esenciales, como mapas, botellas de agua o snacks, al alcance de tu mano.',
        //sizes_id: ,
        img: '1sudadera.webp'
      },
      {
        name: 'Gorro de lana',
        categories_id: 2,
        timestamp: new Date(),
        description: 'Cuando te aventuras en terrenos escarpados y condiciones impredecibles, necesitas equipo confiable que te mantenga cómodo y protegido. Nuestro Gorro de Lana de Trekking es la elección perfecta para los entusiastas del aire libre que buscan un compañero resistente y cálido para sus aventuras.',
        //sizes_id: ,
        img: '2gorra.jpg'
      },
      {
        name: 'Campera impermeable',
        categories_id: 1,
        timestamp: new Date(),
        description: 'Esta campera está diseñada para retener y distribuir el calor de manera eficiente, manteniéndote cómoda y abrigada en condiciones frías. El aislamiento térmico de alta calidad te protege del frío extremo y te permite disfrutar de tu trekking al máximo. A pesar de su impresionante capacidad de retención de calor, nuestra campera es sorprendentemente liviana y compacta. Esto la convierte en una elección ideal para llevar en tu mochila, ya que no añade peso innecesario.',
        //sizes_id: ,
        img: '3campera-impermeable.jpg'
      },
      {
        name: 'Conjunto deportivo',
        categories_id: 2,
        timestamp: new Date(),
        description: 'Cuando te aventuras en las rutas de trekking y senderismo, necesitas ropa que ofrezca la combinación perfecta de comodidad, versatilidad y estilo. Nuestro Conjunto Deportivo de Algodón es la elección ideal para quienes buscan un look casual y cómodo, sin sacrificar la funcionalidad en sus escapadas al aire libre.',
        //sizes_id: ,
        img: '4conjunto-hombre.jpg'
      },
      {
        name: 'Remera Térmica',
        categories_id: 1,
        timestamp: new Date(),
        description: 'Cuando emprendes travesías de trekking y senderismo, necesitas una prenda que combine comodidad, calidez y funcionalidad. Nuestra Remera Térmica está diseñada para mantener tu cuerpo a la temperatura adecuada en cualquier aventura al aire libre. Utiliza tecnología de aislamiento avanzada para atrapar el calor corporal y mantenerlo cerca de tu piel, proporcionando una sensación de calidez y confort en condiciones frías',
        //sizes_id: ,
        img: '5remera-termica.jpg'
      },
      {
        name: 'Gorra',
        categories_id: 3,
        timestamp: new Date(),
        description: 'La gorra está equipada con una visera ancha que protege tu rostro y ojos de los rayos solares dañinos. Te permite disfrutar del aire libre sin preocuparte por las quemaduras solares. El diseño de esta gorra incorpora paneles transpirables que permiten que el aire fluya, manteniendo tu cabeza fresca y seca en los días más calurosos. El cierre ajustable garantiza un ajuste perfecto a cualquier tamaño de cabeza, lo que evita que la gorra se caiga o se sienta incómoda durante tus caminatas.',
        //sizes_id: ,
        img: '6gorra.jpg'
      },
      {
        name: 'Botella térmica',
        categories_id: 3,
        timestamp: new Date(),
        description: 'La botella está diseñada con tecnología de aislamiento de doble pared que mantiene las bebidas frías hasta por 24 horas y calientes hasta por 12 horas. Ideal para cualquier clima y estación. Fabricada con acero inoxidable de alta calidad, esta botella es resistente a golpes y caídas, perfecta para las rutas más exigentes. Además, es libre de BPA y materiales tóxicos, garantizando la seguridad de tus líquidos. Su diseño compacto cabe en la mayoría de los portavasos y bolsillos de mochila, lo que la hace perfecta para llevar contigo en tus travesías sin ocupar mucho espacio. La tapa hermética evita derrames y fugas, y su boquilla de fácil acceso te permite beber cómodamente mientras estás en movimiento. Disponible en una variedad de colores y diseños que se adaptan a tu estilo y personalidad, para que puedas llevar tu botella con orgullo',
        //sizes_id: ,
        img: '7botella.jpg'
      },
      {
        name: 'Calza',
        categories_id: 2,
        timestamp: new Date(),
        description: 'Calza ideal para situaciones en las que se necesita mantener las piernas secas en climas húmedos o en actividades al aire libre donde puedas estar expuesto a la lluvia',
        //sizes_id: ,
        img: '8calza-senderismo.jpg'
      },
      {
        name: 'Linterna recargable',
        categories_id: 3,
        timestamp: new Date(),
        description: 'Nuestra linterna utiliza tecnología LED de alta potencia que emite una luz brillante y nítida, proporcionando una visión clara en cualquier entorno. La batería recargable de larga duración asegura que tengas luz durante toda tu expedición. Recargable y Sostenible: Olvídate de gastar dinero en baterías desechables. Esta linterna es recargable, lo que la hace respetuosa con el medio ambiente y económicamente eficiente. Simplemente conéctala a una fuente de energía y estará lista para tu próxima aventura.',
        //sizes_id: ,
        img: '10linterna.jpg'
      },
      {
        name: 'Botas urbanas',
        categories_id: 4,
        timestamp: new Date(),
        description: 'Estas botas son el equilibrio perfecto entre estilo y funcionalidad. Diseñadas para ofrecer un ajuste preciso, tracción en superficies variadas y comodidad duradera, estas botas son ideales para enfrentar los desafíos de la vida en la ciudad.',
        //sizes_id: ,
        img: 'shoes (0).png'
      },
      {
        name: 'Botas',
        categories_id: 4,
        timestamp: new Date(),
        description: 'Botas diseñadas para proporcionar un ajuste preciso, tracción en superficies rocosas y comodidad durante largas jornadas en la montaña',
        //sizes_id: ,
        img: 'shoes (1).png'
      },
      {
        name: 'Botines',
        categories_id: 4,
        timestamp: new Date(),
        description: 'Botas diseñadas para proporcionar un ajuste preciso, tracción en superficies rocosas y comodidad durante largas jornadas en la montaña',
        //sizes_id: ,
        img: 'shoes (2).png'
      },
      {
        name: 'Botines para nieve',
        categories_id: 4,
        timestamp: new Date(),
        description: 'Son la elección perfecta para aventureros que desean enfrentar las condiciones más frías y desafiantes de la montaña. Las mismas están diseñadas para proporcionar un ajuste preciso, una tracción excepcional en superficies resbaladizas y, lo más importante, una comodidad insuperable durante largas jornadas en la montaña, incluso en climas extremos',
        //sizes_id: ,
        img: 'shoes (3).png'
      },
      {
        name: 'Mochila Peak',
        categories_id: 3,
        timestamp: new Date(),
        description: 'Está diseñada con múltiples compartimentos y bolsillos para organizar eficazmente el equipo, con materiales resistentes al agua y abrasión para protegerlo de las inclemencias del tiempo y el desgaste. Su sistema de suspensión ajustable incluye correas para los hombros acolchadas, un cinturón lumbar y un panel trasero transpirable para una distribución equitativa del peso y comodidad.',
        //sizes_id: ,
        img: 'backpack.png'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
