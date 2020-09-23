import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('Debe crear el componente', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Cuando se envíe un arreglo y el filtro "all" debe retornar todos los elementos', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform([    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ],"all").length).toEqual(5);
  });

  it('Cuando se envíe un arreglo y el filtro "perro" debe retornar un arreglo de longitud 3 con solo las imágenes donde "brand":"perro" ', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform([    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ],"perro").length).toEqual(3);
  });

  it('Cuando se envié un arreglo y el filtro "gato" debe retornar un arreglo de longitud 2 con solo las imágenes donde "brand":"gato" ', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform([    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ],"gato").length).toEqual(2);
  });

  it('Cuando se envíe un arreglo y el filtro "gallina" debe retornar un arreglo de longitud 0, ya que "brand":"gallina" no existe dentro del arreglo ', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform([    
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ],"gallina").length).toEqual(0);
  });

  

  it('Cuando se envíe un arreglo sin el campo "brand" debe retornar un arreglo de longitud 0', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform([    
      { "id": 1, "tipo": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "tipo": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "tipo": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "tipo": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "tipo": "perro", "url": "assets/images/perro3.jpg" },
    ],"perro").length).toEqual(0);
  });
});
