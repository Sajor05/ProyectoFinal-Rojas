export const dataCollection = () => { 
    
    const req = [
                    {
                        "mainCategory":"Bebidas",
                        "categories":
                        [
                            {
                                "title":"Café calientes",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {"mainCategory":"Lattes",},
                                    {"mainCategory":"Cappuccinos",},
                                    {"mainCategory":"Flat White"},
                                    {"mainCategory":"Americanos"},
                                    {"mainCategory":"Macchiatos"},
                                    {"mainCategory":"Mochas"},
                                    {"mainCategory":"Café filtrado"}
                                ]
                            },
                            {
                                "title":"Café helados",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Caramel%20Macchiato%20425x425%20sin%20fondo_0.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {"mainCategory":"Shaken Espresso",},
                                    {"mainCategory":"Macchiatos",},
                                    {"mainCategory":"Cappuccinos"},
                                    {"mainCategory":"Lattes"},
                                    {"mainCategory":"Cold Brews"},
                                    {"mainCategory":"Americanos"},
                                    {"mainCategory":"Mochas"},
                                    {"mainCategory":"Café filtrado"}
                                ]
                            },
                            {
                                "title":"Frappuccino",
                                "image":"",
                                "categories":[
                                    {"mainCategory":"Frappuccino con café",
                                     "products":[
                                        {
                                            "title":"Café Frappuccino",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCafe%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Frappuccino a base de café. Dulce y cremosa combinación de café, leche y hielo."
                                        },
                                        {
                                            "title":"Caramel Frappuccino",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FWhite%20Mocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Frappuccino a base de café. Dulce combinación de caramelo, café, leche y hielo, decorado con un remolino de crema batida y topping de caramelo."
                                        },
                                        {
                                            "title":"Mocha Blanco Frappuccino",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCaramel%20Frapp%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Frappuccino a base de café. Deliciosa mezcla que combina café, leche y chocolate blanco, batido con hielo, coronado con crema batida y salsa de mocha."
                                        },
                                        {
                                            "title":"Mocha Frappuccino",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Frappuccino a base de café. Deliciosa mezcla que combina café, leche y chocolate, batido con hielo, coronado con crema batida y salsa de mocha."
                                        }
                                     ]
                                    },
                                    {"mainCategory":"Frappuccino sin café",
                                     "products":[
                                        {
                                            "title":"Chai Frappuccino",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FWhite%20Mocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Nuestro Té Chai combinado con leche, hielo molido y una deliciosa terminación de crema batida."
                                        },
                                        {
                                            "title":"Mocha Creme Frappuccino",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20Frapp%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Frappuccino a base de crema. Perfecta combinación a base de crema y chocolate, batida con hielo, decorada con crema batida y salsa de chocolate."
                                        }
                                     ]
                                    }
                                ]
                            },
                            {
                                "title":"Té caliente",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEnglish%20Breakfast%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {"mainCategory":"Té verde",
                                     "products":[
                                        {
                                            "title":"Mint Citrus",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMint%20Citrus%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"La base de hierbabuena de este té se complementa con notas de menta fresca y toques de verbena dulce y especiada."
                                        }
                                     ]
                                    },
                                    {"mainCategory":"Té Chai",
                                     "products":[
                                        {
                                            "title":"Chai",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChai%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Deliciosa combinación de té y especias, al estilo de los habitantes del Himalaya. Una intensa infusión de canela, jengibre, cardamomo, pimienta negra y anís estrellado."
                                        },
                                        {
                                            "title":"Chai Latte",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChai%20Latte%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Nuestro mezcla de té chai y leche perfectamente vaporizada, decorado con una sutil capa de espuma de leche."
                                        }
                                     ]
                                    },
                                    {"mainCategory":"Infusiones",
                                     "products":[
                                        {
                                            "title":"Youthberry",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FYouthberry%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Una mezcla de té blanco cítrico con toques brillantes de sabor tropical. Con mango, naranja, hibisco y pétalos de rosa. Hay un toque de paraíso en cada sorbo de esta fantástica mezcla."
                                        },
                                        {
                                            "title":"Hibiscus",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FYouthberry%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Las flores de hibisco impregnan esta infusión de una ligera acidez y un extraordinario color rojizo. Brillantes sabores tropicales de papaya y mango con hierba limón cítrica y una pizca de canela."
                                        },
                                     ]
                                    },
                                    {"mainCategory":"Té Negro",
                                     "products":[
                                        {
                                            "title":"Earl Grey",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FYouthberry%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Una brillante mezcla de tés negros de Sri Lanka con una aromática esencia de bergamota y lavanda."
                                        },
                                        {
                                            "title":"English Breakfast",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FYouthberry%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Mezcla de tés negros: Assam de la India, Ceilán de Sri Lanka y té negro de China. Los tés de Assam añaden toques profundos de malta y té negro y un rico aroma a caramelo. Los tés de Ceilán aportan un sabor brillante y completo, mientras que los de China tienen un sutil toque como recién recién horneado, lo cual hace del English Breakfast una opción única."
                                        },
                                     ]
                                    }
                                ]
                            },
                            {
                                "title":"Té helado",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTe%20Verde%20Frutilla%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {"mainCategory":"Té Herbal helado",
                                     "products":[
                                        {
                                            "title":"Shaken Lemonade Hibiscus",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMint%20Citrus%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Nuestro té de hibiscus combinado con limón y mezclado con hielo."
                                        }
                                     ]
                                    },
                                    {"mainCategory":"Té Verde helado",
                                     "products":[
                                        {
                                            "title":"Shaken Lemonade Green Tea",
                                            "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Green%20Lemon%20Tea%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                            "description":"Nuestro té verde combinado con limón y mezclado con hielo."
                                        }
                                     ]
                                    }
                                ]
                            },
                            {
                                "title":"Heladas",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMango%20Dragonfruit%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {
                                        "mainCategory":"Refreshers",
                                        "products":[
                                            {
                                                "title":"Mango DragonFruit Limonada",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMango%20Dragonfruit%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                                            },
                                            {
                                                "title":"Dragon Drink",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FDragon%20Drink%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Jugos, aguas y bebidas saborizadas",
                                        "products":[
                                            {
                                                "title":"Jugo de manzana",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Green%20Lemon%20Tea%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title":"Calientes",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate%20Caliente%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {
                                        "mainCategory":"Chocolates",
                                        "products":[
                                            {
                                                "title":"Chocolate Caliente",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChocolate%20Caliente%20425x425%20sin%20fondo%20(1).png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop"
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "mainCategory":"Comida",
                        "categories":[
                            {
                                "title":"Bakery",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-Relleno-Avellana-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {"mainCategory":"Recién horneados",},
                                    {"mainCategory":"Croissants, Rolls & más",},
                                    {"mainCategory":"Salados"},
                                    {"mainCategory":"Muffins"},
                                    {"mainCategory":"Budines"},
                                    {"mainCategory":"Tortas"}
                                ]
                            },
                            {
                                "title":"Sándwich & preparados",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBagel-Sandwich-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {
                                        "mainCategory":"Sándwichs & más",
                                        "products":[
                                            {
                                                "title":"Sándwich con Jamón y Queso en Pan Artesanal",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSand-JyQ-Gluten-Free-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Focaccia Caprese",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFocaccia-Caprese-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"sándwich Pollo Multicereal",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSand-Pollo-Multi-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Bagel Sándwich",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBagel-Sandwich-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Sándwich Tres quesos",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSand-3-Quesos-ARG-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Croque Monsieur",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroque-Monsieur-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Tostado de jamón y queso",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTostado-JyQ-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Tarta de Puerro",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTarta-Puerro-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                            {
                                                "title":"Tarta de Calabaza",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FTarta-Calabaza-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Con un suave y aireado pan artesanal relleno de jamón y queso, este sándwich es una deliciosa opción gluten free."
                                            },
                                        ]
                                    },
                                    {"mainCategory":"Ensaladas & Wraps"}
                                ]
                            },
                            {
                                "title":"Snacks",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMoneda-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {
                                        "mainCategory":"Frutos secos & más",
                                        "products":[
                                            {
                                                "title":"Porridge Avena Chocolate y Maní",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FPorridge-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Avena, maní y chocolate en una cremosa mezcla con tu leche o bebida vegetal favorita."
                                            },
                                            {
                                                "title":"Mix de Frutos Secos",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMix-frutos-secos-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Mezcla de chips de banana, castañas, nueces, pasas de uva morenas y rubias."
                                            },
                                            {
                                                "title":"Barra de Cereal Almendras",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBarra-Almendras-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Barra dulce de cereales con almendras."
                                            },
                                        ]
                                    },
                                    {
                                        "mainCategory":"Chocolates",
                                        "products":[
                                            {
                                                "title":"Moneda de Chocolate",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMoneda-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Moneda de chocolate con leche."
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Biscotti & Cookies",
                                        "products":[
                                            {
                                                "title":"Biscotti con Castañas",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FBarra-Castanias-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Moneda de chocolate con leche."
                                            },
                                            {
                                                "title":"Cookie Super Chocolate",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCookie-Chocolate-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Moneda de chocolate con leche."
                                            },
                                            {
                                                "title":"Cookie Chips y Pecan",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCookie-Chips-Pecan-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Moneda de chocolate con leche."
                                            },
                                            {
                                                "title":"Cookie Limón y Jengibre",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2F_Cookie-Limon-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Moneda de chocolate con leche."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "mainCategory":"En casa",
                        "categories":[
                            {
                                "title":"Café en granos",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2024-04%2FVERONA_MEDIA_LIBRA.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {
                                        "mainCategory":"Tostado Blonde",
                                        "products":[
                                            {
                                                "title":"Nicaragua Single Origin",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FNicaragua-Single-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Café de tostado suave con notas dulces de melón, la frescura del limón y frutos secos."
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Tostado Medio",
                                        "products":[
                                            {
                                                "title":"Guatemala Casi Cielo",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCasi-Cielo-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Este café de origen es una celebración de toda la magia de los fértiles valles de Antigua en Guatemala. De tostado y cuerpo medio, tiene un brillo seductor similar al del limón y notas de chocolate suave."
                                            },
                                            {
                                                "title":"Café Colombia",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FColombia-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Café de origen, su tostado y cuerpo es medio con sutiles sabores a frutos secos y hierbas frescas. Acompañá tu café con un complemento de chocolate o caramelo."
                                            },
                                            {
                                                "title":"Café Pike Place",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FPike-Place-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Este café conmemora nuestra primera tienda en el Pike Place Market de Seattle. Un café que es nuestra identidad: una mezcla suave y equilibrada de granos de Latinoamérica con sabores sutilmente intensos a cacao y a frutos secos tostados. Disfrutalo con un Chocolate Croissant o con un Muffin de Choco Chips. Contenido: 250gr."
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Tostado Oscuro",
                                        "products":[
                                            {
                                                "title":"Café Sumatra",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSumatra-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Café de origen con tostado oscuro, cuerpo completo y consistente. Su sabor predominante es terroso y herbal. Acompañá tu café con un complemento de canela, avena o queso. Probalo con nuestro Scon de 4 quesos!"
                                            },
                                            {
                                                "title":"Café Verona",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FVerona-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Blend de granos de Latinoamérica e Indonesia. Es un café de tostado oscuro con sabores a cacao negro y dulce. Acompañá tu café con un complemento de chocolate, nueces, caramelo o especias. Contenido: 250 g"
                                            },
                                            {
                                                "title":"Café Espresso Roast",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEspresso-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Blend de granos de Latinoamérica con un tostado oscuro. Es el corazón de todas nuestras bebidas que podes tener en tu casa. Su sabor es intenso, dulce y acaramelado, ideal para acompañarlo con un complemento de chocolate, nueves, caramelo o especias."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "title":"Té",
                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FCAJA-TE-HIBISCUS_2.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                "categories":[
                                    {
                                        "mainCategory":"Infusiones",
                                        "products":[
                                            {
                                                "title":"Té Hibiscus",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FHibiscus-Te-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Las flores de hibisco impregnan esta infusión de una ligera acidez y un extraordinario color rojizo. Brillantes sabores tropicales de papaya y mango con hierba limón cítrica y una pizca de canela. Contiene 12 unidades de 3,4 g."
                                            },
                                            {
                                                "title":"Té Youthberry",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FYouthberry-Tea-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Una mezcla de té blanco cítrico con toques brillantes de sabor tropical. Con mango, naranja, hibisco y pétalos de rosa. Hay un toque de paraíso en cada sorbo de esta fantástica mezcla. Contiene 12 unidades de 3,4 g."
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Té Chai",
                                        "products":[
                                            {
                                                "title":"Té Chai",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FChai-Tea-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Deliciosa combinación de té y especias, al estilo de los habitantes del Himalaya. Una intensa infusión de canela, jengibre, cardamomo, pimienta negra y anís estrellado. Contiene 12 unidades de 3,4 g."
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Té Negro",
                                        "products":[
                                            {
                                                "title":"Té Earl Grey",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEarl-Grey-Tea-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Una brillante mezcla de tés negros de Sri Lanka con una aromática esencia de bergamota y lavanda. Contiene 12 unidades de 3,4 g."
                                            },
                                            {
                                                "title":"Té English Breakfast",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FEarl-Grey-Tea-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"Mezcla de tés negros: Assam de la India, Ceilán de Sri Lanka y té negro de China. Los tés de Assam añaden toques profundos de malta y té negro y un rico aroma a caramelo. Los tés de Ceilán aportan un sabor brillante y completo, mientras que los de China tienen un sutil toque como recién recién horneado, lo cual hace del English Breakfast una opción única. Contiene 12 unidades de 3,4 g."
                                            }
                                        ]
                                    },
                                    {
                                        "mainCategory":"Té Verde",
                                        "products":[
                                            {
                                                "title":"Té Mint Citrus",
                                                "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMint-Citrus-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
                                                "description":"La base de hierbabuena de este té se complementa con notas de menta fresca y toques de verbena dulce y especiada. Contiene 12 unidades de 3,4 g."
                                            }]
                                    }
                                ]
                            }
                        ]
                    }
                ]
    return (req);

}
