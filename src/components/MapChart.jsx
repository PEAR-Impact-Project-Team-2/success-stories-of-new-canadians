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
            let correctNode = coordData.allCountryCentroidsAz8Csv.edges.filter(function (edge) {
                return edge.node.name == cName;
            });
            console.log(correctNode['0'].node.Longitude)
            if (correctNode != []) {
                countryObj['coordinates'] = []
                countryObj['coordinates'].push(correctNode['0'].node.Longitude)
                countryObj['coordinates'].push(correctNode['0'].node.Latitude)
                markers.push(countryObj)
            }
        }
    })
    console.log(markers)

    return (
        <div>
            <ComposableMap
                style={{
                    width: '100%',
                    height: '125vh'
                }}
                projection="geoMercator"
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies
                            .map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#5A0001"
                                    stroke="#22181C"
                                    strokeWidth="0.5px"
                                />
                            ))
                    }
                </Geographies>
                {markers.map(({ country, coordinates }) => (
                    <Marker key={country} coordinates={coordinates}>
                        <g
                            fill="none"
                            stroke="#F45B69"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                        >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </g>
                    </Marker>
                ))}

            </ComposableMap>
        </div>)
}