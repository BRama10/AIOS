from abc import ABC, abstractmethod
import os
from openai import OpenAI
import json

from pprint import pprint as print

# class EngineResult:
#     def __init__(self, result, rank: None | int):
#         self.result = result
#         self.rank = rank


class Engine(ABC):
    @abstractmethod
    def __init__(self, *args, **kwargs):
        raise NotImplementedError

    @abstractmethod
    def query(self, query: str):
        raise NotImplementedError


class GPTEngine(Engine):
    def __init__(self, name: str = 'gpt-3.5-turbo', system: str = """
            You are an analytical thinker that manages a computer's OS's process, such as CPU, GPU, and all the internal processes. You output your answers in JSON format.
                 
            You will be given a task, delimited by triple backticks (```), such as "Regulate the CPU of the machine below 75%". \
            You are to split the task into a sequence of steps that need to be performed (from the perspective of a computer) to complete the task,  \
            with each step should only contain **ONE ENDING** action. If loop-like behaviour is needed, have steps point to earlier steps. Be as detailed as possible! \

            Be sure NOT to directly answer the question, even if it is solvable directly, but just outline the steps needed as mentioned above. \
            
            Sample steps are like "Allocate memory for browser executable" or "Search phrase in current open browser" or "Switch focus to window X (where X is a specific window)"
                 
            Make sure to think of this from the perspective of an OS, not a GUI or User,
                 
            Each step has the following attributes:
            
            Step Type: The step type categorizes the nature of the operation being performed in each step, \
            analogous to control structures in conventional programming. We define three primary types of steps:
                – process: Akin to a procedural statement in traditional programming, this step type executes a \
                specific operation and transitions to the next specified step.
                
                – decision: Corresponding to conditional statements (e.g., ’if-else’), this step involves branching \
                the program flow based on evaluated conditions, leading to multiple potential paths.  
                
                – terminal: Similar to the ’end’ or ’return’ statement, this step marks the conclusion of the program, \
                indicating that no further steps are to be executed.
            
            Step Name: A distinct phrase that identifies the step
                 
            Step Description: Description that will be passed into a LLM to perform the task. Ensure description is thorough.

            Next Step: If type is process, should contain the next step, matching exactly to the name. If \
            type is decision, then should contain a dictionary, where each key is a condition & each value is a step name. If type is terminal, should be null.
                 
            Output your results as a JSON object:
            
            {
                'result': here
            }
                 
            Where 'result' is a list (array) of JSON objects, where each object contains the above attributes, like \
            { 
                'name': name.
                'type' either process, decision, terminal
                'description': description
            }
                 
            An (possible incorrect) example of psuedosteps for the query "Message Sam 'Hello'" would be 
            Allocate memory for messages app, open messages app executable application, type message, send message, close messages app, deallocate memory

        """):
        self.client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
        self.model_name = name
        self.system = system

    def query(self, query: str, is_json=True):
        if is_json:
            response = self.client.chat.completions.create(
                model=self.model_name,
                messages=[
                    {'role' : 'system', 'content': self.system},
                    {'role': 'user', 'content': query}
                ],
                temperature=0.3,
                stream=False,
                response_format={ "type": "json_object" },
            )
        else:
            response = self.client.chat.completions.create(
                model=self.model_name,
                messages=[
                    {'role' : 'system', 'content': self.system},
                    {'role': 'user', 'content': query}
                ],
                temperature=0.3,
                stream=False,
            )

        if is_json:
            parsed_response: dict[str, list[dict]] = json.loads(response.choices[0].message.content)
        else:
            parsed_response = response.choices[0].message.content

        return parsed_response

if __name__=='__main__':
    e = GPTEngine()
    e.query('Task: ```Keep my CPU usage below 75%```')