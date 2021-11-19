
export interface DecisionMakerModel {
    id?: any;
    title?: any;
    selected?: any;
    style?: any;
    emitCloseUserTradingPopup: (arg: any) => void;
}

export interface InfoItemModel{
    enhanced?: any;
}

export interface InfoSectionModel{
    section?: any;
    type?: any;
}

export interface ButtonModel{
    active?: any;
}

export interface PageModel{
    page?: any;
    active?: any;
    direction?: any;
}