import { GeoBoxType } from "../../types"

const latRegex = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/
const lonRegex = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/

export const formValidators = (geoBox: GeoBoxType): string => {
  if (!geoBox.bottom || !geoBox.left || !geoBox.right || !geoBox.top) {
    return "Please enter all Coordinates"
  }
  if (
    !latRegex.test(geoBox.top) ||
    !latRegex.test(geoBox.bottom) ||
    !latRegex.test(geoBox.left) ||
    !latRegex.test(geoBox.right)
  ) {
    return "Please enter valid Coordinates"
  }
  if (parseFloat(geoBox.top) < parseFloat(geoBox.bottom)) {
    return "Top latitude should be bigger than Bottom latitude"
  }
  if (parseFloat(geoBox.left) > parseFloat(geoBox.right)) {
    return "Right longitude should be bigger than Left longitude"
  }

  return ""
}
