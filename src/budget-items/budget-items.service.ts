import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBudgetItemDto } from './dto/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dto/update-budget-item.dto';
import { BudgetItem } from './entities/budget-item.entity';

@Injectable()
export class BudgetItemsService {
  constructor(
    @InjectRepository(BudgetItem)
    private budgetItemRepository: Repository<BudgetItem>
  ){}


  create(createBudgetItemDto: CreateBudgetItemDto) {
    return 'This action adds a new budgetItem';
  }

  async findAll() {
    return await this.budgetItemRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} budgetItem`;
  }

  update(id: number, updateBudgetItemDto: UpdateBudgetItemDto) {
    return `This action updates a #${id} budgetItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} budgetItem`;
  }
}
