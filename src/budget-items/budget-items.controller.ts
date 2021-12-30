import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ParseIntPipe, Query } from '@nestjs/common';
import { JoiValidationPipe } from '../joi-validation.pipe';
import { DeleteResult } from 'typeorm';
import { BudgetItemsService } from './budget-items.service';
import { CreateBudgetItemDto } from './dto/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dto/update-budget-item.dto';
import { BudgetItem } from './entities/budget-item.entity';
import { CreatedBudgetItemSchema, UpdateBudgetItemSchema } from './schemas/budget-items.schema';

@Controller('budget-items')
export class BudgetItemsController {
  constructor(private readonly budgetItemsService: BudgetItemsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(CreatedBudgetItemSchema))
  async create(@Body() createBudgetItemDto: CreateBudgetItemDto): Promise<BudgetItem> {
    return await this.budgetItemsService.create(createBudgetItemDto);
  }
  
  @Get('filter')
  async findByFilter(
    @Query('vendor') vendor: string, 
    @Query('category') category: string
    ): Promise<BudgetItem[]>{
    return await this.budgetItemsService.findByFilter(vendor, category)
  }

  @Get()
  async findAll(): Promise<BudgetItem[]> {
    return await this.budgetItemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<BudgetItem> {
    return await this.budgetItemsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string, 
    @Body(new JoiValidationPipe(UpdateBudgetItemSchema)) updateBudgetItemDto: UpdateBudgetItemDto
    ): Promise<BudgetItem> {
    return await this.budgetItemsService.update(+id, updateBudgetItemDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string): Promise<DeleteResult> {
    return await this.budgetItemsService.remove(+id);
  }
}
