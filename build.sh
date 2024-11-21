#!/bin/bash

set -euo pipefail

cd circuit 

nargo compile 
bb write_vk -b ./target/circuit.json
bb contract

mkdir -p ../client/src/artifacts
cp ./target/circuit.json ../client/src/artifacts/circuit.json