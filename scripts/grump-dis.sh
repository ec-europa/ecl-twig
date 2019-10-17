#!/bin/sh
sed -i.bak "/php .\/vendor\/bin\/grumphp/d" .git/hooks/pre-commit
