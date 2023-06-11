export interface ShipmentData {
  shipment_id: string
  client_reference: string
  status: string
  country: string
  postcode: string
  traces: Array<Trace>
}

export interface Trace {
  time: string
  info: string
  station: string
}

export interface Status {
  shipment_id: string
  client_reference: string
  status: string
  country: string
  postcode: string
}
