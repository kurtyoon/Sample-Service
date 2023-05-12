import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Record } from './entities/record.entity';
import { RecordsModule } from './records/records.module';
import { RenderModule } from 'nest-next';
import Next from 'next';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'localhost',
      username: 'root',
      password: '1234',
      database: 'sample_service',
      entities: [User, Record],
      synchronize: true,
    }),
    RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null }),
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
