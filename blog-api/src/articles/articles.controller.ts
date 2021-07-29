import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller()
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getHello(): string {
    return this.articlesService.getHello();
  }
}
