import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    app.close()
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/budget-items (POST)', () => { 
    return request(app.getHttpServer())
    .post('/budget-items')
    .send({ 
      description: 'new desc',
      vendor: 'new vendor',
      dueDate: '2021-12-29',
      paymentAmount: 100,
      category: 'new category'
    })
    .expect(201);
  });

  it('/budget-items (GET)', async () => {
    const res = await request(app.getHttpServer())
    .get('/budget-items')
    .expect(200)
    expect(res.body).toEqual([
      { 
        description: 'new desc',
        vendor: 'new vendor',
        dueDate: '2021-12-29T00:00:00.000Z',
        paymentAmount: 100,
        category: 'new category',
        overDue:false,
        id: 1,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      }
    ]);
  });
});
