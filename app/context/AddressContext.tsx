import React, { createContext, useContext, useState, ReactNode } from "react";

type MarkerPosition = {
  latitude: number;
  longitude: number;
};

type AddressContextType = {
  address: string;
  setAddress: (address: string) => void;
  markerPosition: MarkerPosition | null;
  setMarkerPosition: (markerPosition: MarkerPosition | null) => void;
};

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error("useAddress must be used within an AddressProvider");
  }
  return context;
};

type AddressProviderProps = {
  children: ReactNode;
};

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}) => {
  const [address, setAddress] = useState<string>("");
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition | null>(
    null
  );

  return (
    <AddressContext.Provider
      value={{ address, setAddress, markerPosition, setMarkerPosition }}
    >
      {children}
    </AddressContext.Provider>
  );
};
