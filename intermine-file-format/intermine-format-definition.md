## InterMine-Galaxy exchange format

This file format exists as an intermediate step to import from Galaxy to
InterMines and is not in itself a data format intended to be used for data
storage or any purpose apart from Galaxy->InterMine interoperability.

This file has two mandatory columns and one optional column

## Column 1 (mandatory)
**Type of identifier**, e.g. `Gene` or `Protein`. Must be a class in the [InterMine
data model](http://intermine.readthedocs.io/en/latest/data-model/model/#a-short-example).
Gene or Protein is always a safe option.

## Column 2 (mandatory)
**Identifier** this could be, as an example, a gene symbol like `GATA1` or
another other identifier, e.g. `FBGN0000099`
or perhaps a protein accession, or some other identifier.

## Column 3 (optional)
**Organism name** - e.g. `H. sapiens` or `Drosophila melanogaster`.
This is optional and does not have to be precise, but is good to provide if
it is known.
