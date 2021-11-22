import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuotesService } from './quotes.service';
import { Quote } from './interfaces/quote.interface';

@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService) {}

    @Post()
    async create(@Body() createQuoteDto: CreateQuoteDto) {
        this.quotesService.create(createQuoteDto);
    }

    @Get()
    async findAll(): Promise<Quote[]> {
        return this.quotesService.findAll();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action updates a #${id} quote`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
        return `This action updates a #${id} quote`;
    }
}