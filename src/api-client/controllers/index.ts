import { AggregateController } from './aggregate'
import { CategoryController } from './category'
import { CommentController } from './comment'
import { LinkController } from './link'
import { NoteController } from './note'
import { PageController } from './page'
import { PostController } from './post'
import { ProjectController } from './project'
import { RecentlyController } from './recently'
import { SayController } from './say'
import { ServerlessController } from './severless'
import { TopicController } from './topic'
import { SearchController } from './search'
import { SnippetController } from './snippet'
import { UserController } from './user'
import { AlbumController } from './album'
import { PhotoController } from './photo'
import { QAController } from './QA'

export const allControllers = [
  AlbumController,
  AggregateController,
  CategoryController,
  CommentController,
  LinkController,
  NoteController,

  PageController,
  PostController,
  ProjectController,
  PhotoController,
  QAController,

  RecentlyController,
  SayController,
  SearchController,
  SnippetController,
  ServerlessController,
  TopicController,
  UserController,
  
]

export const allContollerNames = [
  'album',
  'aggregate',
  'category',
  'comment',
  'link',
  'note',

  'page',
  'post',
  'project',
  'photo',
  'qa',

  'recently',
  'say',
  'search',
  'snippet',
  'serverless',
  'topic',
  'user',

  // alias,
  'friend',
  'master',
  'shorthand',
] as const

export {
  AlbumController,
  AggregateController,
  CategoryController,
  CommentController,
  LinkController,
  NoteController,

  PageController,
  PostController,
  ProjectController,
  PhotoController,
  QAController,

  RecentlyController,
  SayController,
  SearchController,
  SnippetController,
  ServerlessController,
  TopicController,
  UserController,
}
