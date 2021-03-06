import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
    // return `This action adds a new coffee: ${body.name}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates a #${body.id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} coffee`;
  }
}
