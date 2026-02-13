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
        axis: {grid: "true", tickBand: "extent"}
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