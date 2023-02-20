class Base:
    # private class attribute
    __nb_objects = 0
    
    def __init__(self, id=None):
        if id is not None:
            # if id is provided, assign it to public instance attribute id
            self.id = id
        else:
            # otherwise, increment __nb_objects and assign new value to public instance attribute id
            Base.__nb_objects += 1
            self.id = Base.__nb_objects

