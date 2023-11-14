---
title: "Metodología datos e indicadores de América Latina y el Caribe"
author: "Banco Interamericano de Desarrollo"
date: "2023-11"
github-repo:
output: html_document
link-citations: yes
links-as-notes: true
colorlinks: yes
description: |
  This site describes the indicators available in SCLData
---

```{=html}
<style type="text/css">
h1 { /* Header 1 */
  font-size: 20px;
}
h2 { /* Header 2 */
    font-size: 18px;
}
h3 { /* Header 3 */
    font-size: 14px;
}
body {
text-align: justify}

</style>
```
```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE) 
```

![](C:/Users/linaa/OneDrive%20-%20Inter-American%20Development%20Bank%20Group/Documents%5CGitHub%5CIDBSocialData-Methodology/BID_LAC_ALC.jpg){width="288" height="183"}

# Datos e indicadores de América Latina y el Caribe

## Nota metodológica

### Introducción

Este documento describe la metodología empleada por el Banco Interamericano de Desarrollo (BID) para calcular los indicadores que se presentan en la plataforma "Datos e Indicadores de América Latina y el Caribe (ALC)" para los 26 países de la región. Estos indicadores se basan principalmente en las Encuestas de Hogares Armonizadas del BID y los Censos de Población y Vivienda Armonizados del BID. En la actualidad, se calculan más de 100 indicadores, algunos de los cuales también se obtienen de fuentes externas diferentes a los datos armonizados del BID.

Aunque la mayoría de los indicadores en la plataforma se calculan a partir de la información de las encuestas de hogares nacionales, no pretenden reemplazar ni sustituir a los datos oficiales de un país en particular. A pesar de los esfuerzos realizados para garantizar la calidad y la comparabilidad de los datos entre países, en algunos casos, los indicadores podrían diferir de las definiciones oficiales de uno o más países. El proceso utilizado para generar cada uno de los indicadores calculados con las encuestas y censos armonizados se detalla en el repositorio de git.

A continuación, se describen las secciones que detallan el proceso de cálculo de los indicadores y las fuentes de datos utilizadas para dicho cálculo.

**Cuando se cite el uso de la herramienta y los indicadores, utilice el siguiente formato:** Banco Interamericano de Desarrollo (2023). "Datos e Indicadores de América Latina y el Caribe." Disponible en [URL]. Consultado en el 2023."
