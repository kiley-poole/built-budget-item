import { Test, TestingModule } from '@nestjs/testing';
import { BudgetItemsController } from './budget-items.controller';
import { BudgetItemsService } from './budget-items.service';

describe('BudgetItemsController', () => {
  let controller: BudgetItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetItemsController],
      providers: [
        BudgetItemsService,
        {
          provide: BudgetItemsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              { 
                description: 'new desc',
                vendor: 'new vendor',
                dueDate: 2021-12-29,
                paymentAmount: 100,
                category: 'new category',
                overDue: false
              },
              { 
                description: 'new desc two',
                vendor: 'new vendor two',
                dueDate: 2021-12-31,
                paymentAmount: 100,
                category: 'new category two',
                overDue: false
              }
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<BudgetItemsController>(BudgetItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getBudgetItems', () => {
    it('should return array of budget items', async () => {
      await expect(controller.findAll()).resolves.toEqual([
        { 
          description: 'new desc',
          vendor: 'new vendor',
          dueDate: 2021-12-29,
          paymentAmount: 100,
          category: 'new category',
          overDue: false
        },
        { 
          description: 'new desc two',
          vendor: 'new vendor two',
          dueDate: 2021-12-31,
          paymentAmount: 100,
          category: 'new category two',
          overDue: false
        }
      ]);
    });
  });

});
