export interface IWhere {
  fromDate?: Date;
  toDate?: Date;
}

export interface IDataContext {
  states: IStates;
  actions: IActions;
}

export interface IStates {
  where: IWhere;
}

export interface IActions {
  setWhere: React.Dispatch<React.SetStateAction<IWhere>>;
}