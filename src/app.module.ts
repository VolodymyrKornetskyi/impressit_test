import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultipleOfModule } from './multiple-of/multiple-of.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [MultipleOfModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
