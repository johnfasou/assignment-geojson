import osmtogeojson from "osmtogeojson"

export const convertOsmToJson = (osmData: string): any => {
  let jsonData = osmtogeojson(osmData)
  return jsonData
}
