import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      exceptionFactory: (errors: ValidationError[]) => {
        // console.log(errors);
        const messages: any[] = [];
        const childErrors = (errorList: ValidationError[]) => {
          console.log(errorList);
          errorList.forEach((error) => {
            if(error.constraints) {
              const values = Object.values(error.constraints);
              messages.push([error.property, values.length > 1 ? values : values[0]]);
            }
            if(error.children && error.children.length > 0){
              childErrors(error.children);
            }
          });
        };
        childErrors(errors);
        return new BadRequestException([Object.fromEntries(messages)]);
      },
    }),
  );
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     disableErrorMessages: false,
  //     exceptionFactory: (errors: ValidationError[]) => {
  //       // console.log(errors);
  //       const messages: any[] = errors.map((error) => {
  //         console.log(error);
  //         if(error.constraints) {
  //           const values = Object.values(error.constraints);
  //           return [error.property, values.length > 1 ? values : values[0]];
  //         }
  //       });
  //       return new BadRequestException([Object.fromEntries(messages)]);
  //     },
  //   }),
  // );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
