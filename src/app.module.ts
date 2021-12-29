import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetItemsModule } from './budget-items/budget-items.module';

@Module({
  imports: [BudgetItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
