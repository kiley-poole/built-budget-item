import {MigrationInterface, QueryRunner} from "typeorm";

export class BudgetItemPaymentAmountRefactoring1640806401680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE budget_item MODIFY COLUMN paymentAmount DECIMAL(13, 4)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE budget_item MODIFY COLUMN paymentAmount INT`);
    }

}
