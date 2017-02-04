# arff-to-csv
Utility to transform a arff file into CSV file

## Options

- -n: Normalize numeric values. Default false.
- -h: Add attributes names as first line into CSV file (head). Default false.
- -d: File csv to create

## Examples

#### Generates a myfile.csv in the current work directory:
```sh
node arff-to-csv/index.js /mypath/myfile.arff
```


#### Generates a myfile.csv in the current work directory with normalized attributes:
```sh
node arff-to-csv/index.js /mypath/myfile.arff -n
```


#### Generates a myfile.csv in the current work directory with attribute names in the first line of the csv file:
```sh
node arff-to-csv/index.js /mypath/myfile.arff -h
```

#### Generates a myfile.csv in the current work directory with normalized attributes and ttribute names in the first line of the csv file:
```sh
node arff-to-csv/index.js /mypath/myfile.arff -n -h
```

#### Generates a myNewFile.csv in ./ directory:
```sh
node arff-to-csv/index.js /mypath/myfile.arff -d ./myNewFile.csv
```

#### Generates a a myNewFile.csv in ./ directory with normalized attributes and ttribute names in the first line of the csv file:
```sh
node arff-to-csv/index.js /mypath/myfile.arff -n -h -d ./myHeadlessFile.csv
```
