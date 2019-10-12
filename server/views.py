from django.http import HttpResponse
import requests
import nude
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def download(src):
    r = requests.get(str(src))
    if r.ok:
        with open('img','wb') as f:
            for chunk in r.iter_content(100000):
                f.write(chunk)
        return True
    else:
        return False

def response_view(request):
    src = request.GET.get('src','KeyError')
    if src == 'KeyError':
        return HttpResponse('Improper Request')
    print(f'Got {src}')
    # return HttpResponse(src)
    val = download(src)
    print('download complete')
    if val:
        print('checking')
        status = nude.is_nude(os.path.join(BASE_DIR,'img'))
        return HttpResponse(str(status))
    else:
        return HttpResponse('failure')

