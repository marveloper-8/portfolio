
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
    back?: any;
}

export interface PageModel{
    page?: any;
    active?: any;
    direction?: any;
    buttonAction?: any;
    goBack?: any;
    goExperience?: any;
    goProjects?: any;
    goCertificates?: any;
    goOrganisations?: any
}

export interface AboutModel{
    title?: any;
    content?: any;
    academy?: any;
}

export interface ProjectItemModel{
    org?: any;
    role?: any;
    desc?: any;
    tech?: any;
    link?: any;
    title?: any;
    items?: any;
}

export interface LinkIconModel{
    active?: any;
}