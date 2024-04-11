from django.db import models

class Company(models.model):
    name = models.CharField('Company name', max_length = 100 )
    description = models.TextField('Description')
    city = models.CharField('City', max_length = 100)
    address = models.TextField('Address')
    
    def to_json(self):
        return {
        'name': self.name,
        'description' : self.description,
        'city' : self.city,
        'address' : self.address,

        }
    

class Vacancy(models.model):
    name = models.CharField('VAcancy name', max_length = 100)
    description = models.TextField('Description')
    salary = models.FloatField('Salary', null = True, blanck = True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def on_json(self):
        return {
            'name' : self.name,
            'description' : self.description,
            'salary' : self.salary,
            'company' : self.company.name,

        }

