// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Quiz, QuizQuestion, Topic, Resource } = initSchema(schema);

export {
  Quiz,
  QuizQuestion,
  Topic,
  Resource
};