from django.core.validators import validate_slug, validate_unicode_slug 


def validate_unique_slug(Model, slug):
    models = list(Model.objects.filter(slug=slug))
    if len(models) == 0:
        return True
    return False


def adapt_slug(slug: str):
    slug = slug.replace('_',' ').replace(' ','-').lower()
    adapted_slug = ''
    list_slug = list(slug)
    replaces = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
                'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
                'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
                'ã': 'a', 'õ': 'o',
                }
    for letter in list_slug:
        change = replaces.get(letter)
        if change is not None:
            adapted_slug += change
        else:
            adapted_slug += letter
    return adapted_slug


def set_slug(Model, slug: str):
    invalid_letters = list()
    slug = adapt_slug(slug)
    slug_list = list(slug)
    for letter in slug_list:
        try:
            validate_slug(letter)
            validate_unicode_slug(letter)
        except:
            invalid_letters.append(letter)
    for letter in invalid_letters:
        slug_list.remove(letter)
    while validate_unicode_slug(Model, slug):
        slug_list += ['-', 'c']
    return "".join(slug_list)
    
    
