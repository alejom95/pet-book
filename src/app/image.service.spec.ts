import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  describe('getImages', () => {
    it('cuando se llame el metodo, entonces debe retornar todas (5) imágenes', () => {
      
      let resp = service.getImages();

      expect(resp.length).toEqual(5);
    }); 

    describe('getImage', () => {
      it('cuando se envíe 3 (que está dentro de la lista) entonces debe retornar este elemento', () => {
        const id = 3;
        let resp = service.getImage(id);
        expect(resp.brand).toBe("gato");
        expect(resp.url).toBe("assets/images/gato1.jpg");
      });
    });

    describe('getImage', () => {
      it('cuando se envíe 7 (que NO está dentro de la lista) entonces debe retornar indefinido', () => {
        const id = 7;
        let resp = service.getImage(id);
        expect(resp).toBeUndefined();
      });
    });

    
  });


});
