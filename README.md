
[![IDB Logo](https://scldata.iadb.org/assets/iadb-7779368a000004449beca0d4fc6f116cc0617572d549edf2ae491e9a17f63778.png)](https://scldata.iadb.org)

# Data and Indicators for Latin America and the Caribbean: Methodology Handbook
**Interamerican Development Bank – IDB**

## Overview
Data and Indicators for Latin America and the Caribbean (LAC) is a digital platform that provides key data and indicators for regional research and development. It addresses fundamental issues such as poverty, health, inequality, employment, education, and migration and especially highlights the gender and diversity perspective.

This tool aims to provide a unified source of harmonized, standardized, and comparable demographic, economic, and social data for the 26 countries of the LAC region. The goal is to invite diverse audiences to discover and study the situation in the region.

This repository is the process of creating the documentation of the data and indicators available in the platform based on guidelines that we follow to estimate the 

## Methodology

The Methodology Handbook was developed using Markdown (Allaire, Horner et al., 2019) and the bookdown package (Xie, 2016). It is constructed in the R environment. The documentation is published on a GitHub Pages with the following link: https://el-bid.github.io/idbsocialdata-methodology/index.html. 

## Requirements
The only requirement is that it must be installed in the Bookdown R package.

## Building and previewing this site: Steps
**1.	Create the R project with bookdown:** 
>IDBSocialdata

**2.	Create a Rmarkdown document to generate the site content:**

There are 14 markdown documents, but they're just six main topics; the other documents are the translations in English (-eng) and Portuguese (-pt):

- *Index:* It is the home page.
-	*01-Intro:* Below is an overview of the data and indicators available in the following sections.
- *02-Methodology:* Explain how each indicator is constructed. 
- *03-GyD:* Explain what can be found in the Gender and Diversity dashboard.
- *04-Source:* Explain the indicators' primary data sources. 
- *05-Track:* Displays the latest updates to the Social Sector dashboard and indicators, including the date and brief explanation of changes. 
- *07-references:* Provide the code to print book references from *book.bib*.

**4.	File to building the site**

- *_bookdown.yml:* It indicates how the Rmarkdown documents will be organized on the site and the folder where the HTML file will be saved (docs).
- *_output.yml:* Defining a site's style and sharing conditions is done in this section. Bookdown allows for different styles, such as the gitbook style, to be implemented.

**5.	Render** 
To render the site and create the HTML files, you must run the following code, which depends on the style: 

```
bookdown::render_book("index.Rmd", "bookdown::gitbook")
```
- After running this command, the HTML files are updated in the docs folder, and always ensure that the file .nojekyll is in the folder.
- Copy and replace the docs folder into the main folder.

**6.	Publish the site** 

To update the live website, you must first commit and merge the changes from the local version into the main branch.
Additional information

To learn more about the bookdown package and process, see https://bookdown.org/yihui/bookdown/why-read-this-book.html. 

## References

Allaire, JJ, J. Horner, and Y. Xie et al. 2019. Markdown: Render Markdown with the c Library' Sundown.' https://CRAN.R-project.org/package=markdown.

Xie, Y. 2016. Bookdown: Authoring Books and Technical Documents with R Markdown. Boca Raton, Florida: Chapman; Hall/CRC. https://github.com/rstudio/bookdown.

## Limitation of responsibilities
---
The IDB is not responsible, under any circumstance, for damage or compensation, moral or patrimonial; direct or indirect; accessory or special; or by way of consequence, foreseen or unforeseen, that could arise:

I. Under any concept of intellectual property, negligence, or detriment of another part of theory, I
ii. Following the use of the Digital Tool, including, but not limited to, defects in the Digital Tool or the loss or inaccuracy of data of any kind. The foregoing includes expenses or damages associated with communication failures and / or malfunctions of computers, linked to the use of the Digital Tool.
