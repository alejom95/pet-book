import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

xdescribe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('cuando se llame al metodo getImages() debe retornar todas las imágenes, un arreglo de 5 posiciones', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('cuando se quiera buscar una imágen por su id debe retornar la imagen si existe', () => {
      let imagene = service.getImage(1);
      expect(imagene.brand).toEqual('perro');
    });

    it('cuando se quiera buscar una imagen por un id que NO existe debe retornar indefinido ', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });
  });
});
