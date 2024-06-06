### Hexlet tests, linter status and test coverage:
[![Actions Status](https://github.com/AlekseyIvanyukov/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AlekseyIvanyukov/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b905994ed73974b6da39/maintainability)](https://codeclimate.com/github/AlekseyIvanyukov/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b905994ed73974b6da39/test_coverage)](https://codeclimate.com/github/AlekseyIvanyukov/frontend-project-46/test_coverage)

# Difference calculator

## Getting started

### Prerequisites

* `npm` should be installed
* `git` should be installed

### Basic installation

Difference calculator is installed by running the following command in your terminal. You can install this via the command-line with `git`.

#### via git
```shell
git clone https://github.com/AlekseyIvanyukov/frontend-project-46.git
```
```shell
cd frontend-project-46
```
#### To install
```shell
make install
```

##### Usage and options:
```shell
gendiff -h
```
[![asciicast](https://asciinema.org/a/ey8Ye3HN9VcLV2S9NiT7cLLuj.svg)](https://asciinema.org/a/ey8Ye3HN9VcLV2S9NiT7cLLuj)

##### Example diff of two flat files (json):
```shell
gendiff file3.json file4.json
```
[![asciicast](https://asciinema.org/a/W9Gh6zSw6psUJR12R3oVL0Osu.svg)](https://asciinema.org/a/W9Gh6zSw6psUJR12R3oVL0Osu)

##### Example diff of two flat files yml (yaml):
```shell
gendiff file3.yml file4.yml
```
[![asciicast](https://asciinema.org/a/ZIhEpgjNfAqsaQy2jFTus2Yfg.svg)](https://asciinema.org/a/ZIhEpgjNfAqsaQy2jFTus2Yfg)

##### Recursive comparsion with default format 'stylish':
```shell
gendiff file1.json file2.json
```
[![asciicast](https://asciinema.org/a/CPT6tG9Zjnsyr50FGFGyGCMqP.svg)](https://asciinema.org/a/CPT6tG9Zjnsyr50FGFGyGCMqP)

##### Recursive comparsion with plain format:
```shell
gendiff -f plain file1.json file2.yaml
```
[![asciicast](https://asciinema.org/a/15PbykfdVCzH250PRLgJwlDQl.svg)](https://asciinema.org/a/15PbykfdVCzH250PRLgJwlDQl)

##### Recursive comparsion with json format:
```shell
gendiff -f json file1.json file2.yaml
```
[![asciicast](https://asciinema.org/a/lqPACasEeIMVoGpD0ZRczupA7.svg)](https://asciinema.org/a/lqPACasEeIMVoGpD0ZRczupA7)