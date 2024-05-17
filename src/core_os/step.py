import sys, os
from typing import Union
sys.path.append('/Users/rama2r/AIOS')

from src.core_os.meta import StepType
from src.core_os.memory import SessionMemory
from src.core_os.engines import GPTEngine

from src.core_os.agents.config import Agent
from src.core_os.agents.cpu_agents import process_deleter, process_informer, system_informer

from pprint import pprint as print

class Step:
    def __init__(self, name: str, instruction: str, _type: StepType, _next: Union['Step', list['Step'], None], parent: 'StepRouter'):
        self.name= name
        self.instruction = instruction
        self._type =  _type
        self.parent = parent
        self._next=_next
        


    def _resolve(self, name='gpt-3.5-turbo', guidelines="""
        You are a capable AI manager that controls the OS of a computer. You will be given a task, delimited by triple backticks \
        , and expected to complete it by outputting the name of an agent \
        along with the parameters needed.
                 
        You also be given a memory consisting of current information/data you have, delimited by triple hashtags, and a list of possible agents. \
        Finally, ensure to output the results in JSON format, like \
        
        {
            agent_name: name here,
            parameters: object where keys are function param names, and values are the values that should be passed in
        }
    """, instruct=''):
        response_engine = GPTEngine(name=name, system=guidelines)

        agent_info = '\n\n'.join(self.parent.agents)
        
        query = f"""
            Task: ```{self.instruction}```

            Memory: ###{self.parent.memory.read_memory()}###

            Agent Information: {agent_info}
        """

        return response_engine.query(query, is_json=True)
        
         
class StepRouter:
    def __init__(self, start: Step | None, pool: set[Step], agents: list[Agent], memory: SessionMemory):
        self.start = start
        self.pool = pool
        self.agents = agents
        self.memory = memory

    def add_step(self, step: Step):
        self.pool.add(step)

if __name__ == '__main__':
    memory = SessionMemory()
    router = StepRouter(start=None, pool=set(), agents=[process_deleter, process_informer, system_informer], memory=memory)

    engine = GPTEngine()
    outline = engine.query('Task: ```Keep my CPU usage below 75%```').get('result')

    for step in outline:
        s = Step(name=step.get('name'), instruction=step.get('description'), _next=None, parent=router, _type=StepType.PROCESS)
        router.add_step(s)

    print([p.name for p in router.pool])
    print([p.get('description') for p in outline])

    
