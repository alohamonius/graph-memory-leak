// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import UsePollingLive from "@graphprotocol/client-polling-live";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { Uniswap2Types } from './sources/uniswap2/types';
import type { Uniswap3Types } from './sources/uniswap3/types';
import * as importedModule$0 from "./sources/uniswap2/introspectionSchema";
import * as importedModule$1 from "./sources/uniswap3/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Query = {
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  tickHourData?: Maybe<TickHourData>;
  tickHourDatas: Array<TickHourData>;
  tickDayData?: Maybe<TickDayData>;
  tickDayDatas: Array<TickDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
};


export type QueryuniswapFactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Flash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Flash_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription = {
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  tickHourData?: Maybe<TickHourData>;
  tickHourDatas: Array<TickHourData>;
  tickDayData?: Maybe<TickDayData>;
  tickDayDatas: Array<TickDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
};


export type SubscriptionuniswapFactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Flash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Flash_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Bundle = {
  id: Scalars['ID'];
  ethPrice: Scalars['BigDecimal'];
  ethPriceUSD: Scalars['BigDecimal'];
};

export type Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPrice?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
  ethPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ethPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type Bundle_orderBy =
  | 'id'
  | 'ethPrice'
  | 'ethPriceUSD';

export type Burn = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  to?: Maybe<Scalars['Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  needsComplete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  pool: Pool;
  token0: Token;
  token1: Token;
  owner?: Maybe<Scalars['Bytes']>;
  origin: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
};

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  needsComplete?: InputMaybe<Scalars['Boolean']>;
  needsComplete_not?: InputMaybe<Scalars['Boolean']>;
  needsComplete_in?: InputMaybe<Array<Scalars['Boolean']>>;
  needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  feeTo?: InputMaybe<Scalars['Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']>;
  feeTo_gt?: InputMaybe<Scalars['Bytes']>;
  feeTo_lt?: InputMaybe<Scalars['Bytes']>;
  feeTo_gte?: InputMaybe<Scalars['Bytes']>;
  feeTo_lte?: InputMaybe<Scalars['Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Burn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Burn_filter>>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_gt?: InputMaybe<Scalars['Bytes']>;
  origin_lt?: InputMaybe<Scalars['Bytes']>;
  origin_gte?: InputMaybe<Scalars['Bytes']>;
  origin_lte?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'needsComplete'
  | 'feeTo'
  | 'feeLiquidity'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'tickLower'
  | 'tickUpper';

export type LiquidityPosition = {
  id: Scalars['ID'];
  user: User;
  pair: Pair;
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot = {
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: User;
  pair: Pair;
  token0PriceUSD: Scalars['BigDecimal'];
  token1PriceUSD: Scalars['BigDecimal'];
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  liquidityTokenTotalSupply: Scalars['BigDecimal'];
  liquidityTokenBalance: Scalars['BigDecimal'];
};

export type LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_?: InputMaybe<LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPositionSnapshot_filter>>>;
};

export type LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'liquidityPosition__id'
  | 'liquidityPosition__liquidityTokenBalance'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'user__id'
  | 'user__usdSwapped'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance';

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'user__usdSwapped'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'liquidityTokenBalance';

export type Mint = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  to: Scalars['Bytes'];
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  pool: Pool;
  token0: Token;
  token1: Token;
  owner: Scalars['Bytes'];
  origin: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
};

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeTo?: InputMaybe<Scalars['Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']>;
  feeTo_gt?: InputMaybe<Scalars['Bytes']>;
  feeTo_lt?: InputMaybe<Scalars['Bytes']>;
  feeTo_gte?: InputMaybe<Scalars['Bytes']>;
  feeTo_lte?: InputMaybe<Scalars['Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Mint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Mint_filter>>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_gt?: InputMaybe<Scalars['Bytes']>;
  origin_lt?: InputMaybe<Scalars['Bytes']>;
  origin_gte?: InputMaybe<Scalars['Bytes']>;
  origin_lte?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'tickLower'
  | 'tickUpper';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pair = {
  id: Scalars['ID'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveETH: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  trackedReserveETH: Scalars['BigDecimal'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
};

export type PairDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pairAddress: Scalars['Bytes'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  totalSupply: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  dailyVolumeToken0: Scalars['BigDecimal'];
  dailyVolumeToken1: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
};

export type PairDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pairAddress?: InputMaybe<Scalars['Bytes']>;
  pairAddress_not?: InputMaybe<Scalars['Bytes']>;
  pairAddress_gt?: InputMaybe<Scalars['Bytes']>;
  pairAddress_lt?: InputMaybe<Scalars['Bytes']>;
  pairAddress_gte?: InputMaybe<Scalars['Bytes']>;
  pairAddress_lte?: InputMaybe<Scalars['Bytes']>;
  pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pairAddress_contains?: InputMaybe<Scalars['Bytes']>;
  pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PairDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PairDayData_filter>>>;
};

export type PairDayData_orderBy =
  | 'id'
  | 'date'
  | 'pairAddress'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__tradeVolume'
  | 'token0__tradeVolumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__txCount'
  | 'token0__totalLiquidity'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__tradeVolume'
  | 'token1__tradeVolumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__txCount'
  | 'token1__totalLiquidity'
  | 'token1__derivedETH'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'dailyVolumeToken0'
  | 'dailyVolumeToken1'
  | 'dailyVolumeUSD'
  | 'dailyTxns';

export type PairHourData = {
  id: Scalars['ID'];
  hourStartUnix: Scalars['Int'];
  pair: Pair;
  reserve0: Scalars['BigDecimal'];
  reserve1: Scalars['BigDecimal'];
  reserveUSD: Scalars['BigDecimal'];
  hourlyVolumeToken0: Scalars['BigDecimal'];
  hourlyVolumeToken1: Scalars['BigDecimal'];
  hourlyVolumeUSD: Scalars['BigDecimal'];
  hourlyTxns: Scalars['BigInt'];
};

export type PairHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hourStartUnix?: InputMaybe<Scalars['Int']>;
  hourStartUnix_not?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lt?: InputMaybe<Scalars['Int']>;
  hourStartUnix_gte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_lte?: InputMaybe<Scalars['Int']>;
  hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTxns?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_not?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PairHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PairHourData_filter>>>;
};

export type PairHourData_orderBy =
  | 'id'
  | 'hourStartUnix'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'hourlyVolumeToken0'
  | 'hourlyVolumeToken1'
  | 'hourlyVolumeUSD'
  | 'hourlyTxns';

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveETH?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pair_filter>>>;
};

