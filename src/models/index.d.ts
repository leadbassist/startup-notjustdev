import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type QuizMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizQuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TopicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResourceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerQuiz = {
  readonly id: string;
  readonly QuizQuestions?: (QuizQuestion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuiz = {
  readonly id: string;
  readonly QuizQuestions: AsyncCollection<QuizQuestion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Quiz = LazyLoading extends LazyLoadingDisabled ? EagerQuiz : LazyQuiz

export declare const Quiz: (new (init: ModelInit<Quiz, QuizMetaData>) => Quiz) & {
  copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz, QuizMetaData>) => MutableModel<Quiz, QuizMetaData> | void): Quiz;
}

type EagerQuizQuestion = {
  readonly id: string;
  readonly question?: string | null;
  readonly image?: string | null;
  readonly content?: string | null;
  readonly choices?: string[] | null;
  readonly correctAnswers?: string[] | null;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuizQuestion = {
  readonly id: string;
  readonly question?: string | null;
  readonly image?: string | null;
  readonly content?: string | null;
  readonly choices?: string[] | null;
  readonly correctAnswers?: string[] | null;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuizQuestion = LazyLoading extends LazyLoadingDisabled ? EagerQuizQuestion : LazyQuizQuestion

export declare const QuizQuestion: (new (init: ModelInit<QuizQuestion, QuizQuestionMetaData>) => QuizQuestion) & {
  copyOf(source: QuizQuestion, mutator: (draft: MutableModel<QuizQuestion, QuizQuestionMetaData>) => MutableModel<QuizQuestion, QuizQuestionMetaData> | void): QuizQuestion;
}

type EagerTopic = {
  readonly id: string;
  readonly title: string;
  readonly icon?: string | null;
  readonly level: number;
  readonly description?: string | null;
  readonly Resources?: (Resource | null)[] | null;
  readonly Exercises?: (Resource | null)[] | null;
  readonly Quiz?: Quiz | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly topicQuizId?: string | null;
}

type LazyTopic = {
  readonly id: string;
  readonly title: string;
  readonly icon?: string | null;
  readonly level: number;
  readonly description?: string | null;
  readonly Resources: AsyncCollection<Resource>;
  readonly Exercises: AsyncCollection<Resource>;
  readonly Quiz: AsyncItem<Quiz | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly topicQuizId?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic, TopicMetaData>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic, TopicMetaData>) => MutableModel<Topic, TopicMetaData> | void): Topic;
}

type EagerResource = {
  readonly id: string;
  readonly title: string;
  readonly url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResource = {
  readonly id: string;
  readonly title: string;
  readonly url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource, ResourceMetaData>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource, ResourceMetaData>) => MutableModel<Resource, ResourceMetaData> | void): Resource;
}