# [[ A CLASS SHOULD HAVE ONE JOB ]]

from abc import ABC, abstractmethod
from typing import List
# abc is a builtin module, we have to import ABC and abstractmethod

class Shape(ABC):
    @abstractmethod
    def cal_square(self):
        pass

# Initiate 2 example classes: Square and Circle inherited from Shape Abstract Class
class Square(Shape):
    def __init__(self, length: int):
        self.length = length
    def cal_square(self):
        return pow(self.length, 2)


class Circle:
    def __init__(self, radius: int):
        self.radius = radius

    def cal_square(self):
        return pow(self.radius, 2) * 3.14


# Create AreaCalculator for calculate square of all shapes in shape_list
class AreaCalculator:
    def __init__(self, shape: List[Shape] = []):
        self._shape = shape

    def sum(self) -> list:
        res = [x.cal_square() for x in self._shape]
        return res

shape = [Square(length=5), Circle(radius=5), Square(length=10), Circle(radius=10)]
newArea = AreaCalculator(shape=shape)
print(newArea.sum())
#[25, 78.5, 100, 314.0]

# SO IF YOU WANT TO PRINT THE RESULT IN OTHER FORMAT LIKE dict OR STRING. YOU 
# SHOULD NOT ADD SOME METHOD INTO OLD CLASS, YOU NEED TO CREAT NEW CLASS FOR ONLY SHOWING

class SumCalculatorOutputter:
    def __init__(self, area_calculator: AreaCalculator):
        self._area_calculator = area_calculator
    def result_in_dict(self):
        return {
            'data': self._area_calculator.sum()
        }

    def result_in_string(self):
        return "Result is " + str(self._area_calculator.sum())

sum_showing = SumCalculatorOutputter(area_calculator=newArea)
print(sum_showing.result_in_dict()) # {'data': [25, 78.5, 100, 314.0]}
print(sum_showing.result_in_string()) # Result is [25, 78.5, 100, 314.0]
