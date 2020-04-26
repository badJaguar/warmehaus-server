import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { FloorsModule } from './modules/floors.module';

require('dotenv').config();

@Module({
  imports: [
    FloorsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING)
  ],
})
export class AppModule { }
