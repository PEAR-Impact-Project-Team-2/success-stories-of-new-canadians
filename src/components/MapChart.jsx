import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import { useStaticQuery, graphql } from "gatsby"


export default function MapChart() {
    const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


    const coordData = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "story-page"}}}) {
            edges {
              node {
                frontmatter {
                  country
                }
              }
            }
          }
          allCountryCentroidsAz8Csv {
            edges {
              node {
                name
                Longitude
                Latitude
              }
            }
          }
    }`)
    const markers = [];
    coordData.allMarkdownRemark.edges.forEach(({ node }, i) => {
        let cName = node.frontmatter.country
        let countryObj = {}
        const found = markers.some(el => el.country === cName);
        if (!found) {
            countryObj['country'] = cName;
            let correctNode = coordData.allCountryCentroidsAz8Csv.edges.filter(function(edge) {
                return edge.node.name == cName;
            });
            console.log(correctNode)
            if (correctNode != []) {
                countryObj['coordinates'] = []
                countryObj['coordinates'].push(correctNode['Longitude'])
                countryObj['coordinates'].push(correctNode['Latitude'])
                markers.push(countryObj)
            }
        }
    })
    console.log(markers)

    return (
        <ComposableMap
            style={{
                width: '50%',
                height: '65%'
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies
                        .map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                            />
                        ))
                }
            </Geographies>
            {markers.map(({ country, coordinates }) => (
                <Marker key={country} coordinates={coordinates}>
                    <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                    <text
                        textAnchor="middle"
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        {country}
                    </text>
                </Marker>
            ))}
        </ComposableMap>)
}