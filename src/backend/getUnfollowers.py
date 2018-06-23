#!/usr/bin/python3

import sys
from json import dumps
from utils.utils import *

unfollowers = getUnfollowers(getInstaAPI(sys.argv[1], sys.argv[2]))
print(dumps(unfollowers), end='', flush=True)