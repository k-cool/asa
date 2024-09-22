import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/user.entity';
import { DbConfig } from 'src/configuration';

@Injectable()
export class TypeOrmConfigProvider implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const dbConfig = this.configService.get<DbConfig>('db');

    return {
      type: 'mysql',
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      entities: [User],
      synchronize: true,
      logging: ['error', 'log', 'info', 'warn'],
      // 추후 로그파일 저장을 위한 설정
      // logger: 'file',
      maxQueryExecutionTime: 1000,
    };
  }
}
