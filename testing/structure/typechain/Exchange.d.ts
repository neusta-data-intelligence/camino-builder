/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ExchangeInterface extends ethers.utils.Interface {
  functions: {
    "claimed(address)": FunctionFragment;
    "swap(uint256)": FunctionFragment;
    "tokenA()": FunctionFragment;
    "tokenB()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(functionFragment: "swap", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "tokenA", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenB", values?: undefined): string;

  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenB", data: BytesLike): Result;

  events: {};
}

export class Exchange extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ExchangeInterface;

  functions: {
    claimed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    swap(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenA(overrides?: CallOverrides): Promise<[string]>;

    tokenB(overrides?: CallOverrides): Promise<[string]>;
  };

  claimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  swap(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenA(overrides?: CallOverrides): Promise<string>;

  tokenB(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    swap(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    tokenA(overrides?: CallOverrides): Promise<string>;

    tokenB(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenA(overrides?: CallOverrides): Promise<BigNumber>;

    tokenB(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
