import { GraphQLResolveInfo } from 'graphql';
import { amenityDb, marinaDb, cityDb, countryDb, photoDb, marinAndAmenityDb } from './GeneratedDb';
import { ApolloContext } from './ApolloContext';
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type AddMarinaInput = {
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  city: Scalars['String'];
  country: Scalars['String'];
  amenities?: Maybe<Array<Scalars['String']>>;
};

export type Amenity = Node & {
  __typename?: 'Amenity';
  id: Scalars['ID'];
  code: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type City = Node & {
  __typename?: 'City';
  id: Scalars['ID'];
  code: Scalars['String'];
  country: Country;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
};

export type Country = Node & {
  __typename?: 'Country';
  id: Scalars['ID'];
  code: Scalars['String'];
};

export type Marina = Node & {
  __typename?: 'Marina';
  id: Scalars['ID'];
  name: Scalars['String'];
  city?: Maybe<City>;
  country?: Maybe<Country>;
  lat: Scalars['Float'];
  lon: Scalars['Float'];
  photo?: Maybe<Photo>;
  amenities?: Maybe<Array<Maybe<Amenity>>>;
};

export type MarinaPayload = {
  __typename?: 'MarinaPayload';
  marina?: Maybe<Marina>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMarina?: Maybe<MarinaPayload>;
};


export type MutationAddMarinaArgs = {
  input: AddMarinaInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Photo = Node & {
  __typename?: 'Photo';
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  marinas?: Maybe<Array<Marina>>;
  cities?: Maybe<Array<City>>;
  countries?: Maybe<Array<Country>>;
  amenities?: Maybe<Array<Amenity>>;
  photos?: Maybe<Array<Photo>>;
  marina?: Maybe<Marina>;
};


export type QueryMarinaArgs = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddMarinaInput: AddMarinaInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Amenity: ResolverTypeWrapper<amenityDb>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  CacheControlScope: CacheControlScope;
  City: ResolverTypeWrapper<cityDb>;
  Country: ResolverTypeWrapper<countryDb>;
  Marina: ResolverTypeWrapper<marinaDb>;
  MarinaPayload: ResolverTypeWrapper<Omit<MarinaPayload, 'marina'> & { marina?: Maybe<ResolversTypes['Marina']> }>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Amenity'] | ResolversTypes['City'] | ResolversTypes['Country'] | ResolversTypes['Marina'] | ResolversTypes['Photo'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Photo: ResolverTypeWrapper<photoDb>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddMarinaInput: AddMarinaInput;
  String: Scalars['String'];
  Float: Scalars['Float'];
  Amenity: amenityDb;
  ID: Scalars['ID'];
  City: cityDb;
  Country: countryDb;
  Marina: marinaDb;
  MarinaPayload: Omit<MarinaPayload, 'marina'> & { marina?: Maybe<ResolversParentTypes['Marina']> };
  Mutation: {};
  Node: ResolversParentTypes['Amenity'] | ResolversParentTypes['City'] | ResolversParentTypes['Country'] | ResolversParentTypes['Marina'] | ResolversParentTypes['Photo'];
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  Photo: photoDb;
  Query: {};
  Int: Scalars['Int'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = ApolloContext, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AmenityResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Amenity'] = ResolversParentTypes['Amenity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarinaResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Marina'] = ResolversParentTypes['Marina']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lon?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType>;
  amenities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Amenity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarinaPayloadResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['MarinaPayload'] = ResolversParentTypes['MarinaPayload']> = {
  marina?: Resolver<Maybe<ResolversTypes['Marina']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addMarina?: Resolver<Maybe<ResolversTypes['MarinaPayload']>, ParentType, ContextType, RequireFields<MutationAddMarinaArgs, 'input'>>;
};

export type NodeResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Amenity' | 'City' | 'Country' | 'Marina' | 'Photo', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  marinas?: Resolver<Maybe<Array<ResolversTypes['Marina']>>, ParentType, ContextType>;
  cities?: Resolver<Maybe<Array<ResolversTypes['City']>>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<ResolversTypes['Country']>>, ParentType, ContextType>;
  amenities?: Resolver<Maybe<Array<ResolversTypes['Amenity']>>, ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<ResolversTypes['Photo']>>, ParentType, ContextType>;
  marina?: Resolver<Maybe<ResolversTypes['Marina']>, ParentType, ContextType, RequireFields<QueryMarinaArgs, 'id'>>;
};

export type Resolvers<ContextType = ApolloContext> = {
  Amenity?: AmenityResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Marina?: MarinaResolvers<ContextType>;
  MarinaPayload?: MarinaPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ApolloContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = ApolloContext> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = ApolloContext> = DirectiveResolvers<ContextType>;