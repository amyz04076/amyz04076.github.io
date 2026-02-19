const vis1 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    data: {
        url: "videogames_wide.csv",
    },

    mark: "bar",

    encoding: {
        x: {
            field: "Platform",
            type: "nominal",
            title: "Platform",
        },

        y: {
            aggregate: "sum",
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales (Millions)",
        },

        color: {
            field: "Genre",
            type: "nominal",
            title: "Genre",
        },
    },
};

vegaEmbed("#vis1", vis1);

const vis2 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    data: {
        url: "videogames_wide.csv",
    },

    mark: "bar",

    encoding: {
        x: {
            field: "Genre",
            type: "nominal",
            title: "Genre",
        },

        y: {
            aggregate: "sum",
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales (Millions)",
        },
    },
};

vegaEmbed("#vis2", vis2);

const vis3 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    data: { url: "videogames_wide.csv" },

    mark: "rect",

    encoding: {
        x: { field: "Platform", type: "nominal" },
        y: { field: "Genre", type: "nominal" },

        color: {
            aggregate: "sum",
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales",
        },
    },
    config: {
        axis: { grid: "true", tickBand: "extent" }
    }
};


vegaEmbed("#vis3", vis3);

const highlight = {
    type: "single",
    on: "mouseover",
    fields: ["Genre"],
    empty: "none",
};

const vis4 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    data: {
        url: "videogames_wide.csv",
    },

    transform: [{ filter: "datum.Year != null" }],

    encoding: {
        x: {
            field: "Year",
            type: "ordinal",
            sort: "ascending",
            title: "Year",
        },

        y: {
            aggregate: "sum",
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales (Millions)",
        },

        color: {
            field: "Genre",
            type: "nominal",
            title: "Genre",
        },
    },

    layer: [
        {
            mark: {
                type: "line",
                strokeWidth: 2,
            },
        },
        {
            mark: {
                type: "point",
                filled: "true",
            },
            encoding: {
                tooltip: [
                    { field: "Genre", type: "nominal" },
                    { field: "Year", type: "ordinal" },
                    {
                        aggregate: "sum",
                        field: "Global_Sales",
                        type: "quantitative",
                        title: "Total Sales",
                    },
                ],
            },
        },
    ],


};

vegaEmbed("#vis4", vis4);

const vis5 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    layer: [
        {
            data: { url: "videogames_wide.csv" },

            transform: [
                { filter: "datum.Year != null" },
                {
                    aggregate: [
                        { op: "sum", field: "Global_Sales", as: "MeanSales" }
                    ],
                    groupby: ["Year", "Platform"]
                },
                {
                    aggregate: [
                        { op: "mean", field: "MeanSales", as: "FinalMean" }
                    ],
                    groupby: ["Year"]
                }
            ],

            mark: {
                type: "line",
                strokeWidth: 3,
                point: true
            },

            encoding: {
                x: { field: "Year", type: "ordinal" },
                y: {
                    field: "FinalMean",
                    type: "quantitative",
                    title: "Mean Global Sales (Millions)"
                },
                color: { value: "#1fb421" },
                tooltip: [
                    { field: "Year", type: "ordinal" },
                    { field: "FinalMean", type: "quantitative", title: "Platform Mean" }
                ]
            }
        },
        {
            data: { url: "videogames_wide.csv" },

            transform: [
                { filter: "datum.Year != null" },
                {
                    aggregate: [
                        { op: "sum", field: "Global_Sales", as: "MeanSales" }
                    ],
                    groupby: ["Year", "Genre"]
                },
                {
                    aggregate: [
                        { op: "mean", field: "MeanSales", as: "FinalMean" }
                    ],
                    groupby: ["Year"]
                }
            ],

            mark: {
                type: "line",
                strokeWidth: 3,
                point: true
            },

            encoding: {
                x: { field: "Year", type: "ordinal" },
                y: { field: "FinalMean", type: "quantitative" },
                color: { value: "#0e46ff" },
                tooltip: [
                    { field: "Year", type: "ordinal" },
                    { field: "FinalMean", type: "quantitative", title: "Genre Mean" },
                ]
            }
        }
    ]

};

vegaEmbed("#vis5", vis5);

const vis6 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    data: {
        url: "videogames_wide.csv",
    },

    transform: [{ filter: "datum.Year != null" }],

    encoding: {
        x: {
            field: "Year",
            type: "ordinal",
            sort: "ascending",
            title: "Year",
        },

        y: {
            aggregate: "sum",
            field: "Global_Sales",
            type: "quantitative",
            title: "Total Global Sales (Millions)",
        },

        color: {
            field: "Platform",
            type: "nominal",
            title: "Platform",
        },
    },

    layer: [
        {
            mark: {
                type: "line",
                strokeWidth: 2,
            },
        },
        {
            mark: {
                type: "point",
                filled: "false",
            },
            encoding: {
                tooltip: [
                    { field: "Platform", type: "nominal" },
                    { field: "Year", type: "ordinal" },
                    {
                        aggregate: "sum",
                        field: "Global_Sales",
                        type: "quantitative",
                        title: "Total Sales",
                    },
                ],
            },
        },
    ],


};

