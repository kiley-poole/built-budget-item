import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BudgetItemsService } from './budget-items.service';
import { BudgetItem } from './entities/budget-item.entity';

describe('BudgetItemsService', () => {
  let service: BudgetItemsService;
  let repository: Repository<BudgetItem>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BudgetItemsService,
        {
          provide: getRepositoryToken(BudgetItem),
          useValue: {
            find: jest.fn().mockResolvedValue(
              [
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
              ]
            ),
          }
        }
      ],
    }).compile();

    service = module.get<BudgetItemsService>(BudgetItemsService);
    repository = module.get<Repository<BudgetItem>>(getRepositoryToken(BudgetItem));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBudgetItems', () => {
    it('should return array of budget items', async () => {
      const budgetItems = await service.findAll();
      expect(budgetItems).toEqual(
        [
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
        ]
      );
    });
  });
});
