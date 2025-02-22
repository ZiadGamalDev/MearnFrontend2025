import { of } from 'rxjs';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from '../../hero';

describe('Hero Service Integration Tests:', () => {
  let mockHttpClient: any;
  let heroService: HeroServiceForLab;
  let mockHeroes: Hero[];
  let mockUpdatedHero: Hero;

  beforeAll(() => {
    mockHttpClient = {
      get: jest.fn(),
      put: jest.fn(),
    };

    heroService = new HeroServiceForLab(mockHttpClient);

    mockHeroes = [
      { id: 7, name: 'Flash', strength: 300 },
      { id: 14, name: 'Zuko', strength: 180 },
      { id: 99, name: 'John Wick', strength: 500 },
    ];

    mockUpdatedHero = { id: 7, name: 'Flash', strength: 350 };

    mockHttpClient.get.mockReturnValue(of(mockHeroes));
    mockHttpClient.put.mockReturnValue(of(mockUpdatedHero));
  });

  it('should fetch heroes successfully', (done) => {
    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(mockHeroes);
      done();
    });
  });

  it('should update hero successfully', (done) => {
    heroService.updateHero(mockUpdatedHero).subscribe((response) => {
      expect(response).toEqual(mockUpdatedHero);
      done();
    });
  });
});
