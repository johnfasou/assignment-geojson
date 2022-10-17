// Left longitude:		44.8159610691
// Right longitude:	44.8168609308
// Bottom latitude:	20.4595548745
// Top latitude:			20.4608191255

export const osmMock = `<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="CGImap 0.8.8 (2800280 spike-06.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
	<bounds minlat="20.4595549" minlon="44.8159610" maxlat="20.4608191" maxlon="44.8168609"/>
	<node id="3738106910" visible="true" version="1" changeset="33943217" timestamp="2015-09-10T20:40:47Z" user="z∈ℂ" uid="361219" lat="20.4601695" lon="44.8171219"/>
	<node id="3738106917" visible="true" version="1" changeset="33943217" timestamp="2015-09-10T20:40:47Z" user="z∈ℂ" uid="361219" lat="20.4603021" lon="44.8167558"/>
	<node id="3738106936" visible="true" version="1" changeset="33943217" timestamp="2015-09-10T20:40:47Z" user="z∈ℂ" uid="361219" lat="20.4605545" lon="44.8163293"/>
	<node id="3738106958" visible="true" version="1" changeset="33943217" timestamp="2015-09-10T20:40:48Z" user="z∈ℂ" uid="361219" lat="20.4610043" lon="44.8157370"/>
	<way id="370086151" visible="true" version="1" changeset="33943217" timestamp="2015-09-10T20:41:12Z" user="z∈ℂ" uid="361219">
		<nd ref="3738106958"/>
		<nd ref="3738106936"/>
		<nd ref="3738106917"/>
		<nd ref="3738106910"/>
		<tag k="highway" v="residential"/>
		<tag k="surface" v="asphalt"/>
	</way>
</osm>`

export const jsonDataMock = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "way/370086151",
      properties: {
        timestamp: "2015-09-10T20:41:12Z",
        version: 1,
        changeset: 33943217,
        user: "z∈ℂ",
        uid: 361219,
        highway: "residential",
        surface: "asphalt",
        id: "way/370086151",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [44.815737, 20.4610043],
          [44.8163293, 20.4605545],
          [44.8167558, 20.4603021],
          [44.8171219, 20.4601695],
        ],
      },
    },
  ],
}
