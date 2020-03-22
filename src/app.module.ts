import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { FloorsModule } from './modules/floors.module';

@Module({
  imports: [
    FloorsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    MongooseModule.forRoot('mongodb+srv://administrator:God291286@cluster0-g5ppm.azure.mongodb.net/warmehaus_dto?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