export type Pair_orderBy =
  | 'id'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__tradeVolume'
  | 'token0__tradeVolumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__txCount'
  | 'token0__totalLiquidity'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__tradeVolume'
  | 'token1__tradeVolumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__txCount'
  | 'token1__totalLiquidity'
  | 'token1__derivedETH'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveETH'
  | 'reserveUSD'
  | 'trackedReserveETH'
  | 'token0Price'
  | 'token1Price'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount';

export type Swap = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  sender: Scalars['Bytes'];
  amount0In: Scalars['BigDecimal'];
  amount1In: Scalars['BigDecimal'];
  amount0Out: Scalars['BigDecimal'];
  amount1Out: Scalars['BigDecimal'];
  to: Scalars['Bytes'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['BigDecimal'];
  pool: Pool;
  token0: Token;
  token1: Token;
  recipient: Scalars['Bytes'];
  origin: Scalars['Bytes'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  sqrtPriceX96: Scalars['BigInt'];
  tick: Scalars['BigInt'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0In?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1In?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Out?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Out?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_gt?: InputMaybe<Scalars['Bytes']>;
  origin_lt?: InputMaybe<Scalars['Bytes']>;
  origin_gte?: InputMaybe<Scalars['Bytes']>;
  origin_lte?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'sender'
  | 'amount0In'
  | 'amount1In'
  | 'amount0Out'
  | 'amount1Out'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'recipient'
  | 'origin'
  | 'amount0'
  | 'amount1'
  | 'sqrtPriceX96'
  | 'tick';

export type Token = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  tradeVolume: Scalars['BigDecimal'];
  tradeVolumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  totalLiquidity: Scalars['BigDecimal'];
  derivedETH: Scalars['BigDecimal'];
  mostLiquidPairs: Array<Maybe<PairDayData>>;
  volume: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  poolCount: Scalars['BigInt'];
  totalValueLocked: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal'];
  whitelistPools: Array<Pool>;
  tokenDayData: Array<TokenDayData>;
};


export type TokenmostLiquidPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
};


export type TokenwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};


export type TokentokenDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};

export type TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  dailyVolumeToken: Scalars['BigDecimal'];
  dailyVolumeETH: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyTxns: Scalars['BigInt'];
  totalLiquidityToken: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  maxStored: Scalars['Int'];
  mostLiquidPairs: Array<PairDayData>;
  volume: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalValueLocked: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};


export type TokenDayDatamostLiquidPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
};

export type TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maxStored?: InputMaybe<Scalars['Int']>;
  maxStored_not?: InputMaybe<Scalars['Int']>;
  maxStored_gt?: InputMaybe<Scalars['Int']>;
  maxStored_lt?: InputMaybe<Scalars['Int']>;
  maxStored_gte?: InputMaybe<Scalars['Int']>;
  maxStored_lte?: InputMaybe<Scalars['Int']>;
  maxStored_in?: InputMaybe<Array<Scalars['Int']>>;
  maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>;
  mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_?: InputMaybe<PairDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenDayData_filter>>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__tradeVolume'
  | 'token__tradeVolumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__txCount'
  | 'token__totalLiquidity'
  | 'token__derivedETH'
  | 'dailyVolumeToken'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyTxns'
  | 'totalLiquidityToken'
  | 'totalLiquidityETH'
  | 'totalLiquidityUSD'
  | 'priceUSD'
  | 'maxStored'
  | 'mostLiquidPairs'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__feesUSD'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tradeVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidPairs_?: InputMaybe<PairDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_?: InputMaybe<Pool_filter>;
  tokenDayData_?: InputMaybe<TokenDayData_filter>;
};

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'tradeVolume'
  | 'tradeVolumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'totalLiquidity'
  | 'derivedETH'
  | 'mostLiquidPairs'
  | 'volume'
  | 'volumeUSD'
  | 'feesUSD'
  | 'poolCount'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'whitelistPools'
  | 'tokenDayData';

export type Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  mints: Array<Maybe<Mint>>;
  burns: Array<Maybe<Burn>>;
  swaps: Array<Maybe<Swap>>;
  gasUsed: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  flashed: Array<Maybe<Flash>>;
  collects: Array<Maybe<Collect>>;
};


export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type TransactionflashedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Flash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Flash_filter>;
};


export type TransactioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mints?: InputMaybe<Array<Scalars['String']>>;
  mints_not?: InputMaybe<Array<Scalars['String']>>;
  mints_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_?: InputMaybe<Mint_filter>;
  burns?: InputMaybe<Array<Scalars['String']>>;
  burns_not?: InputMaybe<Array<Scalars['String']>>;
  burns_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_?: InputMaybe<Burn_filter>;
  swaps?: InputMaybe<Array<Scalars['String']>>;
  swaps_not?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_?: InputMaybe<Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashed_?: InputMaybe<Flash_filter>;
  collects_?: InputMaybe<Collect_filter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'gasUsed'
  | 'gasPrice'
  | 'flashed'
  | 'collects';

export type UniswapDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  dailyVolumeETH: Scalars['BigDecimal'];
  dailyVolumeUSD: Scalars['BigDecimal'];
  dailyVolumeUntracked: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  maxStored?: Maybe<Scalars['Int']>;
  mostLiquidTokens: Array<TokenDayData>;
  txCount: Scalars['BigInt'];
  volumeETH: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  volumeUSDUntracked: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  tvlUSD: Scalars['BigDecimal'];
};


export type UniswapDayDatamostLiquidTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};

export type UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maxStored?: InputMaybe<Scalars['Int']>;
  maxStored_not?: InputMaybe<Scalars['Int']>;
  maxStored_gt?: InputMaybe<Scalars['Int']>;
  maxStored_lt?: InputMaybe<Scalars['Int']>;
  maxStored_gte?: InputMaybe<Scalars['Int']>;
  maxStored_lte?: InputMaybe<Scalars['Int']>;
  maxStored_in?: InputMaybe<Array<Scalars['Int']>>;
  maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>;
  mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_?: InputMaybe<TokenDayData_filter>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniswapDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniswapDayData_filter>>>;
  volumeETH?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyVolumeUntracked'
  | 'totalVolumeETH'
  | 'totalLiquidityETH'
  | 'totalVolumeUSD'
  | 'totalLiquidityUSD'
  | 'maxStored'
  | 'mostLiquidTokens'
  | 'txCount'
  | 'volumeETH'
  | 'volumeUSD'
  | 'volumeUSDUntracked'
  | 'feesUSD'
  | 'tvlUSD';

