import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAllCoffees() {
    return 'This action returns all coffees';
  }
}
