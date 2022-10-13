import axios from "axios"
import { osmApiUrl } from "../constants"
import { GeoBoxType } from "../types"

export const fetchOSMData = async (GeoBox: GeoBoxType): Promise<any> => {
  const fullUrl = `${osmApiUrl}?bbox=${GeoBox.left},${GeoBox.bottom},${GeoBox.right},${GeoBox.top}`

  try {
    const osm = await axios.get(fullUrl)
    return osm.data
  } catch (error) {
    console.log("Error: ", error) // TBI:  To be implemented
  }
}