export type UniswapFactory = {
  id: Scalars['ID'];
  pairCount: Scalars['Int'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalLiquidityUSD: Scalars['BigDecimal'];
  totalLiquidityETH: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  mostLiquidTokens: Array<TokenDayData>;
};


export type UniswapFactorymostLiquidTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};

export type UniswapFactory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pairCount?: InputMaybe<Scalars['Int']>;
  pairCount_not?: InputMaybe<Scalars['Int']>;
  pairCount_gt?: InputMaybe<Scalars['Int']>;
  pairCount_lt?: InputMaybe<Scalars['Int']>;
  pairCount_gte?: InputMaybe<Scalars['Int']>;
  pairCount_lte?: InputMaybe<Scalars['Int']>;
  pairCount_in?: InputMaybe<Array<Scalars['Int']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mostLiquidTokens_?: InputMaybe<TokenDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniswapFactory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniswapFactory_filter>>>;
};

export type UniswapFactory_orderBy =
  | 'id'
  | 'pairCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'untrackedVolumeUSD'
  | 'totalLiquidityUSD'
  | 'totalLiquidityETH'
  | 'txCount'
  | 'mostLiquidTokens';

export type User = {
  id: Scalars['ID'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
  usdSwapped: Scalars['BigDecimal'];
};


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  usdSwapped?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>;
  usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'liquidityPositions'
  | 'usdSwapped';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type Collect = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pool: Pool;
  owner?: Maybe<Scalars['Bytes']>;
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type Collect_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Collect_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Collect_filter>>>;
};

export type Collect_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'owner'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

export type Factory = {
  id: Scalars['ID'];
  poolCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  totalFeesUSD: Scalars['BigDecimal'];
  totalFeesETH: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  totalValueLockedETH: Scalars['BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal'];
  totalValueLockedETHUntracked: Scalars['BigDecimal'];
  owner: Scalars['ID'];
};

export type Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesETH?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  owner?: InputMaybe<Scalars['ID']>;
  owner_not?: InputMaybe<Scalars['ID']>;
  owner_gt?: InputMaybe<Scalars['ID']>;
  owner_lt?: InputMaybe<Scalars['ID']>;
  owner_gte?: InputMaybe<Scalars['ID']>;
  owner_lte?: InputMaybe<Scalars['ID']>;
  owner_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Factory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Factory_filter>>>;
};

export type Factory_orderBy =
  | 'id'
  | 'poolCount'
  | 'txCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'totalFeesUSD'
  | 'totalFeesETH'
  | 'untrackedVolumeUSD'
  | 'totalValueLockedUSD'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSDUntracked'
  | 'totalValueLockedETHUntracked'
  | 'owner';

export type Flash = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pool: Pool;
  sender: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  amountUSD: Scalars['BigDecimal'];
  amount0Paid: Scalars['BigDecimal'];
  amount1Paid: Scalars['BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type Flash_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Paid?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Paid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Paid?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Paid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Flash_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Flash_filter>>>;
};

export type Flash_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'amount0Paid'
  | 'amount1Paid'
  | 'logIndex';

export type Pool = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  token0: Token;
  token1: Token;
  feeTier: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  observationIndex: Scalars['BigInt'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  collectedFeesUSD: Scalars['BigDecimal'];
  totalValueLockedToken0: Scalars['BigDecimal'];
  totalValueLockedToken1: Scalars['BigDecimal'];
  totalValueLockedETH: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal'];
  liquidityProviderCount: Scalars['BigInt'];
  poolHourData: Array<PoolHourData>;
  poolDayData: Array<PoolDayData>;
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
  collects: Array<Collect>;
  ticks: Array<Tick>;
};


export type PoolpoolHourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
};


export type PoolpoolDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
};


export type PoolmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type PoolburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type PoolcollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
};


export type PoolticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
};

export type PoolDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type PoolDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolDayData_filter>>>;
};

export type PoolDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type PoolHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type PoolHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolHourData_filter>>>;
};

export type PoolHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  feeTier?: InputMaybe<Scalars['BigInt']>;
  feeTier_not?: InputMaybe<Scalars['BigInt']>;
  feeTier_gt?: InputMaybe<Scalars['BigInt']>;
  feeTier_lt?: InputMaybe<Scalars['BigInt']>;
  feeTier_gte?: InputMaybe<Scalars['BigInt']>;
  feeTier_lte?: InputMaybe<Scalars['BigInt']>;
  feeTier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeTier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex?: InputMaybe<Scalars['BigInt']>;
  observationIndex_not?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolHourData_?: InputMaybe<PoolHourData_filter>;
  poolDayData_?: InputMaybe<PoolDayData_filter>;
  mints_?: InputMaybe<Mint_filter>;
  burns_?: InputMaybe<Burn_filter>;
  swaps_?: InputMaybe<Swap_filter>;
  collects_?: InputMaybe<Collect_filter>;
  ticks_?: InputMaybe<Tick_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'feeTier'
  | 'liquidity'
  | 'sqrtPrice'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'observationIndex'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'totalValueLockedToken0'
  | 'totalValueLockedToken1'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'liquidityProviderCount'
  | 'poolHourData'
  | 'poolDayData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'collects'
  | 'ticks';

