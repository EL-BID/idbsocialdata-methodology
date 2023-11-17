bookdown::render_book("index.Rmd", "bookdown::gitbook")


bookdown::render_book("index.Rmd", "bookdown:::bs4_book")


#```{r IDB, out.width='50%', fig.align='center', echo=FALSE, include=identical(knitr:::pandoc_to(), 'html'), fig.link='https://www.iadb.org/en/sharing-knowledge/data/social-data', fig.show='hold',  out.extra='style="float:right; padding:0px"'}
#knitr::include_graphics('figure/IDB.png')
#```
