import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsString,
  Max,
  Min,
  validateSync,
} from 'class-validator';
import { ENV_TYPE } from '../constant/enum.const';

class EnvironmentVariables {
  // server
  @IsEnum(ENV_TYPE)
  NODE_ENV: ENV_TYPE;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;

  // mysql
  @IsString()
  MYSQL_USER: string;

  @IsString()
  MYSQL_PASSWORD: string;

  @IsString()
  MYSQL_HOST: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  MYSQL_PORT: number;

  @IsString()
  MYSQL_DATABASE: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) throw new Error(errors.toString());

  return validatedConfig;
}