export type Position = {
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  pool: Pool;
  token0: Token;
  token1: Token;
  tickLower: Tick;
  tickUpper: Tick;
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['BigDecimal'];
  depositedToken1: Scalars['BigDecimal'];
  withdrawnToken0: Scalars['BigDecimal'];
  withdrawnToken1: Scalars['BigDecimal'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  transaction: Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type PositionSnapshot = {
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  pool: Pool;
  position: Position;
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['BigDecimal'];
  depositedToken1: Scalars['BigDecimal'];
  withdrawnToken0: Scalars['BigDecimal'];
  withdrawnToken1: Scalars['BigDecimal'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  transaction: Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
};

export type PositionSnapshot_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'position'
  | 'position__id'
  | 'position__owner'
  | 'position__liquidity'
  | 'position__depositedToken0'
  | 'position__depositedToken1'
  | 'position__withdrawnToken0'
  | 'position__withdrawnToken1'
  | 'position__collectedFeesToken0'
  | 'position__collectedFeesToken1'
  | 'position__feeGrowthInside0LastX128'
  | 'position__feeGrowthInside1LastX128'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type Position_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  tickLower?: InputMaybe<Scalars['String']>;
  tickLower_not?: InputMaybe<Scalars['String']>;
  tickLower_gt?: InputMaybe<Scalars['String']>;
  tickLower_lt?: InputMaybe<Scalars['String']>;
  tickLower_gte?: InputMaybe<Scalars['String']>;
  tickLower_lte?: InputMaybe<Scalars['String']>;
  tickLower_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_contains?: InputMaybe<Scalars['String']>;
  tickLower_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_contains?: InputMaybe<Scalars['String']>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_?: InputMaybe<Tick_filter>;
  tickUpper?: InputMaybe<Scalars['String']>;
  tickUpper_not?: InputMaybe<Scalars['String']>;
  tickUpper_gt?: InputMaybe<Scalars['String']>;
  tickUpper_lt?: InputMaybe<Scalars['String']>;
  tickUpper_gte?: InputMaybe<Scalars['String']>;
  tickUpper_lte?: InputMaybe<Scalars['String']>;
  tickUpper_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_contains?: InputMaybe<Scalars['String']>;
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_?: InputMaybe<Tick_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Position_filter>>>;
};

export type Position_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'tickLower'
  | 'tickLower__id'
  | 'tickLower__poolAddress'
  | 'tickLower__tickIdx'
  | 'tickLower__liquidityGross'
  | 'tickLower__liquidityNet'
  | 'tickLower__price0'
  | 'tickLower__price1'
  | 'tickLower__volumeToken0'
  | 'tickLower__volumeToken1'
  | 'tickLower__volumeUSD'
  | 'tickLower__untrackedVolumeUSD'
  | 'tickLower__feesUSD'
  | 'tickLower__collectedFeesToken0'
  | 'tickLower__collectedFeesToken1'
  | 'tickLower__collectedFeesUSD'
  | 'tickLower__createdAtTimestamp'
  | 'tickLower__createdAtBlockNumber'
  | 'tickLower__liquidityProviderCount'
  | 'tickLower__feeGrowthOutside0X128'
  | 'tickLower__feeGrowthOutside1X128'
  | 'tickUpper'
  | 'tickUpper__id'
  | 'tickUpper__poolAddress'
  | 'tickUpper__tickIdx'
  | 'tickUpper__liquidityGross'
  | 'tickUpper__liquidityNet'
  | 'tickUpper__price0'
  | 'tickUpper__price1'
  | 'tickUpper__volumeToken0'
  | 'tickUpper__volumeToken1'
  | 'tickUpper__volumeUSD'
  | 'tickUpper__untrackedVolumeUSD'
  | 'tickUpper__feesUSD'
  | 'tickUpper__collectedFeesToken0'
  | 'tickUpper__collectedFeesToken1'
  | 'tickUpper__collectedFeesUSD'
  | 'tickUpper__createdAtTimestamp'
  | 'tickUpper__createdAtBlockNumber'
  | 'tickUpper__liquidityProviderCount'
  | 'tickUpper__feeGrowthOutside0X128'
  | 'tickUpper__feeGrowthOutside1X128'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type Tick = {
  id: Scalars['ID'];
  poolAddress?: Maybe<Scalars['String']>;
  tickIdx: Scalars['BigInt'];
  pool: Pool;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  price0: Scalars['BigDecimal'];
  price1: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  collectedFeesUSD: Scalars['BigDecimal'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type TickDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: Pool;
  tick: Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type TickDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TickDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TickDayData_filter>>>;
};

export type TickDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type TickHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: Pool;
  tick: Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
};

export type TickHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TickHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TickHourData_filter>>>;
};

export type TickHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD';

export type Tick_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolAddress?: InputMaybe<Scalars['String']>;
  poolAddress_not?: InputMaybe<Scalars['String']>;
  poolAddress_gt?: InputMaybe<Scalars['String']>;
  poolAddress_lt?: InputMaybe<Scalars['String']>;
  poolAddress_gte?: InputMaybe<Scalars['String']>;
  poolAddress_lte?: InputMaybe<Scalars['String']>;
  poolAddress_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_contains?: InputMaybe<Scalars['String']>;
  poolAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickIdx?: InputMaybe<Scalars['BigInt']>;
  tickIdx_not?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickIdx_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price0?: InputMaybe<Scalars['BigDecimal']>;
  price0_not?: InputMaybe<Scalars['BigDecimal']>;
  price0_gt?: InputMaybe<Scalars['BigDecimal']>;
  price0_lt?: InputMaybe<Scalars['BigDecimal']>;
  price0_gte?: InputMaybe<Scalars['BigDecimal']>;
  price0_lte?: InputMaybe<Scalars['BigDecimal']>;
  price0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price1?: InputMaybe<Scalars['BigDecimal']>;
  price1_not?: InputMaybe<Scalars['BigDecimal']>;
  price1_gt?: InputMaybe<Scalars['BigDecimal']>;
  price1_lt?: InputMaybe<Scalars['BigDecimal']>;
  price1_gte?: InputMaybe<Scalars['BigDecimal']>;
  price1_lte?: InputMaybe<Scalars['BigDecimal']>;
  price1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
};

export type Tick_orderBy =
  | 'id'
  | 'poolAddress'
  | 'tickIdx'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'price0'
  | 'price1'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type TokenHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  token: Token;
  volume: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalValueLocked: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type TokenHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenHourData_filter>>>;
};

