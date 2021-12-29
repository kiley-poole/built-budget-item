import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetItemsModule } from './budget-items/budget-items.module';
import { BudgetItem } from './budget-items/entities/budget-item.entity';

@Module({
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
      "synchronize": true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
