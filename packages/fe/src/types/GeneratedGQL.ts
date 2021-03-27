export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
