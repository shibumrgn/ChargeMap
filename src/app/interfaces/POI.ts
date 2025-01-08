export interface POI {
  DataProvider: {
    WebsiteURL: string;
    Comments: string;
    DataProviderStatusType: {
      IsProviderEnabled: boolean;
      ID: number;
      Title: string;
    };
    IsRestrictedEdit: boolean;
    IsOpenDataLicensed: boolean;
    IsApprovedImport: boolean;
    License: string;
    DateLastImported: string;
    ID: number;
    Title: string;
  };
  StatusType: {
    IsOperational: boolean;
    IsUserSelectable: boolean;
    ID: number;
    Title: string;
  };
  SubmissionStatus: {
    IsLive: boolean;
    ID: number;
    Title: string;
  };
  IsRecentlyVerified: boolean;
  DateLastVerified: string;
  ID: number;
  UUID: string;
  DataProviderID: number;
  DataProvidersReference: string;
  StatusTypeID: number;
  DateLastStatusUpdate: string;
  AddressInfo: {
    ID: number;
    Title: string;
    AddressLine1: string;
    AddressLine2: string;
    Town: string;
    StateOrProvince: string;
    Postcode: string;
    CountryID: number;
    Country: {
      ISOCode: string;
      ContinentCode: string;
      ID: number;
      Title: string;
    };
    Latitude: number;
    Longitude: number;
    ContactTelephone1: string;
    ContactTelephone2: string;
    ContactEmail: string;
    AccessComments: string;
    RelatedURL: string;
    Distance: number;
    DistanceUnit: number;
  };
  Connections: Array<{
    ID: number;
    ConnectionTypeID: number;
    ConnectionType: {
      FormalName: string;
      IsDiscontinued: boolean;
      IsObsolete: boolean;
      ID: number;
      Title: string;
    };
    Reference: string;
    StatusTypeID: number;
    StatusType: {
      IsOperational: boolean;
      IsUserSelectable: boolean;
      ID: number;
      Title: string;
    };
    LevelID: number;
    Level: {
      Comments: string;
      IsFastChargeCapable: boolean;
      ID: number;
      Title: string;
    };
    Amps: number;
    Voltage: number;
    PowerKW: number;
    CurrentTypeID: number;
    CurrentType: {
      Description: string;
      ID: number;
      Title: string;
    };
    Quantity: number;
    Comments: string;
  }>;
  NumberOfPoints: number;
  GeneralComments: string;
  DatePlanned: string;
  DateLastConfirmed: string;
  MetadataValues: Array<{
    ID: number;
    MetadataFieldID: number;
    ItemValue: string;
    MetadataFieldOption: string;
    MetadataFieldOptionID: number;
  }>;
  DataQualityLevel: number;
  DateCreated: string;
  SubmissionStatusTypeID: number;
  UsageCost: string;
}