export type TokenHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_filter;
  Bundle_orderBy: Bundle_orderBy;
  Burn: ResolverTypeWrapper<Burn>;
  Burn_filter: Burn_filter;
  Burn_orderBy: Burn_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>;
  LiquidityPositionSnapshot: ResolverTypeWrapper<LiquidityPositionSnapshot>;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPositionSnapshot_orderBy: LiquidityPositionSnapshot_orderBy;
  LiquidityPosition_filter: LiquidityPosition_filter;
  LiquidityPosition_orderBy: LiquidityPosition_orderBy;
  Mint: ResolverTypeWrapper<Mint>;
  Mint_filter: Mint_filter;
  Mint_orderBy: Mint_orderBy;
  OrderDirection: OrderDirection;
  Pair: ResolverTypeWrapper<Pair>;
  PairDayData: ResolverTypeWrapper<PairDayData>;
  PairDayData_filter: PairDayData_filter;
  PairDayData_orderBy: PairDayData_orderBy;
  PairHourData: ResolverTypeWrapper<PairHourData>;
  PairHourData_filter: PairHourData_filter;
  PairHourData_orderBy: PairHourData_orderBy;
  Pair_filter: Pair_filter;
  Pair_orderBy: Pair_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenDayData: ResolverTypeWrapper<TokenDayData>;
  TokenDayData_filter: TokenDayData_filter;
  TokenDayData_orderBy: TokenDayData_orderBy;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  UniswapDayData: ResolverTypeWrapper<UniswapDayData>;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapDayData_orderBy: UniswapDayData_orderBy;
  UniswapFactory: ResolverTypeWrapper<UniswapFactory>;
  UniswapFactory_filter: UniswapFactory_filter;
  UniswapFactory_orderBy: UniswapFactory_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Collect: ResolverTypeWrapper<Collect>;
  Collect_filter: Collect_filter;
  Collect_orderBy: Collect_orderBy;
  Factory: ResolverTypeWrapper<Factory>;
  Factory_filter: Factory_filter;
  Factory_orderBy: Factory_orderBy;
  Flash: ResolverTypeWrapper<Flash>;
  Flash_filter: Flash_filter;
  Flash_orderBy: Flash_orderBy;
  Pool: ResolverTypeWrapper<Pool>;
  PoolDayData: ResolverTypeWrapper<PoolDayData>;
  PoolDayData_filter: PoolDayData_filter;
  PoolDayData_orderBy: PoolDayData_orderBy;
  PoolHourData: ResolverTypeWrapper<PoolHourData>;
  PoolHourData_filter: PoolHourData_filter;
  PoolHourData_orderBy: PoolHourData_orderBy;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  Position: ResolverTypeWrapper<Position>;
  PositionSnapshot: ResolverTypeWrapper<PositionSnapshot>;
  PositionSnapshot_filter: PositionSnapshot_filter;
  PositionSnapshot_orderBy: PositionSnapshot_orderBy;
  Position_filter: Position_filter;
  Position_orderBy: Position_orderBy;
  Tick: ResolverTypeWrapper<Tick>;
  TickDayData: ResolverTypeWrapper<TickDayData>;
  TickDayData_filter: TickDayData_filter;
  TickDayData_orderBy: TickDayData_orderBy;
  TickHourData: ResolverTypeWrapper<TickHourData>;
  TickHourData_filter: TickHourData_filter;
  TickHourData_orderBy: TickHourData_orderBy;
  Tick_filter: Tick_filter;
  Tick_orderBy: Tick_orderBy;
  TokenHourData: ResolverTypeWrapper<TokenHourData>;
  TokenHourData_filter: TokenHourData_filter;
  TokenHourData_orderBy: TokenHourData_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bundle: Bundle;
  Bundle_filter: Bundle_filter;
  Burn: Burn;
  Burn_filter: Burn_filter;
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LiquidityPosition: LiquidityPosition;
  LiquidityPositionSnapshot: LiquidityPositionSnapshot;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPosition_filter: LiquidityPosition_filter;
  Mint: Mint;
  Mint_filter: Mint_filter;
  Pair: Pair;
  PairDayData: PairDayData;
  PairDayData_filter: PairDayData_filter;
  PairHourData: PairHourData;
  PairHourData_filter: PairHourData_filter;
  Pair_filter: Pair_filter;
  String: Scalars['String'];
  Swap: Swap;
  Swap_filter: Swap_filter;
  Token: Token;
  TokenDayData: TokenDayData;
  TokenDayData_filter: TokenDayData_filter;
  Token_filter: Token_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  UniswapDayData: UniswapDayData;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapFactory: UniswapFactory;
  UniswapFactory_filter: UniswapFactory_filter;
  User: User;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  Collect: Collect;
  Collect_filter: Collect_filter;
  Factory: Factory;
  Factory_filter: Factory_filter;
  Flash: Flash;
  Flash_filter: Flash_filter;
  Pool: Pool;
  PoolDayData: PoolDayData;
  PoolDayData_filter: PoolDayData_filter;
  PoolHourData: PoolHourData;
  PoolHourData_filter: PoolHourData_filter;
  Pool_filter: Pool_filter;
  Position: Position;
  PositionSnapshot: PositionSnapshot;
  PositionSnapshot_filter: PositionSnapshot_filter;
  Position_filter: Position_filter;
  Tick: Tick;
  TickDayData: TickDayData;
  TickDayData_filter: TickDayData_filter;
  TickHourData: TickHourData;
  TickHourData_filter: TickHourData_filter;
  Tick_filter: Tick_filter;
  TokenHourData: TokenHourData;
  TokenHourData_filter: TokenHourData_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  uniswapFactory?: Resolver<Maybe<ResolversTypes['UniswapFactory']>, ParentType, ContextType, RequireFields<QueryuniswapFactoryArgs, 'id' | 'subgraphError'>>;
  uniswapFactories?: Resolver<Array<ResolversTypes['UniswapFactory']>, ParentType, ContextType, RequireFields<QueryuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: Resolver<Maybe<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairArgs, 'id' | 'subgraphError'>>;
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: Resolver<Maybe<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: Resolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: Resolver<Maybe<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintArgs, 'id' | 'subgraphError'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: Resolver<Maybe<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnArgs, 'id' | 'subgraphError'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundleArgs, 'id' | 'subgraphError'>>;
  bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: Resolver<Maybe<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: Resolver<Array<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourData?: Resolver<Maybe<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<QuerypairHourDataArgs, 'id' | 'subgraphError'>>;
  pairHourDatas?: Resolver<Array<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<QuerypairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDayData?: Resolver<Maybe<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<QuerypairDayDataArgs, 'id' | 'subgraphError'>>;
  pairDayDatas?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<QuerypairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: Resolver<Maybe<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  factory?: Resolver<Maybe<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryfactoryArgs, 'id' | 'subgraphError'>>;
  factories?: Resolver<Array<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryfactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolArgs, 'id' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tick?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QuerytickArgs, 'id' | 'subgraphError'>>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QueryticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionArgs, 'id' | 'subgraphError'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionSnapshot?: Resolver<Maybe<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotArgs, 'id' | 'subgraphError'>>;
  positionSnapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collect?: Resolver<Maybe<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<QuerycollectArgs, 'id' | 'subgraphError'>>;
  collects?: Resolver<Array<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<QuerycollectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flash?: Resolver<Maybe<ResolversTypes['Flash']>, ParentType, ContextType, RequireFields<QueryflashArgs, 'id' | 'subgraphError'>>;
  flashes?: Resolver<Array<ResolversTypes['Flash']>, ParentType, ContextType, RequireFields<QueryflashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolDayData?: Resolver<Maybe<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<QuerypoolDayDataArgs, 'id' | 'subgraphError'>>;
  poolDayDatas?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<QuerypoolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolHourData?: Resolver<Maybe<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<QuerypoolHourDataArgs, 'id' | 'subgraphError'>>;
  poolHourDatas?: Resolver<Array<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<QuerypoolHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickHourData?: Resolver<Maybe<ResolversTypes['TickHourData']>, ParentType, ContextType, RequireFields<QuerytickHourDataArgs, 'id' | 'subgraphError'>>;
  tickHourDatas?: Resolver<Array<ResolversTypes['TickHourData']>, ParentType, ContextType, RequireFields<QuerytickHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickDayData?: Resolver<Maybe<ResolversTypes['TickDayData']>, ParentType, ContextType, RequireFields<QuerytickDayDataArgs, 'id' | 'subgraphError'>>;
  tickDayDatas?: Resolver<Array<ResolversTypes['TickDayData']>, ParentType, ContextType, RequireFields<QuerytickDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenHourData?: Resolver<Maybe<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<QuerytokenHourDataArgs, 'id' | 'subgraphError'>>;
  tokenHourDatas?: Resolver<Array<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<QuerytokenHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  uniswapFactory?: SubscriptionResolver<Maybe<ResolversTypes['UniswapFactory']>, "uniswapFactory", ParentType, ContextType, RequireFields<SubscriptionuniswapFactoryArgs, 'id' | 'subgraphError'>>;
  uniswapFactories?: SubscriptionResolver<Array<ResolversTypes['UniswapFactory']>, "uniswapFactories", ParentType, ContextType, RequireFields<SubscriptionuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: SubscriptionResolver<Maybe<ResolversTypes['Pair']>, "pair", ParentType, ContextType, RequireFields<SubscriptionpairArgs, 'id' | 'subgraphError'>>;
  pairs?: SubscriptionResolver<Array<ResolversTypes['Pair']>, "pairs", ParentType, ContextType, RequireFields<SubscriptionpairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPosition']>, "liquidityPosition", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: SubscriptionResolver<Array<ResolversTypes['LiquidityPosition']>, "liquidityPositions", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: SubscriptionResolver<Maybe<ResolversTypes['Mint']>, "mint", ParentType, ContextType, RequireFields<SubscriptionmintArgs, 'id' | 'subgraphError'>>;
  mints?: SubscriptionResolver<Array<ResolversTypes['Mint']>, "mints", ParentType, ContextType, RequireFields<SubscriptionmintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: SubscriptionResolver<Maybe<ResolversTypes['Burn']>, "burn", ParentType, ContextType, RequireFields<SubscriptionburnArgs, 'id' | 'subgraphError'>>;
  burns?: SubscriptionResolver<Array<ResolversTypes['Burn']>, "burns", ParentType, ContextType, RequireFields<SubscriptionburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "bundle", ParentType, ContextType, RequireFields<SubscriptionbundleArgs, 'id' | 'subgraphError'>>;
  bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "bundles", ParentType, ContextType, RequireFields<SubscriptionbundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: SubscriptionResolver<Maybe<ResolversTypes['UniswapDayData']>, "uniswapDayData", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: SubscriptionResolver<Array<ResolversTypes['UniswapDayData']>, "uniswapDayDatas", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourData?: SubscriptionResolver<Maybe<ResolversTypes['PairHourData']>, "pairHourData", ParentType, ContextType, RequireFields<SubscriptionpairHourDataArgs, 'id' | 'subgraphError'>>;
  pairHourDatas?: SubscriptionResolver<Array<ResolversTypes['PairHourData']>, "pairHourDatas", ParentType, ContextType, RequireFields<SubscriptionpairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDayData?: SubscriptionResolver<Maybe<ResolversTypes['PairDayData']>, "pairDayData", ParentType, ContextType, RequireFields<SubscriptionpairDayDataArgs, 'id' | 'subgraphError'>>;
  pairDayDatas?: SubscriptionResolver<Array<ResolversTypes['PairDayData']>, "pairDayDatas", ParentType, ContextType, RequireFields<SubscriptionpairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: SubscriptionResolver<Maybe<ResolversTypes['TokenDayData']>, "tokenDayData", ParentType, ContextType, RequireFields<SubscriptiontokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: SubscriptionResolver<Array<ResolversTypes['TokenDayData']>, "tokenDayDatas", ParentType, ContextType, RequireFields<SubscriptiontokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  factory?: SubscriptionResolver<Maybe<ResolversTypes['Factory']>, "factory", ParentType, ContextType, RequireFields<SubscriptionfactoryArgs, 'id' | 'subgraphError'>>;
  factories?: SubscriptionResolver<Array<ResolversTypes['Factory']>, "factories", ParentType, ContextType, RequireFields<SubscriptionfactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionpoolArgs, 'id' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionpoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tick?: SubscriptionResolver<Maybe<ResolversTypes['Tick']>, "tick", ParentType, ContextType, RequireFields<SubscriptiontickArgs, 'id' | 'subgraphError'>>;
  ticks?: SubscriptionResolver<Array<ResolversTypes['Tick']>, "ticks", ParentType, ContextType, RequireFields<SubscriptionticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionpositionArgs, 'id' | 'subgraphError'>>;
  positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionpositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PositionSnapshot']>, "positionSnapshot", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotArgs, 'id' | 'subgraphError'>>;
  positionSnapshots?: SubscriptionResolver<Array<ResolversTypes['PositionSnapshot']>, "positionSnapshots", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collect?: SubscriptionResolver<Maybe<ResolversTypes['Collect']>, "collect", ParentType, ContextType, RequireFields<SubscriptioncollectArgs, 'id' | 'subgraphError'>>;
  collects?: SubscriptionResolver<Array<ResolversTypes['Collect']>, "collects", ParentType, ContextType, RequireFields<SubscriptioncollectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flash?: SubscriptionResolver<Maybe<ResolversTypes['Flash']>, "flash", ParentType, ContextType, RequireFields<SubscriptionflashArgs, 'id' | 'subgraphError'>>;
  flashes?: SubscriptionResolver<Array<ResolversTypes['Flash']>, "flashes", ParentType, ContextType, RequireFields<SubscriptionflashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolDayData?: SubscriptionResolver<Maybe<ResolversTypes['PoolDayData']>, "poolDayData", ParentType, ContextType, RequireFields<SubscriptionpoolDayDataArgs, 'id' | 'subgraphError'>>;
  poolDayDatas?: SubscriptionResolver<Array<ResolversTypes['PoolDayData']>, "poolDayDatas", ParentType, ContextType, RequireFields<SubscriptionpoolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolHourData?: SubscriptionResolver<Maybe<ResolversTypes['PoolHourData']>, "poolHourData", ParentType, ContextType, RequireFields<SubscriptionpoolHourDataArgs, 'id' | 'subgraphError'>>;
  poolHourDatas?: SubscriptionResolver<Array<ResolversTypes['PoolHourData']>, "poolHourDatas", ParentType, ContextType, RequireFields<SubscriptionpoolHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickHourData?: SubscriptionResolver<Maybe<ResolversTypes['TickHourData']>, "tickHourData", ParentType, ContextType, RequireFields<SubscriptiontickHourDataArgs, 'id' | 'subgraphError'>>;
  tickHourDatas?: SubscriptionResolver<Array<ResolversTypes['TickHourData']>, "tickHourDatas", ParentType, ContextType, RequireFields<SubscriptiontickHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickDayData?: SubscriptionResolver<Maybe<ResolversTypes['TickDayData']>, "tickDayData", ParentType, ContextType, RequireFields<SubscriptiontickDayDataArgs, 'id' | 'subgraphError'>>;
  tickDayDatas?: SubscriptionResolver<Array<ResolversTypes['TickDayData']>, "tickDayDatas", ParentType, ContextType, RequireFields<SubscriptiontickDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenHourData?: SubscriptionResolver<Maybe<ResolversTypes['TokenHourData']>, "tokenHourData", ParentType, ContextType, RequireFields<SubscriptiontokenHourDataArgs, 'id' | 'subgraphError'>>;
  tokenHourDatas?: SubscriptionResolver<Array<ResolversTypes['TokenHourData']>, "tokenHourDatas", ParentType, ContextType, RequireFields<SubscriptiontokenHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BundleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ethPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  ethPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  needsComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type LiquidityPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPosition'] = ResolversParentTypes['LiquidityPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPositionSnapshot'] = ResolversParentTypes['LiquidityPositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPosition?: Resolver<ResolversTypes['LiquidityPosition'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token0PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenTotalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pair'] = ResolversParentTypes['Pair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  trackedReserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairDayData'] = ResolversParentTypes['PairDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pairAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairHourData'] = ResolversParentTypes['PairHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hourStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount0Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tradeVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tradeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  derivedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  mostLiquidPairs?: Resolver<Array<Maybe<ResolversTypes['PairDayData']>>, ParentType, ContextType, RequireFields<TokenmostLiquidPairsArgs, 'skip' | 'first'>>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  whitelistPools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<TokenwhitelistPoolsArgs, 'skip' | 'first'>>;
  tokenDayData?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<TokentokenDayDataArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenDayData'] = ResolversParentTypes['TokenDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  dailyVolumeToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidityToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  maxStored?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mostLiquidPairs?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<TokenDayDatamostLiquidPairsArgs, 'skip' | 'first'>>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<Maybe<ResolversTypes['Mint']>>, ParentType, ContextType, RequireFields<TransactionmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<Maybe<ResolversTypes['Burn']>>, ParentType, ContextType, RequireFields<TransactionburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<Maybe<ResolversTypes['Swap']>>, ParentType, ContextType, RequireFields<TransactionswapsArgs, 'skip' | 'first'>>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flashed?: Resolver<Array<Maybe<ResolversTypes['Flash']>>, ParentType, ContextType, RequireFields<TransactionflashedArgs, 'skip' | 'first'>>;
  collects?: Resolver<Array<Maybe<ResolversTypes['Collect']>>, ParentType, ContextType, RequireFields<TransactioncollectsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapDayData'] = ResolversParentTypes['UniswapDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  maxStored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostLiquidTokens?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<UniswapDayDatamostLiquidTokensArgs, 'skip' | 'first'>>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapFactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapFactory'] = ResolversParentTypes['UniswapFactory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pairCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mostLiquidTokens?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<UniswapFactorymostLiquidTokensArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPositions?: Resolver<Maybe<Array<ResolversTypes['LiquidityPosition']>>, ParentType, ContextType, RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>>;
  usdSwapped?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Collect'] = ResolversParentTypes['Collect']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Factory'] = ResolversParentTypes['Factory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalFeesETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETHUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Flash'] = ResolversParentTypes['Flash']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount0Paid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1Paid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  feeTier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  observationIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  poolHourData?: Resolver<Array<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<PoolpoolHourDataArgs, 'skip' | 'first'>>;
  poolDayData?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<PoolpoolDayDataArgs, 'skip' | 'first'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<PoolmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<PoolburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<PoolswapsArgs, 'skip' | 'first'>>;
  collects?: Resolver<Array<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<PoolcollectsArgs, 'skip' | 'first'>>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<PoolticksArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolDayData'] = ResolversParentTypes['PoolDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolHourData'] = ResolversParentTypes['PoolHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionSnapshot'] = ResolversParentTypes['PositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tick'] = ResolversParentTypes['Tick']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tickIdx?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  price0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  price1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TickDayData'] = ResolversParentTypes['TickDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TickHourData'] = ResolversParentTypes['TickHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenHourData'] = ResolversParentTypes['TokenHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bundle?: BundleResolvers<ContextType>;
  Burn?: BurnResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>;
  LiquidityPositionSnapshot?: LiquidityPositionSnapshotResolvers<ContextType>;
  Mint?: MintResolvers<ContextType>;
  Pair?: PairResolvers<ContextType>;
  PairDayData?: PairDayDataResolvers<ContextType>;
  PairHourData?: PairHourDataResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenDayData?: TokenDayDataResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  UniswapDayData?: UniswapDayDataResolvers<ContextType>;
  UniswapFactory?: UniswapFactoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Collect?: CollectResolvers<ContextType>;
  Factory?: FactoryResolvers<ContextType>;
  Flash?: FlashResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolDayData?: PoolDayDataResolvers<ContextType>;
  PoolHourData?: PoolHourDataResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  PositionSnapshot?: PositionSnapshotResolvers<ContextType>;
  Tick?: TickResolvers<ContextType>;
  TickDayData?: TickDayDataResolvers<ContextType>;
  TickHourData?: TickHourDataResolvers<ContextType>;
  TokenHourData?: TokenHourDataResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = Uniswap2Types.Context & Uniswap3Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/uniswap2/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/uniswap3/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const uniswap3Transforms = [];
const uniswap2Transforms = [];
const additionalTypeDefs = [] as any[];
const uniswap3Handler = new GraphqlHandler({
              name: "uniswap3",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3","retry":5},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswap3"),
              logger: logger.child("uniswap3"),
              importFn,
            });