vegaEmbed("#vis6", vis6);


const vis7 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  width: 700,
  height: 400,

  data: {
    url: "videogames_long.csv"
  },

  transform: [
    {
      aggregate: [
        { op: "sum", field: "sales_amount", as: "total_sales" }
      ],
      groupby: ["platform", "sales_region"]
    }
  ],

  mark: "bar",

  encoding: {
    x: {
      field: "platform",
      type: "nominal",
      title: "Platform"
    },

    y: {
      field: "total_sales",
      type: "quantitative",
      title: "Total Sales (Millions)"
    },

    color: {
      field: "sales_region",
      type: "nominal",
      title: "Region"
    },

    xOffset: {
      field: "sales_region"
    },

    tooltip: [
      { field: "platform", type: "nominal" },
      { field: "sales_region", type: "nominal" },
      { field: "total_sales", type: "quantitative" }
    ]
  }
};

vegaEmbed("#vis7", vis7);


const vis8 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  width: 500,
  height: 400,

  data: {
    url: "videogames_long.csv"
  },

  transform: [
    {
      calculate: `
        indexof(["3DS","DS","Wii","WiiU","NES","SNES","PS","PS2","PS3","PS4","PSP","PSV"], datum.platform) >= 0 
        ? "Japan" :
        indexof(["X360","XOne","XB"], datum.platform) >= 0
        ? "North America"
        : "Other"
      `,
      as: "origin"
    },

    {
      calculate: `
        (datum.origin === "Japan" && datum.sales_region === "jp_sales") ||
        (datum.origin === "North America" && datum.sales_region === "na_sales")
        ? "Home Region"
        : "Non-Home Region"
      `,
      as: "region_match"
    },

    {
      filter: "datum.origin !== 'Other'"
    },

    {
      aggregate: [
        { op: "sum", field: "sales_amount", as: "total_sales" }
      ],
      groupby: ["origin", "region_match"]
    }

  ],

  mark: "bar",

  encoding: {

    x: {
      field: "origin",
      type: "nominal",
      title: "Platform Origin"
    },

    y: {
      field: "total_sales",
      type: "quantitative",
      title: "Total Sales (Millions)"
    },

    color: {
      field: "region_match",
      type: "nominal",
      title: "Sales Type"
    },

    xOffset: {
      field: "region_match"
    },

    tooltip: [
      { field: "origin" },
      { field: "region_match" },
      { field: "total_sales" }
    ]
  }
};

vegaEmbed("#vis8", vis8);


const vis9 = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",

    width: 800,

    data: {
        url: "videogames_wide.csv",
    },


    transform: [{ filter: "datum.Year != null" }, { filter: "datum.Genre != 'Shooter'" }],

    encoding: {
        x: {
            field: "Year",
            type: "ordinal",
            sort: "ascending",
            title: "Year",
        },

        y: {
            aggregate: "sum",
            field: "NA_Sales",
            type: "quantitative",
            title: "Total NA Sales (Millions)",
        },

   
    },

    layer: [
        {
            mark: {
                type: "line",
                strokeWidth: 2,
            },
        },
        {
            mark: {
                type: "point",
                filled: "false",
            },
            encoding: {
                tooltip: [
                   
                    { field: "Year", type: "ordinal" },
                    {
                        aggregate: "sum",
                        field: "NA_Sales",
                        type: "quantitative",
                        title: "NA Sales",
                    },
                ],
            },
        },
    ],


};

vegaEmbed("#vis9", vis9);


const vis10 = {
   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 800,
  data: {
    url: "videogames_wide.csv",
  },

  transform: [
    { filter: "datum.Genre == 'Shooter'" },    {
         filter: "datum.Name != null" },    
  ],

  mark: {
    type: "circle",
    size: 100
  },

  encoding: {
    x: {
      field: "Year",
      type: "ordinal",
      sort: "ascending",
      title: "Release Year"
    },
    y: {
      aggregate: "count",  
      type: "quantitative",
      title: null,
        axis: null 
     
    },
 
    tooltip: [
      { field: "Name", type: "ordinal", title: "Name" },
      { field: "Year", type: "ordinal", title: "Release Year" },
            {  aggregate: "sum",
            field: "NA_Sales",
            type: "quantitative",
            title: "NA Sales (Millions)", }
    ]
  },


};

vegaEmbed("#vis10", vis10);
