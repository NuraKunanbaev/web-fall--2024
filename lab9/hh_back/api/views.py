from django.shortcuts import render
from django.http.response import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from api.models import Company
import json
from django.shortcuts import get_object_or_404
@csrf_exempt
@csrf_exempt
def all_companies(request):
    if request.method == 'GET':        
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            company = Company.objects.create(name=data.get("name"),
                                         description=data.get("description"),
                                         city=data.get("city"),
                                         address=data.get("address"))
            return JsonResponse(company.to_json())
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


def company(request, company_id):
    try:
        c = Company.objects.get(id=company_id)
        return JsonResponse(c.to_json())
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    
def vacancy_by_company(request, company_id):
    vacancy = Vacancy.objects.all()
    vacancy_json = [c.to_json() for c in vacancy if c.company.id == company_id]
    return JsonResponse(vacancy_json,safe = False)

@csrf_exempt
def all_vacancy(request):
    vacancy = Vacancy.objects.all()
    vacancy_json = [v.to_json() for v in vacancy]
    return JsonResponse(vacancy_json, safe = False)

def all_vacancies(request):
    if request.method == 'GET':        
        vacancies = Company.objects.all()
        vacancies_json = [c.to_json() for c in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            vacancy = Vacancy.objects.create(name=data.get("name"),
                                         description=data.get("description"),
                                         salary=data.get("salary"),
                                         category=data.get("category"))
            return JsonResponse(vacancy.to_json())
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


# def vacancy(request, vacancy_id):
#     try:
#         v = Vacancy.objects.get(id = vacancy_id)
#     except Company.DoesNotExist as error:
#         return JsonResponse({'error'})
#     return JsonResponse(v.to_json)


def vacancy(request, vacancy_id):
    try:
        c = Company.objects.get(id=vacancy_id)
        return JsonResponse(c.to_json())
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10].values()  # Retrieve top 10 vacancies sorted by salary and convert to dictionary
    return JsonResponse(list(vacancies), safe=False)
