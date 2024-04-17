from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    city = models.CharField(max_length=30)
    address = models.TextField()
    def to_json(self):
        return {'id': self.id,
                'name': self.name,
                'description': self.description,
                'city': self.city,
                'address': self.address}
    
class Vacancy(models.Model):
    name = models.CharField(max_length=25)
    description = models.TextField()
    salary = models.FloatField(null=True, blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'category': self.company.name
        }