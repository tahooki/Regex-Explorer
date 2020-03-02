import { Test, TestingModule } from '@nestjs/testing';
import { TempController } from './temp.controller';

describe('Temp Controller', () => {
  let controller: TempController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TempController],
    }).compile();

    controller = module.get<TempController>(TempController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
