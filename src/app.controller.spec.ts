import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetItemsModule } from './budget-items/budget-items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetItem } from './budget-items/entities/budget-item.entity';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        BudgetItemsModule,
        TypeOrmModule.forRoot({
          "type": "mysql",
          "host": "db",
          "port": 3306,
          "username": "user",
          "password": "password",
          "database": "built_tech",
          "entities": [BudgetItem],
          "synchronize": false,
          "migrations": ["migration/*.js"],
          "cli": {
              "migrationsDir": "migration"
          }
        }),
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
