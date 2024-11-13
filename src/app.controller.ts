import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('home')
  home() {
    return {};
  }

  @Get('/about')
  @Render('about')
  about() {
    return {};
  }
}