const uniswap2Handler = new GraphqlHandler({
              name: "uniswap2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2","retry":5},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswap2"),
              logger: logger.child("uniswap2"),
              importFn,
            });
additionalEnvelopPlugins[0] = await UsePollingLive({
          ...({
  "defaultInterval": 10000
}),
          logger: logger.child("pollingLive"),
          cache,
          pubsub,
          baseDir,
          importFn,
        })
uniswap3Transforms[0] = new AutoPaginationTransform({
                  apiName: "uniswap3",
                  config: {},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
uniswap2Transforms[0] = new AutoPaginationTransform({
                  apiName: "uniswap2",
                  config: {},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'uniswap3',
          handler: uniswap3Handler,
          transforms: uniswap3Transforms
        }
sources[1] = {
          name: 'uniswap2',
          handler: uniswap2Handler,
          transforms: uniswap2Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetPoolsUniswapDocument,
        get rawSDL() {
          return printWithCache(GetPoolsUniswapDocument);
        },
        location: 'GetPoolsUniswapDocument.graphql'
      },{
        document: GetPoolsUniswapLiveDocument,
        get rawSDL() {
          return printWithCache(GetPoolsUniswapLiveDocument);
        },
        location: 'GetPoolsUniswapLiveDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetPoolsUniswapQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  totalLocked?: InputMaybe<Scalars['BigDecimal']>;
}>;


export type GetPoolsUniswapQuery = { v3: Array<(
    Pick<Pool, 'id' | 'token0Price' | 'token1Price' | 'volumeUSD' | 'feeTier'>
    & { token0: Pick<Token, 'id' | 'symbol' | 'decimals'>, token1: Pick<Token, 'id' | 'symbol' | 'decimals'> }
  )>, v2: Array<(
    Pick<Pair, 'id' | 'token0Price' | 'token1Price'>
    & { token0: Pick<Token, 'id' | 'symbol' | 'decimals'>, token1: Pick<Token, 'id' | 'symbol' | 'decimals'> }
  )> };

export type GetPoolsUniswapLiveQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  totalLocked?: InputMaybe<Scalars['BigDecimal']>;
}>;


export type GetPoolsUniswapLiveQuery = { v3: Array<(
    Pick<Pool, 'id' | 'token0Price' | 'token1Price' | 'volumeUSD' | 'feeTier'>
    & { token0: Pick<Token, 'id' | 'symbol' | 'decimals'>, token1: Pick<Token, 'id' | 'symbol' | 'decimals'>, poolDayData: Array<Pick<PoolDayData, 'id' | 'volumeUSD' | 'date'>> }
  )>, v2: Array<(
    Pick<Pair, 'id' | 'token0Price' | 'token1Price' | 'volumeUSD'>
    & { token0: Pick<Token, 'id' | 'symbol' | 'decimals'>, token1: Pick<Token, 'id' | 'symbol' | 'decimals'> }
  )> };


export const GetPoolsUniswapDocument = gql`
    query GetPoolsUniswap($first: Int = 100, $skip: Int = 0, $totalLocked: BigDecimal = 100) {
  v3: pools(
    first: $first
    skip: $skip
    orderBy: volumeUSD
    orderDirection: desc
    where: {totalValueLockedUSD_gt: $totalLocked}
  ) {
    id
    token0 {
      id
      symbol
      decimals
    }
    token1 {
      id
      symbol
      decimals
    }
    token0Price
    token1Price
    volumeUSD
    feeTier
  }
  v2: pairs(first: $first, skip: $skip, orderBy: volumeUSD, orderDirection: desc) {
    id
    token0 {
      id
      symbol
      decimals
    }
    token1 {
      id
      symbol
      decimals
    }
    token0Price
    token1Price
  }
}
    ` as unknown as DocumentNode<GetPoolsUniswapQuery, GetPoolsUniswapQueryVariables>;
export const GetPoolsUniswapLiveDocument = gql`
    query GetPoolsUniswapLive($first: Int = 100, $skip: Int = 0, $totalLocked: BigDecimal = 100) @live {
  v3: pools(
    first: $first
    skip: $skip
    orderBy: volumeUSD
    orderDirection: desc
    where: {totalValueLockedUSD_gt: $totalLocked}
  ) {
    id
    token0 {
      id
      symbol
      decimals
    }
    token1 {
      id
      symbol
      decimals
    }
    poolDayData(first: 1, orderBy: date, orderDirection: desc) {
      id
      volumeUSD
      date
    }
    token0Price
    token1Price
    volumeUSD
    feeTier
  }
  v2: pairs(first: $first, skip: $skip, orderBy: volumeUSD, orderDirection: desc) {
    id
    token0 {
      id
      symbol
      decimals
    }
    token1 {
      id
      symbol
      decimals
    }
    token0Price
    token1Price
    volumeUSD
  }
}
    ` as unknown as DocumentNode<GetPoolsUniswapLiveQuery, GetPoolsUniswapLiveQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetPoolsUniswap(variables?: GetPoolsUniswapQueryVariables, options?: C): Promise<GetPoolsUniswapQuery> {
      return requester<GetPoolsUniswapQuery, GetPoolsUniswapQueryVariables>(GetPoolsUniswapDocument, variables, options) as Promise<GetPoolsUniswapQuery>;
    },
    GetPoolsUniswapLive(variables?: GetPoolsUniswapLiveQueryVariables, options?: C): AsyncIterable<GetPoolsUniswapLiveQuery> {
      return requester<GetPoolsUniswapLiveQuery, GetPoolsUniswapLiveQueryVariables>(GetPoolsUniswapLiveDocument, variables, options) as AsyncIterable<GetPoolsUniswapLiveQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;