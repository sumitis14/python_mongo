import datetime
import dateutil.parser
import json
from pymongo import MongoClient
from bson import json_util
from pprint import pprint
from collections import defaultdict,Counter

client = MongoClient('localhost', 27017)
eosdb = client.EOS
collection = eosdb['stream_data'] 

with open('file1.json') as data_file:    
    data = json.load(data_file)

# parsing data from JSON
tx = data['trace']['action_traces'][0]['trx_id']
time_stamp = dateutil.parser.parse(data['trace']["block_time"], ignoretz=True)
action_trace = data['trace']['action_traces'][0]['act'][:]

# Make tuple of account-action
data_list = []
action = []
for key in action_trace:
    data_list.append((key['account'],key['name']))

# Account details [account_name, action_name,action_count]
account_details = []
for key,count in Counter(data_list).items():
    account_name,action_name = key
    account_details.append([account_name,action_name,count])


compiled_data = []
for data in account_details:
    temp_dict = {}
    temp_dict['tx_id'] = tx
    temp_dict['timestamp'] = time_stamp
    temp_dict['account_details'] = {"account":data[0],"action":data[1],"count":data[2]}
    compiled_data.append(temp_dict)

# Insert to mongoDb
collection.insert_many(compiled_data)
print("Inserted!")
