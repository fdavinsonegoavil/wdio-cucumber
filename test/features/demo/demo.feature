Feature: Demo feature

    @demo
    Scenario Outline: Ejecutar el primer demo feature

        Given La pagina de Google se abrio
        When Buscar con <SearchItem>
        Then Seleccionar en el primer resultado de busqueda
        Then La URL deberia de matchear con <ExpectedURL>
        
        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/es/ |
