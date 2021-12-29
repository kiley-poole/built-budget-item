import { Module } from '@nestjs/common';
import { BudgetItemsService } from './budget-items.service';
import { BudgetItemsController } from './budget-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetItem } from './entities/budget-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetItem])],
  controllers: [BudgetItemsController],
  providers: [BudgetItemsService]
})
export class BudgetItemsModule {}
