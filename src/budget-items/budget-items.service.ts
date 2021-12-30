import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, getRepository, QueryBuilder, Repository } from 'typeorm';
import { CreateBudgetItemDto } from './dto/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dto/update-budget-item.dto';
import { BudgetItem } from './entities/budget-item.entity';

@Injectable()
export class BudgetItemsService {
  constructor(
    @InjectRepository(BudgetItem)
    private budgetItemRepository: Repository<BudgetItem>
  ){}


  async create(createBudgetItemDto: CreateBudgetItemDto): Promise<BudgetItem> {
    const newBudgetItem = this.budgetItemRepository.create(createBudgetItemDto);

    return await this.budgetItemRepository.save(newBudgetItem);
  }

  async findAll(): Promise<BudgetItem[]> {
    return await this.budgetItemRepository.find();
  }

  async findOne(id: number): Promise<BudgetItem>{
    const foundBudgetItem = await this.budgetItemRepository.findOne(id);

    if(!foundBudgetItem) {
      throw new NotFoundException("Budget Item not found.");
    }

    return foundBudgetItem;
  }

  async update(id: number, updateBudgetItemDto: UpdateBudgetItemDto): Promise<BudgetItem>{
    const foundBudgetItem = await this.budgetItemRepository.findOne(id);

    if(!foundBudgetItem) {
      throw new NotFoundException("Budget Item not found.");
    }

    const updatedBudgetItem = this.budgetItemRepository.create({
      ...foundBudgetItem,
      ...updateBudgetItemDto
    });

    return await this.budgetItemRepository.save(updatedBudgetItem);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.budgetItemRepository.delete(id);
  }

  async findByFilter(vendor: string, category: string): Promise<BudgetItem[]> {
    const budgetItemsQuery = getRepository(BudgetItem).createQueryBuilder("budget-items");
    if(vendor){
      budgetItemsQuery.where("budget-items.vendor = :vendor", { vendor })
    }
    if(category){
      budgetItemsQuery.andWhere("budget-items.category = :category", { category })
    }   
    return await budgetItemsQuery.getMany();
  }
}
