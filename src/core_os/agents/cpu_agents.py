from src.core_os.agents.config import Agent
from random import randint

    
process_deleter = Agent(name='cpu_deleter', purpose='Ends execution of program, freeing up its CPU usage', process_name=str, total_usage=float, process_usage=float)
process_informer = Agent(name='cpu_informer', purpose='Gets the current CPU usage for a process', process_name=str)
system_informer = Agent(name='system_informer', purpose='Gets the current total usage by CPU for all processes combined')


def process_deleter_call(self, process_name, total_usage, process_usage):
    return total_usage - process_usage

def process_informer_call(self, process_name):
    return randint(0, 50)

def system_informer_call(self, process_name):
    return randint(350, 400)


process_deleter._call = process_deleter_call
process_informer._call = process_informer_call
system_informer._call = system_informer_call
    






    
    

